(function () {
  const input = document.getElementById("terminal-input");
  const form = document.getElementById("terminal-form");
  const content = document.getElementById("content-area");

  if (!input || !form || !content) return;

  const history = [];
  let historyIndex = -1;
  let PROJECTS_CACHE = null;

  function scrollToBottom() {
    requestAnimationFrame(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  function printLine(text) {
    const line = document.createElement("div");
    line.textContent = text;
    content.appendChild(line);
    scrollToBottom();
  }

  function printHTML(html) {
    const block = document.createElement("div");
    block.className = "block";
    block.innerHTML = html;
    content.appendChild(block);
    scrollToBottom();
  }

  function hint() {
    printLine("type 'help' to get started");
  }

  function clearScreen() {
    content.innerHTML = "";
    hint();
  }

  function firstScreen() {
    printHTML(window.CONTENT.about);
    hint();
  }

  function genericHelp(command) {
    return `
<div class="block">
  <h2 class="term-title">${command}</h2>

  <p>
    Display the <span class="term-key">${command}</span> section.
  </p>

  <p>
    <span class="term-key">usage:</span><br>
    <span class="term-value">${command}</span>
  </p>
</div>
`;
  }

  async function loadProjects() {
    if (PROJECTS_CACHE) return PROJECTS_CACHE;

    try {
      const res = await fetch("src/data/projects.json");
      const data = await res.json();
      PROJECTS_CACHE = data.projects;
      return PROJECTS_CACHE;
    } catch {
      printLine("failed to load projects data");
      return [];
    }
  }

  function renderProjects(projects) {
    if (!projects.length) {
      printLine("no projects found");
      return;
    }

    const html = projects
      .map((p) => {
        const website = p.website
          ? `<br><a class="term-link" href="${p.website}" target="_blank">→ live website</a>`
          : "";

        const stack = Array.isArray(p.stack) ? p.stack.join(", ") : "";

        return `
<p>
  <span class="term-key">${p.name}</span><br>
  <span class="term-muted">${p.description}</span><br>

  <span class="term-key">domain:</span>
  <span class="term-value">${p.domain}</span><br>

  <span class="term-key">stack:</span>
  <span class="term-value">${stack}</span><br>

  <a class="term-link" href="${p.repo}" target="_blank">
    → source repository
  </a>
  ${website}
</p>
`;
      })
      .join("");

    printHTML(`<div class="block"><h2 class="term-title">Projects</h2>${html}</div>`);
  }

  const COMMAND_HANDLERS = {
    clear() {
      clearScreen();
    },

    help(args) {
      // plain `help`
      if (args.length === 0) {
        printHTML(window.CONTENT.help);
        return;
      }

      const target = args[0];

      // extended help (from help.js)
      if (window.HELP_TEXT && window.HELP_TEXT[target]) {
        printHTML(window.HELP_TEXT[target]);
        return;
      }

      // content-based generic help
      if (window.CONTENT[target]) {
        printHTML(genericHelp(target));
        return;
      }

      printLine(`no help available for '${target}'`);
    },

    async projects(args) {
      const projects = await loadProjects();

      if (args.length === 0) {
        renderProjects(projects);
        return;
      }

      const term = args[0].toLowerCase();

      const filtered = projects.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.domain.toLowerCase().includes(term) ||
          p.stack.some((s) => s.toLowerCase().includes(term))
      );

      if (!filtered.length) {
        printLine(`no projects found matching '${term}'`);
        return;
      }

      renderProjects(filtered);
    },
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const raw = input.value.trim();
    if (!raw) return;

    printLine(`$ ${raw}`);
    history.push(raw);
    historyIndex = history.length;

    const [command, ...args] = raw.split(/\s+/);

    if (COMMAND_HANDLERS[command]) {
      COMMAND_HANDLERS[command](args);
    } else if (window.CONTENT[command]) {
      printHTML(window.CONTENT[command]);
    } else {
      printLine(`command not found: ${command}`);
    }

    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (!history.length) return;
      e.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
    }

    if (e.key === "ArrowDown") {
      if (!history.length) return;
      e.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });

  firstScreen();
})();
