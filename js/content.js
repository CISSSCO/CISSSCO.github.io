window.CONTENT = {
  help: `
<div class="block">
  <span class="term-title">available commands</span>

  <ul>
    <li><span class="term-key">about</span>        <span class="term-muted">— about me</span></li>
    <li><span class="term-key">projects</span>     <span class="term-muted">— things I build</span></li>
    <li><span class="term-key">philosophy</span>   <span class="term-muted">— how I think</span></li>
    <li><span class="term-key">uses</span>         <span class="term-muted">— tools & environment</span></li>
    <li><span class="term-key">clear</span>        <span class="term-muted">— clear screen</span></li>
    <li><span class="term-key">help</span>         <span class="term-muted">— this menu</span></li>
  </ul>
</div>
  `,

  about: `
<pre class="neofetch">
      ██████╗ ██╗███████╗███████╗███████╗ ██████╗ ██████╗
     ██╔════╝ ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔═══██╗
     ██║      ██║███████╗███████╗███████╗██║     ██║   ██║
     ██║      ██║╚════██║╚════██║╚════██║██║     ██║   ██║
     ╚██████╗ ██║███████║███████║███████║╚██████╗╚██████╔╝
      ╚═════╝ ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═════╝

    <span class="term-title">Cisco Ramon (Abhishek Raj)</span>
    ────────────
    <span class="term-key">Role:</span>        <span class="term-value">Parallel Programmer, Trainer, Linux Enthusiast</span>
    <span class="term-key">Focus:</span>       <span class="term-value">CLI tooling, HPC, Performance-aware software, System Customization</span>
    <span class="term-key">OS:</span>          <span class="term-value">Linux (daily driver)</span>
    <span class="term-key">Languages:</span>   <span class="term-value">C, C++, Python, Shell Scripting, etc</span>

    <span class="term-key">GitHub:</span>      <a class="term-link" href="https://github.com/CISSSCO" target="_blank">github.com/CISSSCO</a>
    <span class="term-key">LinkedIn:</span>    <a class="term-link" href="https://www.linkedin.com/in/abhi581b" target="_blank">linkedin.com/in/abhi581b</a>

    <span class="term-muted">
    I build simple tools that solve real problems
    and remain understandable over time.
    </span>
    </pre>

  `,

  projects: `
<div class="block">
  <h2 class="term-title">Projects</h2>

  <p>
    <span class="term-key">cerrfix</span><br>
    <span class="term-muted">Rule-based error analysis and fix suggestion tool for Linux systems</span><br>
    <a class="term-link" href="https://github.com/CISSSCO/cerrfix" target="_blank">
      → source repository
    </a>
  </p>

  <p>
    <span class="term-key">gitpush</span><br>
    <span class="term-muted">Minimal CLI helper for repetitive git workflows</span><br>
    <a class="term-link" href="https://github.com/CISSSCO/gitpush" target="_blank">
      → source repository
    </a>
  </p>

  <p>
    <span class="term-key">dotfiles</span><br>
    <span class="term-muted">Reproducible Linux shell and development environment configuration</span><br>
    <a class="term-link" href="https://github.com/CISSSCO/dotfiles" target="_blank">
      → source repository
    </a>
  </p>
  <p>
    <span class="term-key">myvimrc</span><br>
    <span class="term-muted">Custom vim configuration for efficient editing</span><br>
    <a class="term-link" href="https://github.com/CISSSCO/myvimrc_config" target="_blank">
      → source repository
    </a>
  </p>
</div>
`,
philosophy: `
<div class="block">
  <h2 class="term-title">Philosophy</h2>

  <p>
    I have a deep appreciation for <span class="term-key">Linux</span> —
    not just as an operating system, but as a learning platform.
    I enjoy exploring system internals, modifying configurations,
    and understanding how small changes affect the whole system.
  </p>

  <p>
    I believe <span class="term-key">open source</span> is the most honest way
    to build software. Transparency, shared ownership, and community-driven
    improvement are values I actively practice through learning,
    contribution, and collaboration.
  </p>

  <p>
    Teaching is an important part of how I grow.
    I enjoy explaining concepts, mentoring others,
    and helping people understand systems rather than just use them.
    Knowledge multiplies when it is shared.
  </p>

  <p>
    I enjoy <span class="term-key">literate programming</span> because it forces
    clarity of thought. Writing code alongside explanation leads to
    software that is easier to reason about, maintain, and evolve.
  </p>

  <p>
    Customization is a form of learning for me.
    From <span class="term-key">ricing Linux distributions</span> to tuning workflows,
    I like shaping systems into something both functional and beautiful.
  </p>

  <p class="term-muted">
    Outside of systems work, I also enjoy gaming —
    a space where performance, optimization, and systems thinking
    often intersect in interesting ways.
  </p>
</div>
`,

uses: `
<div class="block">
  <h2 class="term-title">Environment & Tools</h2>

  <p>
    <span class="term-key">Operating System</span><br>
    Linux is my daily driver. I prefer building and configuring my own
    Linux environment rather than relying on prebuilt setups.
  </p>

  <p>
    <span class="term-key">Window Managers</span><br>
    I strongly prefer lightweight window managers over full desktop environments.
    My workflow commonly revolves around
    <span class="term-value">bspwm</span>,
    <span class="term-value">dwm</span>,
    and <span class="term-value">qtile</span>.
    I enjoy ricing and tuning them to match both aesthetics and efficiency.
  </p>

  <p>
    <span class="term-key">Languages</span><br>
    My primary language is <span class="term-value">C / C++</span> for systems
    and performance-oriented work.
    For scripting and automation, I rely on
    <span class="term-value">Bash</span> and
    <span class="term-value">Python</span>.
  </p>

  <p>
    <span class="term-key">Editors</span><br>
    I actively use
    <a class="term-link" href="https://www.vim.org/" target="_blank">Vim</a>
    and
    <a class="term-link" href="https://www.gnu.org/software/emacs/" target="_blank">Emacs</a>,
    both with heavily customized configurations tailored to my workflow.
  </p>

  <p>
    <span class="term-key">Documentation & Workflow</span><br>
    I prefer
    <a class="term-link" href="https://orgmode.org/" target="_blank">Org mode</a>
    for documentation and literate programming.
    Writing structured notes alongside code helps me reason clearly
    and maintain long-term projects.
  </p>
</div>
`,

};
