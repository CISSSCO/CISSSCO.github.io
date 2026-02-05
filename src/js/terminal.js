(function () {
  const input = document.getElementById("terminal-input");
  const form = document.getElementById("terminal-form");
  const content = document.getElementById("content-area");

  if (!input || !form || !content) return;

  const history = [];
  let historyIndex = -1;

  let PROJECTS_CACHE = null;
  let SKILLS_CACHE = null;
  let MAN_CACHE = null;

  /* ================= Core helpers ================= */

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
    if (window.CONTENT && window.CONTENT.about) {
      printHTML(window.CONTENT.about);
    }
    hint();
  }

  /* ================= Data loaders ================= */

  async function loadProjects() {
    if (PROJECTS_CACHE) return PROJECTS_CACHE;
    const res = await fetch("src/data/projects.json");
    const data = await res.json();
    PROJECTS_CACHE = data.projects;
    return PROJECTS_CACHE;
  }

  async function loadSkills() {
    if (SKILLS_CACHE) return SKILLS_CACHE;
    const res = await fetch("src/data/skills.json");
    const data = await res.json();
    SKILLS_CACHE = data.skills;
    return SKILLS_CACHE;
  }

  async function loadMan() {
    if (MAN_CACHE) return MAN_CACHE;
    const res = await fetch("src/data/man.json");
    MAN_CACHE = await res.json();
    return MAN_CACHE;
  }

  /* ================= Renderers ================= */

  function renderProjects(projects) {
    if (!projects.length) {
      printLine("no projects found");
      return;
    }

    const html = projects.map(p => {
      const website = p.website
        ? `<br><a class="term-link" href="${p.website}" target="_blank">→ live website</a>`
        : "";

      return `
<p>
  <span class="term-key">${p.name}</span><br>
  <span class="term-muted">${p.description}</span><br>
  <span class="term-key">domain:</span>
  <span class="term-value">${p.domain}</span><br>
  <span class="term-key">stack:</span>
  <span class="term-value">${p.stack.join(", ")}</span><br>
  <a class="term-link" href="${p.repo}" target="_blank">→ source repository</a>
  ${website}
</p>`;
    }).join("");

    printHTML(`<div class="block"><h2 class="term-title">Projects</h2>${html}</div>`);
  }

  function renderSkills(skills) {
    if (!skills.length) {
      printLine("no skills found");
      return;
    }

    const html = skills.map(s => `
<p>
  <span class="term-key">${s.name}</span>
  <span class="term-muted">(level ${s.level}/10)</span><br>
  <span class="term-key">areas:</span>
  <span class="term-value">${s.areas.join(", ")}</span><br>
  <span class="term-key">used in:</span>
  <span class="term-value">${s.used_in.join(", ")}</span><br>
  <span class="term-muted">${s.notes}</span>
</p>
`).join("");

    printHTML(`<div class="block"><h2 class="term-title">Skills</h2>${html}</div>`);
  }

  function renderManEntry(name, entry) {
    let html = `
<h2 class="term-title">${name}</h2>
<p>${entry.summary}</p>

<h3 class="term-key">USAGE</h3>
<pre>${entry.usage.join("\n")}</pre>

<h3 class="term-key">DESCRIPTION</h3>
<p>${entry.description}</p>
`;

    if (entry.options) {
      html += `
<h3 class="term-key">OPTIONS</h3>
<ul>
${Object.entries(entry.options)
  .map(([k, v]) => `<li><span class="term-key">${k}</span> — ${v}</li>`)
  .join("")}
</ul>`;
    }

    if (entry.filters) {
      html += `
<h3 class="term-key">FILTERS</h3>
<ul>${entry.filters.map(f => `<li>${f}</li>`).join("")}</ul>`;
    }

    if (entry.examples) {
      html += `
<h3 class="term-key">EXAMPLES</h3>
<pre>${entry.examples.join("\n")}</pre>`;
    }

    printHTML(`<div class="block">${html}</div>`);
  }

  /* ================= Commands ================= */

  const COMMAND_HANDLERS = {
    clear() {
      clearScreen();
    },

    async projects(args) {
      const projects = await loadProjects();
      if (!args.length) return renderProjects(projects);

      const term = args[0].toLowerCase();
      renderProjects(projects.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.domain.toLowerCase().includes(term) ||
        p.stack.some(s => s.toLowerCase().includes(term))
      ));
    },

    async skills(args) {
      const skills = await loadSkills();
      if (!args.length) return renderSkills(skills);

      const term = args[0].toLowerCase();
      renderSkills(skills.filter(s =>
        s.name.toLowerCase().includes(term) ||
        s.areas.some(a => a.toLowerCase().includes(term))
      ));
    },

    async man(args) {
      if (!args.length) {
        printLine("usage: man <command>");
        return;
      }

      const man = await loadMan();
      const name = args[0];

      if (man.commands && man.commands[name]) {
        renderManEntry(name, man.commands[name]);
        return;
      }

      if (man.topics && man.topics[name]) {
        printHTML(`
<div class="block">
  <h2 class="term-title">${name}</h2>
  <p>${man.topics[name].summary}</p>
  <pre>${man.topics[name].usage.join("\n")}</pre>
</div>
`);
        return;
      }

      printLine(`no manual entry for '${name}'`);
    }
  };

  /* ================= Input handling ================= */

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const raw = input.value.trim();
    if (!raw) return;

    printLine(`$ ${raw}`);
    history.push(raw);
    historyIndex = history.length;

    const [cmd, ...args] = raw.split(/\s+/);

    if (COMMAND_HANDLERS[cmd]) {
      COMMAND_HANDLERS[cmd](args);
    } else if (window.CONTENT && window.CONTENT[cmd]) {
      printHTML(window.CONTENT[cmd]);
    } else {
      printLine(`command not found: ${cmd}`);
    }

    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] || "";
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });

  /* ================= Boot ================= */

  firstScreen();
})();
