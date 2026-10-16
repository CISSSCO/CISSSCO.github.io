(function () {
  const app = document.getElementById("terminal-app");
  const screen = document.getElementById("terminal-screen");
  const content = document.getElementById("content-area");
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  const clock = document.getElementById("term-clock");
  const themeBadge = document.getElementById("term-theme-badge");

  const btnClose = document.getElementById("btn-close");
  const btnMin = document.getElementById("btn-min");
  const btnMax = document.getElementById("btn-max");

  if (!input || !form || !content || !screen) return;

  const history = [];
  let historyIndex = -1;
  let tempDraft = "";

  let PROJECTS_CACHE = null;
  let SKILLS_CACHE = null;
  let EXPERIENCE_CACHE = null;
  let MAN_CACHE = null;

  /* ================= Theme & Clock Management ================= */

  let currentTheme = localStorage.getItem("cisco_terminal_theme") || "default";

  function setTheme(themeName) {
    currentTheme = themeName;
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("cisco_terminal_theme", themeName);
    if (themeBadge) {
      themeBadge.textContent = `theme: ${themeName}`;
    }
  }

  function getTheme() {
    return currentTheme;
  }

  function toggleCRT() {
    if (!app) return false;
    const active = app.classList.toggle("crt");
    localStorage.setItem("cisco_terminal_crt", active ? "1" : "0");
    return active;
  }

  // Restore saved theme & CRT settings
  setTheme(currentTheme);
  if (localStorage.getItem("cisco_terminal_crt") === "1" && app) {
    app.classList.add("crt");
  }

  // Live system clock
  function updateClock() {
    if (!clock) return;
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ================= Window Dot Button Actions ================= */

  if (btnClose) {
    btnClose.addEventListener("click", () => terminalAPI.exit());
  }
  if (btnMin) {
    btnMin.addEventListener("click", () => terminalAPI.clear());
  }
  if (btnMax) {
    btnMax.addEventListener("click", () => {
      const active = toggleCRT();
      printLine(`CRT scanlines ${active ? "enabled" : "disabled"}`);
    });
  }

  // Interactive workspace tag badges
  const tagBadges = document.querySelectorAll(".tag-badge");
  tagBadges.forEach((badge, idx) => {
    badge.style.cursor = "pointer";
    badge.addEventListener("click", () => {
      tagBadges.forEach(b => b.classList.remove("active"));
      badge.classList.add("active");
      if (idx === 0) {
        terminalAPI.banner();
      } else if (idx === 1) {
        executeCommand("projects hpccfs");
      } else if (idx === 2) {
        executeCommand("projects");
      }
    });
  });

  // Cycle themes on clicking theme badge
  if (themeBadge) {
    themeBadge.style.cursor = "pointer";
    themeBadge.title = "Click to cycle theme";
    themeBadge.addEventListener("click", () => {
      const themes = window.COMMANDS ? window.COMMANDS.getThemes() : ["default", "matrix", "dracula", "gruvbox", "nord", "amber"];
      const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
      setTheme(themes[nextIdx]);
      printLine(`Theme switched to '${themes[nextIdx]}'`);
    });
  }

  /* ================= Core Helpers ================= */

  function escapeHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      screen.scrollTop = screen.scrollHeight;
    });
  }

  function printLine(text, className = "") {
    const line = document.createElement("div");
    if (className) line.className = className;
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

  const promptPathSpan = document.getElementById("prompt-path");
  const titleTextSpan = document.getElementById("term-title-text");

  function updatePromptDisplay() {
    const p = window.VFS ? window.VFS.getPromptPath() : "~";
    if (promptPathSpan) {
      promptPathSpan.textContent = p;
    }
    if (titleTextSpan) {
      titleTextSpan.textContent = `cisco@cisssco: ${p} (zsh)`;
    }
    document.title = `cisco@cisssco: ${p}`;
  }

  function printExecutedCommand(rawCmd) {
    const p = window.VFS ? window.VFS.getPromptPath() : "~";
    const entry = document.createElement("div");
    entry.className = "terminal-cmd-entry";
    entry.innerHTML = `
      <span class="prompt-user">cisco</span><span class="prompt-at">@</span><span class="prompt-host">cisssco</span>:<span class="prompt-path">${p}</span><span class="prompt-char">$</span>
      <span class="cmd-text">${escapeHTML(rawCmd)}</span>
    `;
    content.appendChild(entry);
    scrollToBottom();
  }

  /* ================= Animated Banner ================= */

  let activeAnimationSkip = null;

  function renderAnimatedBanner(onComplete) {
    if (activeAnimationSkip) {
      activeAnimationSkip();
    }

    const rawBanner = window.CONTENT && window.CONTENT.banner ? window.CONTENT.banner : "";
    const bodyHTML = window.CONTENT && window.CONTENT.aboutBody ? window.CONTENT.aboutBody : "";

    if (!rawBanner) {
      if (window.CONTENT && window.CONTENT.about) {
        printHTML(window.CONTENT.about);
      }
      if (onComplete) onComplete();
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "terminal-section";

    const pre = document.createElement("pre");
    pre.className = "neofetch";

    const bannerSpan = document.createElement("span");
    bannerSpan.className = "ascii-banner";

    const cursorSpan = document.createElement("span");
    cursorSpan.className = "term-cursor";
    cursorSpan.textContent = "█";

    const bodySpan = document.createElement("span");
    bodySpan.className = "about-body";

    pre.appendChild(bannerSpan);
    pre.appendChild(cursorSpan);
    pre.appendChild(bodySpan);
    wrapper.appendChild(pre);
    content.appendChild(wrapper);

    let timer = null;
    let isDone = false;
    let charIndex = 0;
    const bannerLength = rawBanner.length;

    function cleanup() {
      if (timer) clearTimeout(timer);
      timer = null;
      document.removeEventListener("keydown", onUserSkip, true);
      document.removeEventListener("pointerdown", onUserSkip, true);
      input.removeEventListener("input", onUserSkip, true);
      if (activeAnimationSkip === finish) {
        activeAnimationSkip = null;
      }
    }

    function finish() {
      if (isDone) return;
      isDone = true;
      cleanup();

      bannerSpan.textContent = rawBanner;
      if (cursorSpan.parentNode) {
        cursorSpan.parentNode.removeChild(cursorSpan);
      }
      bodySpan.innerHTML = bodyHTML;
      scrollToBottom();
      if (onComplete) onComplete();
    }

    function onUserSkip() {
      finish();
    }

    activeAnimationSkip = finish;

    document.addEventListener("keydown", onUserSkip, true);
    document.addEventListener("pointerdown", onUserSkip, true);
    input.addEventListener("input", onUserSkip, true);

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    function step() {
      if (isDone) return;

      if (charIndex >= bannerLength) {
        timer = setTimeout(() => {
          if (isDone) return;
          if (cursorSpan.parentNode) {
            cursorSpan.parentNode.removeChild(cursorSpan);
          }
          bodySpan.innerHTML = bodyHTML;
          scrollToBottom();
          isDone = true;
          cleanup();
          if (onComplete) onComplete();
        }, 120);
        return;
      }

      const currentChar = rawBanner[charIndex];
      let stepSize = 3;
      let delay = 9;

      if (currentChar === "\n") {
        stepSize = 1;
        delay = 24;
      }

      charIndex = Math.min(charIndex + stepSize, bannerLength);
      bannerSpan.textContent = rawBanner.slice(0, charIndex);
      scrollToBottom();

      timer = setTimeout(step, delay);
    }

    step();
  }

  function hint() {
    printHTML(`<div class="term-dim" style="margin-top: 0.5rem;">type '<span class="term-green">help</span>' for available commands or '<span class="term-cyan">ls</span>' to explore files.</div>`);
  }

  function clearScreen() {
    if (activeAnimationSkip) {
      activeAnimationSkip();
    }
    content.innerHTML = "";
    hint();
  }

  function firstScreen() {
    renderAnimatedBanner(() => {
      hint();
    });
  }

  /* ================= Data Loaders ================= */

  async function loadProjects() {
    if (PROJECTS_CACHE) return PROJECTS_CACHE;
    try {
      const res = await fetch("src/data/projects.json");
      const data = await res.json();
      PROJECTS_CACHE = Array.isArray(data) ? data : (data.projects || []);
      return PROJECTS_CACHE;
    } catch (err) {
      return [];
    }
  }

  async function loadSkills() {
    if (SKILLS_CACHE) return SKILLS_CACHE;
    try {
      const res = await fetch("src/data/skills.json");
      const data = await res.json();
      SKILLS_CACHE = Array.isArray(data) ? data : (data.skills || []);
      return SKILLS_CACHE;
    } catch (err) {
      return [];
    }
  }

  async function loadExperience() {
    if (EXPERIENCE_CACHE) return EXPERIENCE_CACHE;
    try {
      const res = await fetch("src/data/experience.json");
      const data = await res.json();
      EXPERIENCE_CACHE = Array.isArray(data) ? data : (data.experience || []);
      return EXPERIENCE_CACHE;
    } catch (err) {
      return [];
    }
  }

  async function loadMan() {
    if (MAN_CACHE) return MAN_CACHE;
    try {
      const res = await fetch("src/data/man.json");
      MAN_CACHE = await res.json();
      return MAN_CACHE;
    } catch (err) {
      return { commands: {}, topics: {} };
    }
  }

  async function initVFSData() {
    try {
      const [p, s, e] = await Promise.all([loadProjects(), loadSkills(), loadExperience()]);
      if (p.length && s.length && e.length && window.VFS && window.VFS.init) {
        window.VFS.init(p, s, e);
      }
    } catch (err) {}
  }
  initVFSData();

  /* ================= Terminal-Native Renderers ================= */

  function renderProjects(projects) {
    if (!projects || !projects.length) {
      printLine("no projects match query");
      return;
    }

    const items = projects.map((p, index) => {
      const isLast = index === projects.length - 1;
      const branchChar = isLast ? "└──" : "├──";
      const pipeChar = isLast ? "    " : "│   ";

      const stackBadges = (p.stack || []).map(s => `[${s}]`).join(" ");
      const title = p.title || p.name || p.id;
      const excerpt = p.excerpt || p.description || "";
      const repo = p.repo || "";
      const web = p.url || p.website || null;

      return `
<span class="tree-branch">${branchChar} </span><span class="tree-node term-bold">${title}</span> ${p.featured ? '<span class="term-badge term-yellow">featured</span>' : ""}
<span class="tree-branch">${pipeChar}├── </span><span class="term-key">desc:</span>  <span class="tree-desc">${excerpt}</span>
<span class="tree-branch">${pipeChar}├── </span><span class="term-key">stack:</span> <span class="term-cyan">${stackBadges}</span>
<span class="tree-branch">${pipeChar}${web ? "├──" : "└──"} </span><span class="term-key">repo:</span>  <a class="term-link" href="${repo}" target="_blank">${repo}</a>
${web ? `<span class="tree-branch">${pipeChar}└── </span><span class="term-key">web:</span>   <a class="term-link" href="${web}" target="_blank">${web}</a>` : ""}
      `.trim();
    }).join("\n");

    printHTML(`
<div class="terminal-section">
  <div class="term-title term-bold" style="margin-bottom: 0.5rem;">~/projects (${projects.length} entries)</div>
  <div class="term-tree">
${items}
  </div>
  <div class="term-dim" style="margin-top: 0.75rem;">
    [Tip] Navigate into projects with '<span class="term-cyan">cd projects/&lt;id&gt;</span>', then '<span class="term-green">ls</span>' and '<span class="term-green">cat README.md</span>' (or details.txt, stack.txt, links.txt).
  </div>
</div>
    `);
  }

  function renderSkills(skills) {
    if (!skills || !skills.length) {
      printLine("no skills match query");
      return;
    }

    const rows = skills.map(s => {
      const rawLevel = s.level != null ? s.level : 70;
      const pct = rawLevel <= 10 ? rawLevel * 10 : rawLevel;
      const level10 = Math.min(10, Math.max(0, Math.round(pct / 10)));
      const fillBar = "█".repeat(level10);
      const emptyBar = "░".repeat(10 - level10);
      const barHTML = `<span class="bar-fill">${fillBar}</span><span class="bar-empty">${emptyBar}</span>`;

      return `
      <tr>
        <td style="font-weight:600; min-width: 130px;"><span class="term-cyan">${s.name}</span></td>
        <td style="min-width: 140px; white-space: nowrap;"><span style="font-family:inherit;">[${barHTML}]</span> <span class="term-dim">${pct}%</span></td>
        <td style="min-width: 110px;"><span class="term-yellow">${s.category || ""}</span></td>
        <td>
          <span class="term-fg">${s.context || s.notes || ""}</span>
        </td>
      </tr>
      `;
    }).join("");

    printHTML(`
<div class="terminal-section">
  <div class="term-title term-bold" style="margin-bottom: 0.5rem;">~/skills (${skills.length} competencies)</div>
  <div class="term-table-responsive">
    <table class="term-table">
      <thead>
        <tr>
          <th>SKILL</th>
          <th>PROFICIENCY</th>
          <th>CATEGORY</th>
          <th>PRACTICAL CONTEXT</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>
  <div class="term-dim" style="margin-top: 0.5rem;">
    [Tip] Explore detailed skill dossiers with '<span class="term-cyan">cd skills/&lt;skill_id&gt;</span>' and view '<span class="term-green">proficiency.txt</span>', '<span class="term-green">projects.txt</span>', '<span class="term-green">experience.txt</span>'.
  </div>
</div>
    `);
  }

  function renderExperience(experiences) {
    if (!experiences || !experiences.length) {
      printLine("no experience records found");
      return;
    }

    const cards = experiences.map(e => {
      const role = e.role || e.title;
      const org = e.org || e.organization;
      const period = e.period;
      const duration = e.duration ? `(${e.duration})` : "";
      const summary = e.summary || "";
      const highlights = e.highlights || e.responsibilities || [];
      const stack = e.stack || e.technologies || [];

      return `
<div style="margin-bottom: 1.5rem;">
  <div>
    <span class="term-green term-bold">* ${period}</span>
    ${duration ? `<span class="term-dim"> · </span><span class="term-yellow">${duration}</span>` : ""}
  </div>
  <div style="font-size: 1.05rem; margin: 0.2rem 0 0.1rem;">
    <span class="term-title term-bold">${role}</span>
    <span class="term-dim"> @ </span>
    <span class="term-cyan">${org}</span>
  </div>
  <div class="term-fg" style="margin: 0.4rem 0 0.6rem;">${summary}</div>

  <div class="term-key" style="margin-bottom: 0.3rem;">Key Highlights & Responsibilities:</div>
  <ul style="margin: 0 0 0.8rem 0; padding-left: 1.2rem;">
    ${highlights.map(r => `<li style="margin-bottom: 0.25rem;">${r}</li>`).join("")}
  </ul>

  <div>
    <span class="term-key">Stack: </span>
    ${stack.map(t => `<span class="term-badge">${t}</span>`).join(" ")}
  </div>
</div>
      `;
    }).join("");

    printHTML(`
<div class="terminal-section">
  <div class="term-title term-bold" style="margin-bottom: 0.75rem;">~/experiences (${experiences.length} positions)</div>
  ${cards}
  <div class="term-dim" style="margin-top: 0.75rem;">
    [Tip] Explore detailed role logs with '<span class="term-cyan">cd experiences/&lt;id&gt;</span>' and view '<span class="term-green">role.txt</span>', '<span class="term-green">responsibilities.txt</span>', '<span class="term-green">stack.txt</span>'.
  </div>
</div>
    `);
  }

  function renderManEntry(name, entry) {
    let html = `
<div class="terminal-section">
  <div class="term-title term-bold">NAME</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    <span class="term-key">${name}</span> — ${entry.summary || ""}
  </div>

  <div class="term-title term-bold">SYNOPSIS</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    <pre>${entry.usage ? entry.usage.join("\n") : name}</pre>
  </div>

  <div class="term-title term-bold">DESCRIPTION</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    <p>${entry.description || entry.summary || ""}</p>
  </div>
`;

    if (entry.options) {
      html += `
  <div class="term-title term-bold">OPTIONS</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    <table class="term-table">
      ${Object.entries(entry.options).map(([k, v]) => `<tr><td style="width:130px;"><span class="term-cyan">${k}</span></td><td>${v}</td></tr>`).join("")}
    </table>
  </div>`;
    }

    if (entry.filters) {
      html += `
  <div class="term-title term-bold">FILTERS</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    ${entry.filters.map(f => `<span class="term-badge">${f}</span>`).join(" ")}
  </div>`;
    }

    if (entry.examples) {
      html += `
  <div class="term-title term-bold">EXAMPLES</div>
  <div style="padding-left: 1rem; margin-bottom: 0.75rem;">
    <pre>${entry.examples.join("\n")}</pre>
  </div>`;
    }

    html += `</div>`;
    printHTML(html);
  }

  function renderAllManEntries() {
    const docs = window.HELP_DOCS || {};
    let sections = Object.entries(docs).map(([name, entry]) => `
<div style="margin-bottom: 1.2rem; border-left: 2px solid var(--accent); padding-left: 0.85rem;">
  <div style="margin-bottom: 0.35rem;">
    <span class="term-cyan term-bold" style="font-size: 1.05rem;">${name}</span>
    <span class="term-dim"> — </span>
    <span class="term-value">${entry.summary || ""}</span>
  </div>
  <div style="margin: 0.25rem 0;"><span class="term-key">Synopsis:</span> <span class="term-yellow">${entry.usage ? entry.usage.join(" | ") : name}</span></div>
  <div style="line-height: 1.5; margin: 0.35rem 0;"><span class="term-dim">${entry.description || ""}</span></div>
  ${entry.examples ? `<div style="margin-top: 0.25rem;"><span class="term-key">Examples:</span> <span class="term-green">${entry.examples.join(", ")}</span></div>` : ""}
</div>
    `).join("");

    printHTML(`
<div class="terminal-section">
  <div class="term-title term-bold" style="font-size: 1.1rem; margin-bottom: 0.4rem;">CISSSCO MANUAL — COMPLETE COMMAND REFERENCE</div>
  <div class="term-dim" style="margin-bottom: 1rem;">Comprehensive manual pages for all commands, shell utilities, and navigation tools.</div>
  ${sections}
  <div class="term-dim" style="margin-top: 0.8rem; border-top: 1px dashed var(--border); padding-top: 0.5rem;">
    [Tip] Type '<span class="term-cyan">man &lt;command&gt;</span>' (e.g. '<span class="term-green">man ranger</span>', '<span class="term-green">man projects</span>') for individual command manuals.<br>
    [Tip] Type '<span class="term-cyan">help</span>' for a concise summary.
  </div>
</div>
    `);
  }

  /* ================= Terminal API for Commands ================= */

  const terminalAPI = {
    printLine,
    printHTML,

    clear() {
      clearScreen();
    },

    banner() {
      renderAnimatedBanner();
    },

    cd(targetDir) {
      if (!window.VFS) return;
      const res = window.VFS.cd(targetDir);
      if (!res.success) {
        printLine(res.error);
      } else {
        updatePromptDisplay();
      }
    },

    exit() {
      input.disabled = true;
      content.innerHTML = "";

      const screenDiv = document.createElement("div");
      screenDiv.className = "exit-screen";
      screenDiv.innerHTML = `
        <div class="exit-box">
          <div class="exit-title">[Session Terminated]</div>
          <div class="exit-message">cisco@cisssco connection closed.</div>
          <div class="exit-sub">Thank you for visiting! Refresh the browser to restart session.</div>
        </div>
      `;
      document.body.appendChild(screenDiv);

      setTimeout(() => {
        try { window.close(); } catch (e) {}
      }, 1500);
    },

    async projects(args = []) {
      const list = await loadProjects();
      if (!args.length) return renderProjects(list);

      const term = args[0].toLowerCase();
      renderProjects(list.filter(p =>
        (p.title && p.title.toLowerCase().includes(term)) ||
        (p.name && p.name.toLowerCase().includes(term)) ||
        (p.id && p.id.toLowerCase().includes(term)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(term)) ||
        (p.domain && p.domain.toLowerCase().includes(term)) ||
        (p.description && p.description.toLowerCase().includes(term)) ||
        (p.stack && p.stack.some(s => s.toLowerCase().includes(term)))
      ));
    },

    async skills(args = []) {
      const list = await loadSkills();
      if (!args.length) return renderSkills(list);

      const term = args[0].toLowerCase();
      renderSkills(list.filter(s =>
        (s.name && s.name.toLowerCase().includes(term)) ||
        (s.id && s.id.toLowerCase().includes(term)) ||
        (s.category && s.category.toLowerCase().includes(term)) ||
        (s.context && s.context.toLowerCase().includes(term)) ||
        (s.notes && s.notes.toLowerCase().includes(term)) ||
        (s.areas && s.areas.some(a => a.toLowerCase().includes(term)))
      ));
    },

    async experience(args = []) {
      const list = await loadExperience();
      if (!args.length) return renderExperience(list);

      const term = args[0].toLowerCase();
      renderExperience(list.filter(e =>
        (e.role && e.role.toLowerCase().includes(term)) ||
        (e.title && e.title.toLowerCase().includes(term)) ||
        (e.id && e.id.toLowerCase().includes(term)) ||
        (e.org && e.org.toLowerCase().includes(term)) ||
        (e.organization && e.organization.toLowerCase().includes(term)) ||
        (e.summary && e.summary.toLowerCase().includes(term)) ||
        ((e.stack || e.technologies) && (e.stack || e.technologies).some(t => t.toLowerCase().includes(term)))
      ));
    },

    async man(args = []) {
      if (!args.length || args[0] === "--all") {
        renderAllManEntries();
        return;
      }
      const name = args[0].toLowerCase();

      // Check window.HELP_DOCS first
      if (window.HELP_DOCS && window.HELP_DOCS[name]) {
        renderManEntry(name, window.HELP_DOCS[name]);
        return;
      }

      // Check man.json
      const man = await loadMan();
      if (man.commands && man.commands[name]) {
        renderManEntry(name, man.commands[name]);
        return;
      }
      if (man.topics && man.topics[name]) {
        renderManEntry(name, {
          summary: man.topics[name].summary,
          usage: man.topics[name].usage,
          description: man.topics[name].summary
        });
        return;
      }

      printLine(`No manual entry for '${name}'`);
    },

    setTheme,
    getTheme,
    toggleCRT,
    getHistory() {
      return [...history];
    }
  };

  /* ================= Command Dispatcher ================= */

  async function executeCommand(raw) {
    if (activeAnimationSkip) {
      activeAnimationSkip();
    }

    const trimmed = raw.trim();
    if (!trimmed) {
      printExecutedCommand("");
      return;
    }

    printExecutedCommand(trimmed);
    history.push(trimmed);
    historyIndex = history.length;
    tempDraft = "";

    const [cmd, ...args] = trimmed.split(/\s+/);
    const cmdLower = cmd.toLowerCase();

    // Check registered command in COMMANDS
    const commandObj = window.COMMANDS && window.COMMANDS.get(cmdLower);

    if (commandObj) {
      try {
        await commandObj.run({ terminal: terminalAPI, args });
      } catch (err) {
        printLine(`Error executing ${cmdLower}: ${err.message}`, "term-red");
      }
    } else if (window.CONTENT && window.CONTENT[cmdLower]) {
      printHTML(window.CONTENT[cmdLower]);
    } else {
      printLine(`command not found: ${cmd}. Type 'help' for available commands.`, "term-dim");
    }

    input.value = "";
    scrollToBottom();
  }

  /* ================= Form Submission & Focus ================= */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value;
    input.value = "";
    executeCommand(raw);
  });

  // Focus input on click anywhere on screen (unless selecting text)
  screen.addEventListener("click", () => {
    const sel = window.getSelection();
    if (!sel || sel.toString().length === 0) {
      input.focus();
    }
  });

  /* ================= Keydown & Tab Completion ================= */

  input.addEventListener("keydown", (e) => {
    // Up Arrow (history)
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      if (historyIndex === history.length) {
        tempDraft = input.value;
      }
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] || "";
      return;
    }

    // Down Arrow (history)
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!history.length) return;
      if (historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex] || "";
      } else {
        historyIndex = history.length;
        input.value = tempDraft;
      }
      return;
    }

    // Ctrl + L (Clear screen)
    if (e.ctrlKey && (e.key === "l" || e.key === "L")) {
      e.preventDefault();
      terminalAPI.clear();
      return;
    }

    // Ctrl + C (Interrupt current line)
    if (e.ctrlKey && (e.key === "c" || e.key === "C")) {
      e.preventDefault();
      printExecutedCommand(input.value + "^C");
      input.value = "";
      tempDraft = "";
      scrollToBottom();
      return;
    }

    // Ctrl + U (Clear input)
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
      input.value = "";
      tempDraft = "";
      return;
    }

    // Tab (Autocompletion)
    if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
      return;
    }
  });

  function handleTabCompletion() {
    const raw = input.value;
    const trimmed = raw.trimStart();
    const parts = trimmed.split(/\s+/);

    const allCommands = window.COMMANDS ? window.COMMANDS.getCommandNames() : [];
    const allFiles = window.COMMANDS ? window.COMMANDS.getFiles() : [];
    const allThemes = window.COMMANDS ? window.COMMANDS.getThemes() : [];

    // Case 1: Completing the command name (first word)
    if (parts.length <= 1) {
      const prefix = parts[0] ? parts[0].toLowerCase() : "";
      const matches = allCommands.filter(c => c.startsWith(prefix));

      if (matches.length === 1) {
        input.value = matches[0] + " ";
      } else if (matches.length > 1) {
        // Show matching candidates
        printExecutedCommand(input.value);
        printHTML(`<div class="term-dim" style="line-height:1.6">${matches.map(m => `<span class="term-cyan">${m}</span>`).join("&nbsp;&nbsp;&nbsp;&nbsp;")}</div>`);
        // Find longest common prefix
        const common = getCommonPrefix(matches);
        if (common.length > prefix.length) {
          input.value = common;
        }
      }
      return;
    }

    // Case 2: Completing arguments for commands
    const command = parts[0].toLowerCase();
    const argRaw = parts[parts.length - 1] || "";
    const argPrefix = argRaw.toLowerCase();

    if (command === "cd" || command === "cat" || command === "ls") {
      if (window.VFS) {
        const isDirOnly = (command === "cd");
        const matches = window.VFS.getCompletions(argRaw, isDirOnly);

        let dirPrefix = "";
        if (argRaw.includes("/")) {
          dirPrefix = argRaw.slice(0, argRaw.lastIndexOf("/") + 1);
        }

        if (matches.length === 1) {
          const completion = dirPrefix + matches[0];
          parts[parts.length - 1] = completion;
          const trailing = completion.endsWith("/") ? "" : " ";
          input.value = parts.join(" ") + trailing;
        } else if (matches.length > 1) {
          printExecutedCommand(input.value);
          printHTML(`<div class="term-dim" style="line-height:1.6">${matches.map(m => `<span class="${m.endsWith('/') ? 'term-accent term-bold' : 'term-yellow'}">${m}</span>`).join("&nbsp;&nbsp;&nbsp;&nbsp;")}</div>`);
          const common = getCommonPrefix(matches);
          const filePrefix = argRaw.includes("/") ? argRaw.slice(argRaw.lastIndexOf("/") + 1) : argRaw;
          if (common.length > filePrefix.length) {
            parts[parts.length - 1] = dirPrefix + common;
            input.value = parts.join(" ");
          }
        }
      }
      return;
    }

    let candidatePool = [];
    if (command === "theme") {
      candidatePool = allThemes;
    } else if (command === "man") {
      candidatePool = allCommands;
    }

    if (candidatePool.length) {
      const matches = candidatePool.filter(item => item.toLowerCase().startsWith(argPrefix));
      if (matches.length === 1) {
        parts[parts.length - 1] = matches[0];
        input.value = parts.join(" ") + " ";
      } else if (matches.length > 1) {
        printExecutedCommand(input.value);
        printHTML(`<div class="term-dim" style="line-height:1.6">${matches.map(m => `<span class="term-yellow">${m}</span>`).join("&nbsp;&nbsp;&nbsp;&nbsp;")}</div>`);
        const common = getCommonPrefix(matches);
        if (common.length > argPrefix.length) {
          parts[parts.length - 1] = common;
          input.value = parts.join(" ");
        }
      }
    }
  }

  function getCommonPrefix(strings) {
    if (!strings.length) return "";
    let prefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
      while (!strings[i].toLowerCase().startsWith(prefix.toLowerCase())) {
        prefix = prefix.slice(0, -1);
        if (!prefix) return "";
      }
    }
    return prefix;
  }

  /* ================= Boot ================= */

  firstScreen();
  input.focus();
})();
