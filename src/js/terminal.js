(function () {
  const input = document.getElementById("terminal-input");
  const form = document.getElementById("terminal-form");
  const content = document.getElementById("content-area");

  if (!input || !form || !content) return;

  const history = [];
  let historyIndex = -1;

  let PROJECTS_CACHE = null;
  let SKILLS_CACHE = null;
  let EXPERIENCE_CACHE = null;
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
  const wrapper = document.createElement("div");
  wrapper.className = "terminal-section";
  wrapper.innerHTML = html;
  content.appendChild(wrapper);
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

  async function loadExperience() {
    if (EXPERIENCE_CACHE) return EXPERIENCE_CACHE;
    const res = await fetch("src/data/experience.json");
    const data = await res.json();
    EXPERIENCE_CACHE = data.experience;
    return EXPERIENCE_CACHE;
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

  const html = projects.map(p => `
<div class="block">
  <div class="item-title">${p.name}</div>
  <div class="item-meta">${p.domain}</div>

  <p>${p.description}</p>

  <div class="section-label">Stack</div>
  <div class="tech-row">
    ${p.stack.map(t => `<span class="tech-chip">${t}</span>`).join("")}
  </div>

  <p style="margin-top: 1rem">
    <a class="term-link" href="${p.repo}" target="_blank">→ source repository</a>
    ${p.website ? `<br><a class="term-link" href="${p.website}" target="_blank">→ live website</a>` : ""}
  </p>
</div>
`).join("");

  printHTML(`
<div class="section-card">
  <div class="section-title">Projects</div>
  ${html}
</div>
`);
}


function renderSkills(skills) {
  if (!skills.length) {
    printLine("no skills found");
    return;
  }

  const html = skills.map(s => `
<div class="block">
  <div class="item-title">${s.name}</div>
  <div class="item-meta">Level ${s.level}/10</div>

  <p>${s.notes}</p>

  <div class="section-label">Areas</div>
  <div class="tech-row">
    ${s.areas.map(a => `<span class="tech-chip">${a}</span>`).join("")}
  </div>

  <div class="section-label">Used In</div>
  <div class="tech-row">
    ${s.used_in.map(u => `<span class="tech-chip">${u}</span>`).join("")}
  </div>
</div>
`).join("");

  printHTML(`
<div class="section-card">
  <div class="section-title">Skills</div>
  ${html}
</div>
`);
}


function renderExperience(experiences) {
  if (!experiences.length) {
    printLine("no experience found");
    return;
  }

  const html = experiences.map(e => `
<div class="experience-card">
  <div class="experience-header">
    <div class="experience-title">${e.title}</div>
    <div class="experience-org">${e.organization}</div>
    <div class="experience-meta">${e.period} · ${e.type}</div>
  </div>

  <p class="experience-summary">${e.summary}</p>

  <div class="experience-section">
    <span class="experience-label">Responsibilities</span>
    <ul class="experience-list">
      ${e.responsibilities.map(r => `<li>${r}</li>`).join("")}
    </ul>
  </div>

  <div class="experience-section">
    <span class="experience-label">Technologies</span>
    <div class="experience-tech">
      ${e.technologies.map(t => `<span class="tech-chip">${t}</span>`).join("")}
    </div>
  </div>
</div>
`).join("");

printHTML(`
<div class="section-card">
  <div class="section-title">Experience</div>
  ${html}
</div>
`);
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

    async experience(args) {
      const experience = await loadExperience();
      if (!args.length) return renderExperience(experience);

      const term = args[0].toLowerCase();
      renderExperience(experience.filter(e =>
        e.title.toLowerCase().includes(term) ||
        e.organization.toLowerCase().includes(term) ||
        e.technologies.some(t => t.toLowerCase().includes(term))
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
