(function () {
  const COMMANDS = {};

  const FILES = [
    "about.txt",
    "experiences/",
    "projects/",
    "skills/",
    "philosophy.txt",
    "uses.org",
    "README.org"
  ];

  const THEMES = [
    "default",
    "matrix",
    "dracula",
    "gruvbox",
    "nord",
    "amber"
  ];

  function register(command) {
    COMMANDS[command.name] = command;
  }

  function get(name) {
    return COMMANDS[name];
  }

  function list() {
    return Object.values(COMMANDS);
  }

  function getCommandNames() {
    return Object.keys(COMMANDS);
  }

  function getFiles() {
    return [...FILES];
  }

  function getThemes() {
    return [...THEMES];
  }

  // --- Core Commands ---

  register({
    name: "help",
    description: "show available commands",
    usage: "help",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.help);
    },
  });

  register({
    name: "about",
    description: "display author identity and system overview",
    usage: "about",
    run({ terminal }) {
      terminal.banner();
    },
  });

  register({
    name: "banner",
    description: "display animated ASCII banner",
    usage: "banner",
    run({ terminal }) {
      terminal.banner();
    },
  });

  register({
    name: "cisssco",
    description: "alias for banner",
    usage: "cisssco",
    run({ terminal }) {
      terminal.banner();
    },
  });

  register({
    name: "projects",
    description: "list portfolio projects (optional filter: projects <keyword>)",
    usage: "projects [filter]",
    async run({ terminal, args }) {
      await terminal.projects(args);
    },
  });

  register({
    name: "skills",
    description: "display technical skill ratings & domains",
    usage: "skills [filter]",
    async run({ terminal, args }) {
      await terminal.skills(args);
    },
  });

  register({
    name: "experience",
    description: "display engineering and research work history",
    usage: "experience [filter]",
    async run({ terminal, args }) {
      await terminal.experience(args);
    },
  });

  register({
    name: "experiences",
    description: "alias for experience",
    usage: "experiences [filter]",
    async run({ terminal, args }) {
      await terminal.experience(args);
    },
  });

  register({
    name: "philosophy",
    description: "engineering philosophy & values",
    usage: "philosophy",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.philosophy);
    },
  });

  register({
    name: "uses",
    description: "hardware, window managers & toolchains",
    usage: "uses",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.uses);
    },
  });

  register({
    name: "man",
    description: "display manual documentation for a command",
    usage: "man <command>",
    async run({ terminal, args }) {
      await terminal.man(args);
    },
  });

  register({
    name: "clear",
    description: "clear terminal scrollback",
    usage: "clear",
    run({ terminal }) {
      terminal.clear();
    },
  });

  register({
    name: "exit",
    description: "close terminal session",
    usage: "exit",
    run({ terminal }) {
      terminal.exit();
    },
  });

  register({
    name: "quit",
    description: "alias for exit",
    usage: "quit",
    run({ terminal }) {
      terminal.exit();
    },
  });

  // --- Unix Shell Utilities ---

  register({
    name: "cd",
    description: "change current working directory",
    usage: "cd [directory]",
    run({ terminal, args }) {
      terminal.cd(args[0]);
    },
  });

  register({
    name: "ls",
    description: "list directory contents",
    usage: "ls [-l] [directory]",
    run({ terminal, args }) {
      const isLong = args.includes("-l") || args.includes("-la") || args.includes("-al");
      const target = args.find(a => !a.startsWith("-")) || "";

      if (!window.VFS) {
        terminal.printLine("ls: virtual filesystem not initialized");
        return;
      }

      const res = window.VFS.ls(target);
      if (!res.success) {
        terminal.printLine(res.error);
        return;
      }

      if (isLong) {
        const rows = res.entries.map(e => {
          const isDir = e.type === "dir";
          const perms = isDir ? "drwxr-xr-x 2 cisco cisco" : "-rw-r--r-- 1 cisco cisco";
          let color = "term-green";
          if (isDir) color = "term-accent term-bold";
          else if (e.name.endsWith(".org")) color = "term-yellow";
          else if (e.name.endsWith(".md")) color = "term-cyan";
          else if (e.name.endsWith(".txt")) color = "term-green";

          return `<tr>
            <td class="term-dim" style="padding-right:0.75rem; white-space:nowrap;">${perms}</td>
            <td class="term-dim" style="padding-right:0.75rem; text-align:right; white-space:nowrap;">${e.size}</td>
            <td class="term-dim" style="padding-right:0.75rem; white-space:nowrap;">${e.date}</td>
            <td style="white-space:nowrap;"><span class="${color}">${e.name}</span></td>
          </tr>`;
        });
        terminal.printHTML(`
          <div class="terminal-section term-ls-container">
            <div class="term-dim" style="margin-bottom:0.35rem;">total ${res.entries.length}</div>
            <div class="term-table-responsive">
              <table class="term-ls-table">
                <tbody>${rows.join("")}</tbody>
              </table>
            </div>
          </div>
        `);
      } else {
        const items = res.entries.map(e => {
          const isDir = e.type === "dir";
          let color = "term-green";
          if (isDir) color = "term-accent term-bold";
          else if (e.name.endsWith(".org")) color = "term-yellow";
          else if (e.name.endsWith(".md")) color = "term-cyan";
          else if (e.name.endsWith(".txt")) color = "term-green";

          return `<div class="term-ls-item"><span class="${color}">${e.name}</span></div>`;
        });
        terminal.printHTML(`<div class="terminal-section term-ls-grid">${items.join("")}</div>`);
      }
    },
  });

  register({
    name: "cat",
    description: "display content of a virtual file",
    usage: "cat <file>",
    async run({ terminal, args }) {
      if (!args.length) {
        terminal.printLine("cat: missing file operand");
        return;
      }

      if (!window.VFS) {
        terminal.printLine("cat: virtual filesystem not initialized");
        return;
      }

      if (args[0] === "*") {
        const lsRes = window.VFS.ls("");
        if (lsRes.success) {
          const files = lsRes.entries.filter(e => e.type === "file");
          for (const f of files) {
            terminal.printLine(`==> ${f.name} <==`, "term-yellow");
            const res = await window.VFS.cat(f.name, terminal);
            if (res.success && res.content) {
              terminal.printHTML(res.content);
            }
          }
        }
        return;
      }

      for (const target of args) {
        const res = await window.VFS.cat(target, terminal);
        if (!res.success) {
          terminal.printLine(res.error);
        } else if (res.content) {
          terminal.printHTML(res.content);
        }
      }
    },
  });

  register({
    name: "tree",
    description: "list contents of directories in a tree-like format",
    usage: "tree [directory]",
    run({ terminal, args }) {
      if (window.VFS) {
        terminal.printHTML(window.VFS.getTree(args[0] || ""));
      } else {
        terminal.printLine("tree: virtual filesystem not initialized");
      }
    },
  });

  register({
    name: "whoami",
    description: "print effective userid",
    usage: "whoami",
    run({ terminal }) {
      terminal.printHTML(`<div><span class="term-green">cisco</span> <span class="term-dim">(Abhishek Raj — HPC & Parallel Systems Engineer @ IIT BHU / C-DAC)</span></div>`);
    },
  });

  register({
    name: "uname",
    description: "print system information",
    usage: "uname [-a]",
    run({ terminal }) {
      terminal.printLine("Linux cisssco 6.6.0-arch1-1-custom x86_64 GNU/Linux");
    },
  });

  register({
    name: "pwd",
    description: "print name of current/working directory",
    usage: "pwd",
    run({ terminal }) {
      if (window.VFS) {
        terminal.printLine(window.VFS.getPwd());
      } else {
        terminal.printLine("/home/cisco");
      }
    },
  });

  register({
    name: "date",
    description: "display current system date and time",
    usage: "date",
    run({ terminal }) {
      terminal.printLine(new Date().toString());
    },
  });

  register({
    name: "echo",
    description: "display a line of text",
    usage: "echo [string ...]",
    run({ terminal, args }) {
      terminal.printLine(args.join(" "));
    },
  });

  register({
    name: "theme",
    description: "switch color theme: default, matrix, dracula, nord, gruvbox, amber",
    usage: "theme [name]",
    run({ terminal, args }) {
      if (!args.length) {
        const current = terminal.getTheme();
        const list = THEMES.map(t => t === current ? `<span class="term-green term-bold">* ${t} (active)</span>` : `  ${t}`).join("<br>");
        terminal.printHTML(`
<div class="terminal-section">
  <div class="term-title">AVAILABLE THEMES:</div>
  <div style="margin: 0.4rem 0;">${list}</div>
  <div class="term-dim">Usage: theme &lt;name&gt; (e.g. 'theme matrix', 'theme dracula')</div>
</div>
        `);
        return;
      }
      const target = args[0].toLowerCase();
      if (THEMES.includes(target)) {
        terminal.setTheme(target);
        terminal.printLine(`Theme switched to '${target}'`);
      } else {
        terminal.printLine(`theme: unknown theme '${target}'. Available: ${THEMES.join(", ")}`);
      }
    },
  });

  register({
    name: "crt",
    description: "toggle CRT scanlines display effect",
    usage: "crt",
    run({ terminal }) {
      const enabled = terminal.toggleCRT();
      terminal.printLine(`CRT scanlines ${enabled ? "enabled" : "disabled"}`);
    },
  });

  register({
    name: "history",
    description: "display command history",
    usage: "history",
    run({ terminal }) {
      const h = terminal.getHistory();
      if (!h.length) {
        terminal.printLine("history is empty");
        return;
      }
      const lines = h.map((cmd, i) => `  ${String(i + 1).padStart(3, " ")}  ${cmd}`).join("<br>");
      terminal.printHTML(`<div class="terminal-section" style="line-height:1.5">${lines}</div>`);
    },
  });

  register({
    name: "sudo",
    description: "execute a command as superuser",
    usage: "sudo [command]",
    run({ terminal }) {
      terminal.printHTML(`<div class="term-red">cisco is not in the sudoers file. This incident will be reported.</div>`);
    },
  });

  // ==========================================
  // Ranger Interactive File Manager
  // ==========================================

  register({
    name: "ranger",
    description: "open interactive terminal file manager with Miller columns",
    usage: "ranger [directory]",
    run({ terminal, args }) {
      if (window.RANGER) {
        window.RANGER.start(args[0] || "", terminal);
      } else {
        terminal.printLine("ranger: file manager module not available", "term-red");
      }
    },
  });

  register({
    name: "r",
    description: "alias for ranger",
    usage: "r [directory]",
    run({ terminal, args }) {
      if (window.RANGER) {
        window.RANGER.start(args[0] || "", terminal);
      }
    },
  });

  // ==========================================
  // Neofetch / About Aliases
  // ==========================================

  register({
    name: "neofetch",
    description: "display author identity, roles, and system banner",
    usage: "neofetch",
    run({ terminal }) {
      terminal.banner();
    },
  });

  register({
    name: "fetch",
    description: "alias for neofetch",
    usage: "fetch",
    run({ terminal }) {
      terminal.banner();
    },
  });

  // ==========================================
  // Navigation & Shell Shortcut Aliases
  // ==========================================

  register({
    name: "c",
    description: "alias for clear",
    usage: "c",
    run({ terminal }) {
      terminal.clear();
    },
  });

  register({
    name: "cls",
    description: "alias for clear",
    usage: "cls",
    run({ terminal }) {
      terminal.clear();
    },
  });

  register({
    name: "q",
    description: "alias for exit",
    usage: "q",
    run({ terminal }) {
      terminal.exit();
    },
  });

  register({
    name: "h",
    description: "alias for help",
    usage: "h",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.help);
    },
  });

  register({
    name: "ll",
    description: "list files in long format (alias for ls -l)",
    usage: "ll [directory]",
    run({ terminal, args }) {
      const lsCmd = COMMANDS["ls"];
      if (lsCmd) {
        lsCmd.run({ terminal, args: ["-l", ...args] });
      }
    },
  });

  register({
    name: "la",
    description: "list directory contents (alias for ls)",
    usage: "la [directory]",
    run({ terminal, args }) {
      const lsCmd = COMMANDS["ls"];
      if (lsCmd) {
        lsCmd.run({ terminal, args });
      }
    },
  });

  register({
    name: "l",
    description: "quick list directory contents (alias for ls)",
    usage: "l [directory]",
    run({ terminal, args }) {
      const lsCmd = COMMANDS["ls"];
      if (lsCmd) {
        lsCmd.run({ terminal, args });
      }
    },
  });

  register({
    name: "proj",
    description: "alias for projects",
    usage: "proj [filter]",
    async run({ terminal, args }) {
      await terminal.projects(args);
    },
  });

  register({
    name: "p",
    description: "alias for projects",
    usage: "p [filter]",
    async run({ terminal, args }) {
      await terminal.projects(args);
    },
  });

  register({
    name: "skill",
    description: "alias for skills",
    usage: "skill [filter]",
    async run({ terminal, args }) {
      await terminal.skills(args);
    },
  });

  register({
    name: "s",
    description: "alias for skills",
    usage: "s [filter]",
    async run({ terminal, args }) {
      await terminal.skills(args);
    },
  });

  register({
    name: "exp",
    description: "alias for experiences",
    usage: "exp [filter]",
    async run({ terminal, args }) {
      await terminal.experience(args);
    },
  });

  register({
    name: "e",
    description: "alias for experiences",
    usage: "e [filter]",
    async run({ terminal, args }) {
      await terminal.experience(args);
    },
  });

  register({
    name: "vfs",
    description: "alias for tree",
    usage: "vfs [directory]",
    run({ terminal, args }) {
      const treeCmd = COMMANDS["tree"];
      if (treeCmd) {
        treeCmd.run({ terminal, args });
      }
    },
  });

  // ==========================================
  // Alias Command
  // ==========================================

  register({
    name: "alias",
    description: "show all available command aliases",
    usage: "alias",
    run({ terminal }) {
      const aliasData = [
        { alias: "c", mapsTo: "clear", desc: "Clear terminal screen buffer" },
        { alias: "cls", mapsTo: "clear", desc: "Clear terminal screen buffer" },
        { alias: "q", mapsTo: "exit", desc: "Quit / terminate terminal session" },
        { alias: "ll", mapsTo: "ls -l", desc: "List files in detailed long format" },
        { alias: "la", mapsTo: "ls", desc: "List directory contents" },
        { alias: "l", mapsTo: "ls", desc: "Quick list directory contents" },
        { alias: "r", mapsTo: "ranger", desc: "Open Ranger interactive file manager" },
        { alias: "h", mapsTo: "help", desc: "Show help overview and commands" },
        { alias: "neofetch", mapsTo: "about", desc: "Display identity & author profile" },
        { alias: "fetch", mapsTo: "about", desc: "Display identity & author profile" },
        { alias: "proj / p", mapsTo: "projects", desc: "List portfolio projects with search filter" },
        { alias: "skill / s", mapsTo: "skills", desc: "Display technical skill ratings & domains" },
        { alias: "exp / e", mapsTo: "experiences", desc: "View professional engineering roles" },
        { alias: "vfs", mapsTo: "tree", desc: "Display visual filesystem tree" },
      ];

      const rows = aliasData.map(a => `
        <tr>
          <td style="width: 120px;"><span class="term-yellow term-bold">${a.alias}</span></td>
          <td style="width: 130px;"><span class="term-cyan">${a.mapsTo}</span></td>
          <td><span class="term-dim">${a.desc}</span></td>
        </tr>
      `).join("");

      terminal.printHTML(`
        <div class="terminal-section">
          <div class="term-title" style="margin-bottom:0.4rem;">COMMAND ALIASES:</div>
          <div class="term-table-responsive">
            <table class="term-table">
              <thead>
                <tr><th>ALIAS</th><th>MAPS TO</th><th>DESCRIPTION</th></tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
          <div class="term-dim" style="margin-top:0.4rem;">[Tip] Use shortcuts for faster terminal navigation.</div>
        </div>
      `);
    },
  });

  // Expose API
  window.COMMANDS = {
    get,
    list,
    getCommandNames,
    getFiles,
    getThemes,
  };
})();
