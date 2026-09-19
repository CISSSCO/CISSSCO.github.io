window.CONTENT = {
  help: `
<div class="terminal-section">
  <div class="term-title" style="margin-bottom: 0.5rem;">PORTFOLIO COMMANDS:</div>
  <table class="term-table">
    <thead>
      <tr>
        <th style="width: 160px;">COMMAND</th>
        <th>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><span class="term-key">about</span></td><td>Display identity, background & system overview</td></tr>
      <tr><td><span class="term-key">projects [filter]</span></td><td>List portfolio projects with optional search filter</td></tr>
      <tr><td><span class="term-key">skills [filter]</span></td><td>Display technical proficiencies & skill bars</td></tr>
      <tr><td><span class="term-key">experience [filter]</span></td><td>View professional engineering roles & responsibilities</td></tr>
      <tr><td><span class="term-key">philosophy</span></td><td>Engineering mindset, Linux & open source values</td></tr>
      <tr><td><span class="term-key">uses</span></td><td>Hardware, Linux window managers & toolchains</td></tr>
      <tr><td><span class="term-key">man &lt;cmd&gt;</span></td><td>Read manual pages for commands/topics</td></tr>
    </tbody>
  </table>

  <div class="term-title" style="margin-top: 1rem; margin-bottom: 0.5rem;">SHELL UTILITIES:</div>
  <table class="term-table">
    <thead>
      <tr>
        <th style="width: 160px;">COMMAND</th>
        <th>DESCRIPTION</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><span class="term-key">ls [-l]</span></td><td>List simulated filesystem entries</td></tr>
      <tr><td><span class="term-key">cat &lt;file&gt;</span></td><td>Output contents of a virtual file</td></tr>
      <tr><td><span class="term-key">tree</span></td><td>Show directory hierarchy</td></tr>
      <tr><td><span class="term-key">whoami</span></td><td>Print current user identity</td></tr>
      <tr><td><span class="term-key">uname [-a]</span></td><td>Print system & kernel information</td></tr>
      <tr><td><span class="term-key">pwd</span></td><td>Print working directory</td></tr>
      <tr><td><span class="term-key">date</span></td><td>Display current date and time</td></tr>
      <tr><td><span class="term-key">theme [name]</span></td><td>Switch color theme (matrix, dracula, nord, gruvbox, amber, default)</td></tr>
      <tr><td><span class="term-key">crt</span></td><td>Toggle retro CRT scanline effect</td></tr>
      <tr><td><span class="term-key">history</span></td><td>Show command history</td></tr>
      <tr><td><span class="term-key">clear</span></td><td>Clear terminal screen (or Ctrl+L)</td></tr>
      <tr><td><span class="term-key">exit / quit</span></td><td>Terminate terminal session</td></tr>
    </tbody>
  </table>
  <div class="term-dim" style="margin-top: 0.65rem;">[Tip] Use &lt;Tab&gt; for autocompletion, &lt;Up/Down&gt; for command history, &lt;Ctrl+L&gt; to clear.</div>
</div>
  `,

  banner: `      ██████╗ ██╗ ███████╗ ███████╗ ███████╗  ██████╗  ██████╗
     ██╔════╝ ██║ ██╔════╝ ██╔════╝ ██╔════╝ ██╔════╝ ██╔═══██╗
     ██║      ██║ ███████╗ ███████╗ ███████╗ ██║      ██║   ██║
     ██║      ██║ ╚════██║ ╚════██║ ╚════██║ ██║      ██║   ██║
     ╚██████╗ ██║ ███████║ ███████║ ███████║ ╚██████╗ ╚██████╔╝
      ╚═════╝ ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝  ╚═════╝  ╚═════╝`,

  aboutBody: `

    <span class="term-title term-bold">cisco@cisssco</span>
    <span class="term-dim">---------------------------------------------------------</span>
    <span class="term-key">User:</span>        <span class="term-value">Cisco Ramon (Abhishek Raj)</span>
    <span class="term-key">Role:</span>        <span class="term-value">Parallel Programmer, Trainer, Linux Enthusiast</span>
    <span class="term-key">Affiliation:</span> <span class="term-value">IIT (BHU) Varanasi · C-DAC (NSM)</span>
    <span class="term-key">Focus:</span>       <span class="term-value">CLI tooling, HPC, Performance-aware software, System Customization</span>
    <span class="term-key">OS:</span>          <span class="term-value">Linux (daily driver)</span>
    <span class="term-key">Languages:</span>   <span class="term-value">C, C++, Python, Shell Scripting</span>
    <span class="term-key">WM:</span>          <span class="term-value">bspwm, dwm, qtile</span>
    <span class="term-key">Editor:</span>      <span class="term-value">Vim, Emacs (Org-mode)</span>
    <span class="term-key">GitHub:</span>      <a class="term-link" href="https://github.com/CISSSCO" target="_blank">github.com/CISSSCO</a>
    <span class="term-key">LinkedIn:</span>    <a class="term-link" href="https://www.linkedin.com/in/abhi581b" target="_blank">linkedin.com/in/abhi581b</a>
    <span class="term-key">Website:</span>     <a class="term-link" href="https://ciscoramon.pages.dev/" target="_blank">ciscoramon.pages.dev</a>

    <span class="term-dim">"I build simple tools that solve real problems and remain understandable over time."</span>`,

  about: `
<pre class="neofetch">
<span class="ascii-banner">      ██████╗ ██╗ ███████╗ ███████╗ ███████╗  ██████╗  ██████╗
     ██╔════╝ ██║ ██╔════╝ ██╔════╝ ██╔════╝ ██╔════╝ ██╔═══██╗
     ██║      ██║ ███████╗ ███████╗ ███████╗ ██║      ██║   ██║
     ██║      ██║ ╚════██║ ╚════██║ ╚════██║ ██║      ██║   ██║
     ╚██████╗ ██║ ███████║ ███████║ ███████║ ╚██████╗ ╚██████╔╝
      ╚═════╝ ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝  ╚═════╝  ╚═════╝</span>

    <span class="term-title term-bold">cisco@cisssco</span>
    <span class="term-dim">---------------------------------------------------------</span>
    <span class="term-key">User:</span>        <span class="term-value">Cisco Ramon (Abhishek Raj)</span>
    <span class="term-key">Role:</span>        <span class="term-value">Parallel Programmer, Trainer, Linux Enthusiast</span>
    <span class="term-key">Affiliation:</span> <span class="term-value">IIT (BHU) Varanasi · C-DAC (NSM)</span>
    <span class="term-key">Focus:</span>       <span class="term-value">CLI tooling, HPC, Performance-aware software, System Customization</span>
    <span class="term-key">OS:</span>          <span class="term-value">Linux (daily driver)</span>
    <span class="term-key">Languages:</span>   <span class="term-value">C, C++, Python, Shell Scripting</span>
    <span class="term-key">WM:</span>          <span class="term-value">bspwm, dwm, qtile</span>
    <span class="term-key">Editor:</span>      <span class="term-value">Vim, Emacs (Org-mode)</span>
    <span class="term-key">GitHub:</span>      <a class="term-link" href="https://github.com/CISSSCO" target="_blank">github.com/CISSSCO</a>
    <span class="term-key">LinkedIn:</span>    <a class="term-link" href="https://www.linkedin.com/in/abhi581b" target="_blank">linkedin.com/in/abhi581b</a>
    <span class="term-key">Website:</span>     <a class="term-link" href="https://ciscoramon.pages.dev/" target="_blank">ciscoramon.pages.dev</a>

    <span class="term-dim">"I build simple tools that solve real problems and remain understandable over time."</span>
</pre>
  `,

  philosophy: `
<div class="terminal-section">
  <div class="term-title term-bold" style="margin-bottom: 0.8rem;"># PHILOSOPHY & MINDSET</div>

  <div style="margin-bottom: 0.9rem;">
    <span class="term-green term-bold">→ Linux as a Learning Platform</span><br>
    <span class="term-value">I have a deep appreciation for Linux — not just as an operating system, but as a learning platform. I enjoy exploring system internals, modifying configurations, and understanding how small changes affect the whole system.</span>
  </div>

  <div style="margin-bottom: 0.9rem;">
    <span class="term-green term-bold">→ Open Source Community</span><br>
    <span class="term-value">I believe open source is the most honest way to build software. Transparency, shared ownership, and community-driven improvement are values I actively practice through learning, contribution, and collaboration.</span>
  </div>

  <div style="margin-bottom: 0.9rem;">
    <span class="term-green term-bold">→ Teaching & Mentorship</span><br>
    <span class="term-value">Teaching is an important part of how I grow. I enjoy explaining concepts, mentoring others, and helping people understand systems rather than just use them. Knowledge multiplies when it is shared.</span>
  </div>

  <div style="margin-bottom: 0.9rem;">
    <span class="term-green term-bold">→ Literate Programming</span><br>
    <span class="term-value">I enjoy literate programming because it forces clarity of thought. Writing code alongside explanation leads to software that is easier to reason about, maintain, and evolve.</span>
  </div>

  <div style="margin-bottom: 0.9rem;">
    <span class="term-green term-bold">→ System Customization (Ricing)</span><br>
    <span class="term-value">Customization is a form of learning for me. From ricing Linux distributions to tuning workflows, I like shaping systems into something both functional and beautiful.</span>
  </div>

  <div style="margin-top: 1rem;">
    <span class="term-dim">Outside of systems work, I also enjoy gaming — a space where performance, optimization, and systems thinking intersect.</span>
  </div>
</div>
  `,

  uses: `
<div class="terminal-section">
  <div class="term-title term-bold" style="margin-bottom: 0.8rem;"># ENVIRONMENT & TOOLS</div>

  <table class="term-table">
    <tbody>
      <tr>
        <td style="width: 170px;"><span class="term-key">Operating System</span></td>
        <td><span class="term-value">Linux</span> <span class="term-dim">— daily driver; customized and configured from source</span></td>
      </tr>
      <tr>
        <td><span class="term-key">Window Managers</span></td>
        <td><span class="term-value">bspwm, dwm, qtile</span> <span class="term-dim">— lightweight tiling environments tuned for aesthetics and efficiency</span></td>
      </tr>
      <tr>
        <td><span class="term-key">Languages</span></td>
        <td><span class="term-value">C / C++</span> <span class="term-dim">(systems, HPC, performance)</span>, <span class="term-value">Bash, Python</span> <span class="term-dim">(automation & tooling)</span></td>
      </tr>
      <tr>
        <td><span class="term-key">Editors</span></td>
        <td><a class="term-link" href="https://www.vim.org/" target="_blank">Vim</a>, <a class="term-link" href="https://www.gnu.org/software/emacs/" target="_blank">Emacs</a> <span class="term-dim">— heavily customized configurations tailored to workflow</span></td>
      </tr>
      <tr>
        <td><span class="term-key">Documentation</span></td>
        <td><a class="term-link" href="https://orgmode.org/" target="_blank">Org mode</a> <span class="term-dim">— structured notes, literate programming & reproducible research</span></td>
      </tr>
    </tbody>
  </table>
</div>
  `
};
