(function () {
  // Virtual Filesystem (VFS) for Cisco Ramon's terminal portfolio

  const PROJECT_DETAILS = {
    cerrfix: {
      domain: "linux tooling",
      stack: ["python", "shell", "regex", "posix"],
      repo: "https://github.com/CISSSCO/cerrfix",
      website: null,
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">cerrfix — Rule-based Error Analysis & Fix Suggestion Tool</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> cerrfix captures stderr from terminal commands, compilation runs, and scripts, classifies root causes via an extensible signature engine, and suggests actionable fixes.</p>
  
  <div class="term-title" style="margin-top: 0.8rem;">MOTIVATION:</div>
  <p>Standard compiler and shell error outputs are often verbose and cryptic (e.g. template instantiation errors in C++, missing shared libraries in dynamic linkers, or forgotten python virtual environments). cerrfix translates stacktraces and error codes into immediate explanations and corrective commands.</p>

  <div class="term-title" style="margin-top: 0.8rem;">USAGE EXAMPLES:</div>
  <pre>
  # Wrap command directly
  $ cerrfix gcc -o main main.c
  
  # Or pipe command stderr
  $ make 2>&1 | cerrfix --interactive
  
  # Scan log files
  $ cerrfix --analyze /var/log/build.log
  </pre>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">cerrfix — Key Features & Architecture</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">Pattern Matching Engine:</span> High-performance regex pipeline parsing GCC, Clang, ld, Python tracebacks, and Bash syntax errors.</li>
    <li><span class="term-green term-bold">Actionable Fix Recommendation:</span> Recommends exact shell commands (e.g. missing include packages, pkg-config flags, chmod permissions).</li>
    <li><span class="term-green term-bold">Interactive Execution:</span> Optional prompt to apply suggested fix directly with user confirmation.</li>
    <li><span class="term-green term-bold">Extensible Rule Base:</span> Plain JSON/YAML declarative rules allowing developers to add custom project-specific error handlers.</li>
    <li><span class="term-green term-bold">Zero Overhead:</span> Non-intrusive stream interceptor with negligible latency during normal execution.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">cerrfix — Technical Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <tbody>
      <tr><td style="width: 140px;"><span class="term-key">Core Engine</span></td><td>Python 3 (streaming parser, AST & error classification)</td></tr>
      <tr><td><span class="term-key">CLI Wrappers</span></td><td>POSIX Shell (transparent process wrapper and exit code propagation)</td></tr>
      <tr><td><span class="term-key">Rule Definition</span></td><td>JSON / YAML schema validation</td></tr>
      <tr><td><span class="term-key">Supported Toolchains</span></td><td>gcc, clang, ld, cmake, make, python, bash</td></tr>
    </tbody>
  </table>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">cerrfix — Repositories & Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/cerrfix" target="_blank">https://github.com/CISSSCO/cerrfix</a></p>
</div>
      `
    },

    gitpush: {
      domain: "developer tooling",
      stack: ["shell", "git", "posix"],
      repo: "https://github.com/CISSSCO/gitpush",
      website: null,
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">gitpush — Minimal Helper for Repetitive Git Workflows</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> Lightweight POSIX shell utility eliminating tedious staging, descriptive committing, branch tracking, and push sequences while adding safety checks.</p>

  <div class="term-title" style="margin-top: 0.8rem;">MOTIVATION:</div>
  <p>Developer fatigue from repeating <code>git add . && git commit -m "..." && git push</code> dozens of times daily. gitpush combines verification, conventional commit tagging, and upstream branch configuration into a single swift command.</p>

  <div class="term-title" style="margin-top: 0.8rem;">USAGE:</div>
  <pre>
  $ gitpush "feat: add autocompletion to terminal"
  # Stages modified files, generates formatted commit, pushes to upstream branch

  $ gitpush -b new-feature "wip: initial branch commit"
  # Creates and tracks upstream branch automatically
  </pre>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">gitpush — Features</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">One-step Workflow:</span> Intelligent status check, staging of tracked modifications, and atomic commit/push.</li>
    <li><span class="term-green term-bold">Auto-Upstream Setup:</span> Detects when tracking is unset and automatically runs with <code>--set-upstream origin &lt;branch&gt;</code>.</li>
    <li><span class="term-green term-bold">Branch Protection Guard:</span> Prompts for explicit verification before pushing directly to <code>main</code> or <code>master</code>.</li>
    <li><span class="term-green term-bold">Zero Dependencies:</span> Runs on any standard POSIX shell environment without external runtimes.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">gitpush — Technical Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Language:</span> POSIX Shell (sh / bash compatible)</p>
  <p><span class="term-key">Tool:</span> Git porcelain and plumbing commands (git status --porcelain, git rev-parse, git push)</p>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">gitpush — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/gitpush" target="_blank">https://github.com/CISSSCO/gitpush</a></p>
</div>
      `
    },

    portfolio: {
      domain: "portfolio",
      stack: ["react", "threejs", "typescript", "tailwind", "vite"],
      repo: "https://github.com/CISSSCO/CiscoRamon",
      website: "https://ciscoramon.pages.dev",
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">Portfolio — Personal 3D & Interactive Web Experience</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> An interactive portfolio website highlighting projects and engineering background through 3D graphics, particle systems, and modern component design.</p>
  <p><span class="term-key">Live:</span> <a class="term-link" href="https://ciscoramon.pages.dev" target="_blank">https://ciscoramon.pages.dev</a></p>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">Portfolio — Features</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">3D Canvas:</span> Interactive Three.js / React Three Fiber scene with smooth lighting and custom shaders.</li>
    <li><span class="term-green term-bold">Performance Optimized:</span> Low draw calls, particle caching, and responsive framerates across mobile and desktop.</li>
    <li><span class="term-green term-bold">TypeScript Core:</span> Strict typing for models, component props, and interactive event handlers.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">Portfolio — Technical Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <table class="term-table">
    <tbody>
      <tr><td style="width: 140px;"><span class="term-key">Framework</span></td><td>React 18 + Vite</td></tr>
      <tr><td><span class="term-key">3D Graphics</span></td><td>Three.js, React Three Fiber, React Three Drei</td></tr>
      <tr><td><span class="term-key">Language</span></td><td>TypeScript</td></tr>
      <tr><td><span class="term-key">Styling</span></td><td>Tailwind CSS</td></tr>
    </tbody>
  </table>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">Portfolio — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Live URL:</span> <a class="term-link" href="https://ciscoramon.pages.dev" target="_blank">https://ciscoramon.pages.dev</a></p>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/CiscoRamon" target="_blank">https://github.com/CISSSCO/CiscoRamon</a></p>
</div>
      `
    },

    dotfiles: {
      domain: "environment",
      stack: ["shell", "bspwm", "dwm", "polybar", "sxhkd", "rofi"],
      repo: "https://github.com/CISSSCO/dotfiles",
      website: null,
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">dotfiles — Reproducible Linux Desktop & Terminal Configuration</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> Declarative and reproducible configuration repository for Linux tiling window managers, shell utilities, and keyboard-first workflows.</p>

  <div class="term-title" style="margin-top: 0.8rem;">PHILOSOPHY:</div>
  <p>The keyboard should be the primary driver of development. Zero unnecessary GUI bloat, razor-thin resource usage, and instant responsiveness.</p>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">dotfiles — Window Managers & Modules</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">bspwm & sxhkd:</span> Binary space partitioning window manager configured for intuitive directional window manipulation.</li>
    <li><span class="term-green term-bold">dwm:</span> Custom patched dwm build with vanity gaps, pertag, and autostart hooks.</li>
    <li><span class="term-green term-bold">polybar / slstatus:</span> Monolithic, lightweight status bars displaying supercomputing job counts, CPU temp, and workspace tags.</li>
    <li><span class="term-green term-bold">Alacritty & Kitty:</span> GPU-accelerated terminals configured with custom ANSI palettes and JetBrains Mono.</li>
    <li><span class="term-green term-bold">Zsh / Bash:</span> Fast startup configs with customized fzf fuzzy navigation and zoxide integration.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">dotfiles — Environment Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">OS:</span> Linux (Arch Linux / Debian)</p>
  <p><span class="term-key">WMs:</span> bspwm, dwm, qtile</p>
  <p><span class="term-key">Hotkeys:</span> sxhkd</p>
  <p><span class="term-key">Shell:</span> Zsh, Bash, POSIX shell scripts</p>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">dotfiles — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/dotfiles" target="_blank">https://github.com/CISSSCO/dotfiles</a></p>
</div>
      `
    },

    myvimrc: {
      domain: "vim customization",
      stack: ["vimscript", "shell"],
      repo: "https://github.com/CISSSCO/myvimrc_config",
      website: null,
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">MYVIMRC — Custom Vim Setup for Systems & HPC Development</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> Handcrafted, high-performance Vim configuration optimized for C/C++, MPI/OpenMP parallel code, Python scripting, and Org-mode literate writing.</p>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">MYVIMRC — Key Enhancements</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">Sub-20ms Startup:</span> No plugin bloat; lightning-fast startup on supercomputer nodes over SSH.</li>
    <li><span class="term-green term-bold">HPC & Parallel Code Formatting:</span> Custom syntax highlights and indentation rules for OpenMP pragmas and MPI routines.</li>
    <li><span class="term-green term-bold">Ergonomic Navigation:</span> Seamless split-pane cycling, quickfix navigation, and ctags definition jumps.</li>
    <li><span class="term-green term-bold">Terminal Integration:</span> Built-in compiler triggers mapping to custom build scripts.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">MYVIMRC — Technical Details</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Core Language:</span> Vimscript</p>
  <p><span class="term-key">Compatibility:</span> Vim 8.2+, Neovim</p>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">MYVIMRC — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/myvimrc_config" target="_blank">https://github.com/CISSSCO/myvimrc_config</a></p>
</div>
      `
    },

    cisssco: {
      domain: "portfolio",
      stack: ["html", "css", "javascript", "vfs"],
      repo: "https://github.com/CISSSCO/CISSSCO.github.io",
      website: "https://cisssco.github.io",
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">CISSSCO.github.io — Terminal Style Portfolio Website</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> The very terminal you are using right now! Built from scratch with vanilla web technologies to deliver an authentic Unix terminal shell experience in the browser.</p>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">CISSSCO.github.io — Features</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">Virtual Filesystem (VFS):</span> Full support for <code>cd</code>, <code>ls</code>, <code>cat</code>, and relative paths across multi-level project directories.</li>
    <li><span class="term-green term-bold">Terminal Shell Metaphors:</span> Inline command execution stream, Tab autocompletion, command history buffer (Up/Down), Ctrl+L, Ctrl+C.</li>
    <li><span class="term-green term-bold">Theme Switching:</span> Dynamic ANSI color palettes (default, matrix, dracula, nord, gruvbox, amber).</li>
    <li><span class="term-green term-bold">Retro CRT Scanlines:</span> Togglable CRT display shader effect.</li>
    <li><span class="term-green term-bold">Zero Frameworks:</span> Pure HTML5, CSS3, and ES6 JavaScript.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">CISSSCO.github.io — Technical Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Languages:</span> HTML5, CSS3, Vanilla JavaScript</p>
  <p><span class="term-key">Hosting:</span> GitHub Pages</p>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">CISSSCO.github.io — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Live Website:</span> <a class="term-link" href="https://cisssco.github.io" target="_blank">https://cisssco.github.io</a></p>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/CISSSCO.github.io" target="_blank">https://github.com/CISSSCO/CISSSCO.github.io</a></p>
</div>
      `
    },

    "popular-themes": {
      domain: "web dev",
      stack: ["html", "css", "userstyles"],
      repo: "https://github.com/CISSSCO/PopularWebsiteThemes",
      website: null,
      readme: `
<div class="terminal-section">
  <div class="term-title term-bold">PopularWebsiteThemes — Custom Clean Themes for Web Apps</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Summary:</span> A curated collection of clean, dark, and high-contrast userstyles for popular productivity sites such as 10fastfingers.</p>
</div>
      `,
      features: `
<div class="terminal-section">
  <div class="term-title term-bold">PopularWebsiteThemes — Features</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <ul style="padding-left: 1.2rem; line-height: 1.6;">
    <li><span class="term-green term-bold">Distraction-free Styles:</span> Removes ads, banners, and clutter to focus on core productivity.</li>
    <li><span class="term-green term-bold">High-Contrast Typing Themes:</span> Optimized letter spacing and color contrasts for 10fastfingers.</li>
    <li><span class="term-green term-bold">Userstyle Compatible:</span> One-click install via Stylus or Violentmonkey.</li>
  </ul>
</div>
      `,
      stack: `
<div class="terminal-section">
  <div class="term-title term-bold">PopularWebsiteThemes — Stack</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">Languages:</span> CSS3, UserCSS metadata</p>
</div>
      `,
      links: `
<div class="terminal-section">
  <div class="term-title term-bold">PopularWebsiteThemes — Links</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p><span class="term-key">GitHub:</span> <a class="term-link" href="https://github.com/CISSSCO/PopularWebsiteThemes" target="_blank">https://github.com/CISSSCO/PopularWebsiteThemes</a></p>
</div>
      `
    }
  };

  // Build the hierarchical VFS tree
  function buildFilesystem() {
    const root = {
      type: "dir",
      name: "",
      children: {}
    };

    root.children["home"] = {
      type: "dir",
      name: "home",
      children: {}
    };

    const cisco = {
      type: "dir",
      name: "cisco",
      children: {}
    };
    root.children["home"].children["cisco"] = cisco;

    // Standard root files in ~
    cisco.children["about.txt"] = {
      type: "file",
      name: "about.txt",
      size: "1.4K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.about
    };

    cisco.children["experience.log"] = {
      type: "file",
      name: "experience.log",
      size: "2.9K",
      date: "Sep 19 19:40",
      getContent: async (terminal) => {
        if (terminal && terminal.experience) {
          await terminal.experience([]);
          return null;
        }
        return "Experience logs loaded.";
      }
    };

    cisco.children["philosophy.txt"] = {
      type: "file",
      name: "philosophy.txt",
      size: "1.5K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.philosophy
    };

    cisco.children["skills.txt"] = {
      type: "file",
      name: "skills.txt",
      size: "1.3K",
      date: "Sep 19 19:40",
      getContent: async (terminal) => {
        if (terminal && terminal.skills) {
          await terminal.skills([]);
          return null;
        }
        return "Skills loaded.";
      }
    };

    cisco.children["uses.org"] = {
      type: "file",
      name: "uses.org",
      size: "1.1K",
      date: "Sep 19 19:40",
      getContent: () => window.CONTENT.uses
    };

    cisco.children["README.org"] = {
      type: "file",
      name: "README.org",
      size: "4.3K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title">#+TITLE: CISSSCO.github.io</div>
  <p class="term-dim">Personal portfolio website, built and hosted using GitHub Pages.</p>
  <p>The site is intentionally minimal and terminal-driven. All interaction happens through a command-line interface with full directory navigation, Tab autocompletion, and Unix utilities.</p>
</div>
      `
    };

    // Projects directory inside ~
    const projectsDir = {
      type: "dir",
      name: "projects",
      children: {}
    };
    cisco.children["projects"] = projectsDir;

    // Overview README in projects/
    projectsDir.children["README.md"] = {
      type: "file",
      name: "README.md",
      size: "1.8K",
      date: "Sep 19 19:40",
      getContent: () => `
<div class="terminal-section">
  <div class="term-title term-bold">~/projects — Directory Index</div>
  <div class="term-dim">-------------------------------------------------------------------</div>
  <p>This directory contains subdirectories for each major project. You can explore them using standard shell commands:</p>
  
  <div style="margin: 0.6rem 0;">
    <span class="term-key">cd &lt;project-name&gt;</span> <span class="term-dim">— Navigate into a project directory (e.g. 'cd cerrfix')</span><br>
    <span class="term-key">ls</span> <span class="term-dim">— View available files inside the directory</span><br>
    <span class="term-key">cat README.md</span> <span class="term-dim">— Read high-level project documentation</span><br>
    <span class="term-key">cat features.txt</span> <span class="term-dim">— Read architectural deep-dive & key features</span><br>
    <span class="term-key">cat stack.txt</span> <span class="term-dim">— View technologies & dependencies</span><br>
    <span class="term-key">cat links.txt</span> <span class="term-dim">— Get repository & live links</span><br>
    <span class="term-key">cd ..</span> <span class="term-dim">— Return to parent directory</span>
  </div>

  <div class="term-dim" style="margin-top: 0.5rem;">Or view all projects as an overview tree by running the 'projects' command.</div>
</div>
      `
    };

    // Populate each project folder
    for (const [slug, data] of Object.entries(PROJECT_DETAILS)) {
      const projFolder = {
        type: "dir",
        name: slug,
        children: {}
      };
      projectsDir.children[slug] = projFolder;

      projFolder.children["README.md"] = {
        type: "file",
        name: "README.md",
        size: "1.4K",
        date: "Sep 19 19:40",
        getContent: () => data.readme
      };

      projFolder.children["features.txt"] = {
        type: "file",
        name: "features.txt",
        size: "980B",
        date: "Sep 19 19:40",
        getContent: () => data.features
      };

      projFolder.children["stack.txt"] = {
        type: "file",
        name: "stack.txt",
        size: "520B",
        date: "Sep 19 19:40",
        getContent: () => data.stack
      };

      projFolder.children["links.txt"] = {
        type: "file",
        name: "links.txt",
        size: "240B",
        date: "Sep 19 19:40",
        getContent: () => data.links
      };
    }

    return root;
  }

  const FS_ROOT = buildFilesystem();
  let currentPathParts = ["home", "cisco"]; // Default to /home/cisco (~)

  // Path resolution helpers
  function normalizePath(pathStr, fromParts = currentPathParts) {
    if (!pathStr || pathStr === "~") {
      return ["home", "cisco"];
    }

    let parts;
    if (pathStr.startsWith("~/")) {
      parts = ["home", "cisco", ...pathStr.slice(2).split("/")];
    } else if (pathStr.startsWith("/")) {
      parts = pathStr.split("/");
    } else {
      parts = [...fromParts, ...pathStr.split("/")];
    }

    const resolved = [];
    for (const seg of parts) {
      if (!seg || seg === ".") continue;
      if (seg === "..") {
        if (resolved.length > 0) resolved.pop();
      } else {
        resolved.push(seg);
      }
    }
    return resolved;
  }

  function getNode(parts) {
    let curr = FS_ROOT;
    for (const seg of parts) {
      if (!curr.children || !curr.children[seg]) {
        return null;
      }
      curr = curr.children[seg];
    }
    return curr;
  }

  function getPromptPath(parts = currentPathParts) {
    const p = "/" + parts.join("/");
    if (p === "/home/cisco") return "~";
    if (p.startsWith("/home/cisco/")) {
      return "~" + p.slice("/home/cisco".length);
    }
    return p;
  }

  function getDisplayPath(parts = currentPathParts) {
    return "/" + parts.join("/");
  }

  // VFS API
  const VFS = {
    getCurrentParts() {
      return [...currentPathParts];
    },

    getPromptPath() {
      return getPromptPath(currentPathParts);
    },

    getPwd() {
      return getDisplayPath(currentPathParts);
    },

    cd(target) {
      if (!target || target === "~" || target === "") {
        currentPathParts = ["home", "cisco"];
        return { success: true, path: getPromptPath() };
      }

      const targetParts = normalizePath(target);
      const node = getNode(targetParts);

      if (!node) {
        return { success: false, error: `cd: no such file or directory: ${target}` };
      }
      if (node.type !== "dir") {
        return { success: false, error: `cd: not a directory: ${target}` };
      }

      currentPathParts = targetParts;
      return { success: true, path: getPromptPath() };
    },

    ls(targetPath = "") {
      const parts = targetPath ? normalizePath(targetPath) : currentPathParts;
      const node = getNode(parts);

      if (!node) {
        return { success: false, error: `ls: cannot access '${targetPath}': No such file or directory` };
      }

      if (node.type === "file") {
        return {
          success: true,
          isSingleFile: true,
          entries: [{ name: node.name, type: "file", size: node.size, date: node.date }]
        };
      }

      const entries = Object.values(node.children).map(child => ({
        name: child.name + (child.type === "dir" ? "/" : ""),
        baseName: child.name,
        type: child.type,
        size: child.size || "4.0K",
        date: child.date || "Sep 19 19:40"
      }));

      // Sort: directories first, then alphabetical
      entries.sort((a, b) => {
        if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
        return a.baseName.localeCompare(b.baseName);
      });

      return { success: true, entries, targetPrompt: getPromptPath(parts) };
    },

    async cat(targetPath, terminal) {
      if (!targetPath) {
        return { success: false, error: "cat: missing file operand" };
      }

      const parts = normalizePath(targetPath);
      const node = getNode(parts);

      if (!node) {
        return { success: false, error: `cat: ${targetPath}: No such file or directory` };
      }

      if (node.type === "dir") {
        // If it's a project directory, check if it has a README.md to display or offer help!
        if (node.children && node.children["README.md"]) {
          const content = node.children["README.md"].getContent(terminal);
          const hint = `<div class="term-dim" style="margin-top: 0.6rem;">[Notice] '${targetPath}' is a directory. Showing its README.md.<br>Tip: Use 'cd ${targetPath}' and 'ls' to see all pages (features.txt, stack.txt, links.txt).</div>`;
          return { success: true, content: content + hint };
        }
        return { success: false, error: `cat: ${targetPath}: Is a directory. Use 'cd ${targetPath}' and 'ls' to explore.` };
      }

      const content = await node.getContent(terminal);
      return { success: true, content };
    },

    // Get completions for Tab key
    getCompletions(partial, isDirOnly = false) {
      let searchDirParts;
      let filePrefix;

      if (partial.includes("/")) {
        const lastSlash = partial.lastIndexOf("/");
        const dirPart = partial.slice(0, lastSlash + 1);
        filePrefix = partial.slice(lastSlash + 1).toLowerCase();
        searchDirParts = normalizePath(dirPart);
      } else {
        filePrefix = partial.toLowerCase();
        searchDirParts = currentPathParts;
      }

      const node = getNode(searchDirParts);
      if (!node || node.type !== "dir") return [];

      const candidates = [];
      for (const [name, child] of Object.entries(node.children)) {
        if (isDirOnly && child.type !== "dir") continue;
        if (name.toLowerCase().startsWith(filePrefix)) {
          const suffix = child.type === "dir" ? "/" : "";
          candidates.push(name + suffix);
        }
      }
      return candidates;
    },

    // Generate full directory tree
    getTree() {
      function renderTree(dirNode, prefix = "") {
        const entries = Object.values(dirNode.children);
        entries.sort((a, b) => {
          if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
          return a.name.localeCompare(b.name);
        });

        let output = "";
        entries.forEach((entry, idx) => {
          const isLast = idx === entries.length - 1;
          const branch = isLast ? "└── " : "├── ";
          const nextPrefix = prefix + (isLast ? "    " : "│   ");

          if (entry.type === "dir") {
            output += `\n<span class="tree-branch">${prefix}${branch}</span><span class="term-accent term-bold">${entry.name}/</span>`;
            output += renderTree(entry, nextPrefix);
          } else {
            let color = "term-green";
            if (entry.name.endsWith(".log")) color = "term-cyan";
            if (entry.name.endsWith(".txt")) color = "term-green";
            if (entry.name.endsWith(".org")) color = "term-yellow";
            if (entry.name.endsWith(".md")) color = "term-cyan";
            output += `\n<span class="tree-branch">${prefix}${branch}</span><span class="${color}">${entry.name}</span>`;
          }
        });
        return output;
      }

      const ciscoNode = getNode(["home", "cisco"]);
      return `<div class="term-tree"><span class="tree-node">~</span>${renderTree(ciscoNode)}</div>`;
    }
  };

  window.VFS = VFS;
})();

