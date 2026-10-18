window.CONTENT = {
  help: `
<div class="terminal-section">
  <div class="term-title" style="margin-bottom: 0.4rem;">PRIMARY COMMANDS:</div>
  <div class="term-table-responsive">
    <table class="term-table">
      <tbody>
        <tr><td style="width: 170px;"><span class="term-key">about</span></td><td>Identity, roles, links & author overview (or <span class="term-cyan">neofetch</span>)</td></tr>
        <tr><td><span class="term-key">projects [filter]</span></td><td>List portfolio projects (e.g. <span class="term-cyan">projects cerrfix</span>, <span class="term-cyan">projects shell</span>)</td></tr>
        <tr><td><span class="term-key">skills [filter]</span></td><td>Display technical competencies & ratings (e.g. <span class="term-cyan">skills c++</span>)</td></tr>
        <tr><td><span class="term-key">experience [filter]</span></td><td>View professional engineering roles at IIT (BHU) and C-DAC</td></tr>
        <tr><td><span class="term-key">ranger [dir]</span></td><td>Open interactive terminal file manager (alias <span class="term-cyan">r</span>)</td></tr>
        <tr><td><span class="term-key">cd [dir]</span></td><td>Navigate virtual filesystem (<span class="term-cyan">cd projects</span>, <span class="term-cyan">cd skills</span>, <span class="term-cyan">cd experiences</span>)</td></tr>
        <tr><td><span class="term-key">ls [-l] [dir]</span></td><td>List directory contents in responsive wrapped grid or long format</td></tr>
        <tr><td><span class="term-key">cat &lt;file&gt;</span></td><td>Output contents of a virtual file (e.g. <span class="term-cyan">cat skills/allskills.txt</span>)</td></tr>
        <tr><td><span class="term-key">clear</span></td><td>Clear terminal screen (or press <span class="term-cyan">Ctrl+L</span> or shortcut <span class="term-cyan">c</span>)</td></tr>
        <tr><td><span class="term-key">man &lt;cmd&gt;</span></td><td>Detailed manual with synopsis, options & examples (or <span class="term-cyan">man</span> for all)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="term-title" style="margin-top: 0.8rem; margin-bottom: 0.4rem;">ALL AVAILABLE COMMANDS:</div>
  <div class="term-ls-grid" style="margin-bottom: 0.6rem;">
    <div class="term-ls-item"><span class="term-cyan">about</span></div>
    <div class="term-ls-item"><span class="term-cyan">alias</span></div>
    <div class="term-ls-item"><span class="term-cyan">banner</span></div>
    <div class="term-ls-item"><span class="term-cyan">cat</span></div>
    <div class="term-ls-item"><span class="term-cyan">cd</span></div>
    <div class="term-ls-item"><span class="term-cyan">clear</span></div>
    <div class="term-ls-item"><span class="term-cyan">crt</span></div>
    <div class="term-ls-item"><span class="term-cyan">date</span></div>
    <div class="term-ls-item"><span class="term-cyan">exit</span></div>
    <div class="term-ls-item"><span class="term-cyan">experience</span></div>
    <div class="term-ls-item"><span class="term-cyan">experiences</span></div>
    <div class="term-ls-item"><span class="term-cyan">help</span></div>
    <div class="term-ls-item"><span class="term-cyan">history</span></div>
    <div class="term-ls-item"><span class="term-cyan">ls</span></div>
    <div class="term-ls-item"><span class="term-cyan">man</span></div>
    <div class="term-ls-item"><span class="term-cyan">neofetch</span></div>
    <div class="term-ls-item"><span class="term-cyan">philosophy</span></div>
    <div class="term-ls-item"><span class="term-cyan">projects</span></div>
    <div class="term-ls-item"><span class="term-cyan">pwd</span></div>
    <div class="term-ls-item"><span class="term-cyan">quit</span></div>
    <div class="term-ls-item"><span class="term-cyan">ranger</span></div>
    <div class="term-ls-item"><span class="term-cyan">skills</span></div>
    <div class="term-ls-item"><span class="term-cyan">sudo</span></div>
    <div class="term-ls-item"><span class="term-cyan">theme</span></div>
    <div class="term-ls-item"><span class="term-cyan">tree</span></div>
    <div class="term-ls-item"><span class="term-cyan">uname</span></div>
    <div class="term-ls-item"><span class="term-cyan">uses</span></div>
    <div class="term-ls-item"><span class="term-cyan">whoami</span></div>
  </div>

  <div class="term-title" style="margin-top: 0.6rem; margin-bottom: 0.3rem;">SHORTCUT ALIASES:</div>
  <div class="term-dim" style="line-height: 1.6;">
    <span class="term-yellow">c</span> &rarr; clear &nbsp;|&nbsp;
    <span class="term-yellow">q</span> &rarr; exit &nbsp;|&nbsp;
    <span class="term-yellow">ll</span> &rarr; ls -l &nbsp;|&nbsp;
    <span class="term-yellow">la / l</span> &rarr; ls &nbsp;|&nbsp;
    <span class="term-yellow">r</span> &rarr; ranger &nbsp;|&nbsp;
    <span class="term-yellow">h</span> &rarr; help &nbsp;|&nbsp;
    <span class="term-yellow">cls</span> &rarr; clear &nbsp;|&nbsp;
    <span class="term-yellow">neofetch / fetch</span> &rarr; about &nbsp;|&nbsp;
    <span class="term-yellow">p / proj</span> &rarr; projects &nbsp;|&nbsp;
    <span class="term-yellow">s / skill</span> &rarr; skills &nbsp;|&nbsp;
    <span class="term-yellow">e / exp</span> &rarr; experiences &nbsp;|&nbsp;
    <span class="term-yellow">vfs</span> &rarr; tree
  </div>

  <div class="term-dim" style="margin-top: 0.75rem; border-top: 1px dashed var(--border); padding-top: 0.5rem;">
    [Tip] Type '<span class="term-cyan">man &lt;command&gt;</span>' (e.g. '<span class="term-green">man projects</span>', '<span class="term-green">man ranger</span>') or '<span class="term-cyan">man</span>' for full in-depth manual pages.<br>
    [Tip] Type '<span class="term-cyan">alias</span>' to see full table of shortcuts. Use &lt;Tab&gt; for autocompletion.
  </div>
</div>
  `,

  bannerHTML: [
    '<span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span>',
    '<span class="b-c1-bg3">██</span><span class="b-c1">▀▀▀▀</span>  <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span>  <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">██</span><span class="b-c1">▀▀▀▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span>',
    '<span class="b-c1-bg3">█▀</span>      <span class="b-c1-bg3">▌ </span>  <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">█▀</span>     <span class="b-c1-bg3">▌ </span>  <span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>',
    '<span class="b-c2-bg3">▀</span><span class="b-c1-bg3"> </span>      <span class="b-c1-bg3"> </span><span class="b-c4-bg5">▀</span>  <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c2-bg3">▀</span><span class="b-c1-bg3"> </span>     <span class="b-c1-bg3"> </span><span class="b-c4-bg5">▀</span>  <span class="b-c4-bg5">█▀</span>',
    '<span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>      <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>     <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span>',
    '<span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░░░</span><span class="b-c4-bg5">  </span> <span class="b-c5">▄</span><span class="b-c6-bg5">▒░</span><span class="b-c5">▄</span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░░░</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░░░</span><span class="b-c4-bg5">  </span>'
  ].join("\n"),

  banner: [
    "▄▄▄▄▄▄ ▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄▄▄▄",
    "██▀▀▀▀  ██  ██▀▀█▀ ██▀▀█▀ ██▀▀█▀ ██▀▀▀▀ ██▀▀█▀",
    "█▀      ▌   ▌      ▌      ▌      █▀     ▌    █",
    "▀        ▀  ▀▀▀▀█▀ ▀▀▀▀█▀ ▀▀▀▀█▀ ▀       ▀  █▀",
    " █      ▀░  ▀░     ▀░     ▀░      █     ▀░    ",
    "▀░░░   ▄▒░▄ ▒░██   ▒░██   ▒░██   ▀░░░   ▒░░░  "
  ].join("\n"),

  aboutBody: `

    <span class="term-title term-bold">cisco@cisssco</span>
    <span class="term-dim">--------------------------------------------------</span>
    <span class="term-key">Name:</span>        <span class="term-value">Cisco Ramon (Abhishek Raj)</span>
    <span class="term-key">Position:</span>    <span class="term-value">Project Engineer @ C-DAC (National Supercomputing Mission)</span>
    <span class="term-key">Ex:</span>          <span class="term-value">HPC Application Engineer @ IIT (BHU) Varanasi</span>
    <span class="term-key">GitHub:</span>      <a class="term-link" href="https://github.com/CISSSCO" target="_blank">github.com/CISSSCO</a>
    <span class="term-key">LinkedIn:</span>    <a class="term-link" href="https://www.linkedin.com/in/abhi581b" target="_blank">linkedin.com/in/abhi581b</a>
    <span class="term-key">Website:</span>     <a class="term-link" href="https://ciscoramon.pages.dev" target="_blank">ciscoramon.pages.dev</a>
    <span class="term-key">Portfolio:</span>   <a class="term-link" href="https://cisssco.github.io" target="_blank">cisssco.github.io</a>

    <span class="neofetch-palette">
      <span class="palette-swatch swatch-black"></span><span class="palette-swatch swatch-red"></span><span class="palette-swatch swatch-green"></span><span class="palette-swatch swatch-yellow"></span><span class="palette-swatch swatch-blue"></span><span class="palette-swatch swatch-magenta"></span><span class="palette-swatch swatch-cyan"></span><span class="palette-swatch swatch-white"></span>
    </span>

    <span class="term-dim">"I build simple tools that solve real problems and remain understandable over time."</span>`,

  about: `
<pre class="neofetch">
<span class="ascii-banner"><span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span> <span class="b-c1">▄▄▄▄▄▄</span>
<span class="b-c1-bg3">██</span><span class="b-c1">▀▀▀▀</span>  <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span>  <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span> <span class="b-c1-bg3">██</span><span class="b-c1">▀▀▀▀</span> <span class="b-c1-bg3">█</span><span class="b-c2-bg3">█</span><span class="b-c1">▀▀</span><span class="b-c2-bg3">█▀</span>
<span class="b-c1-bg3">█▀</span>      <span class="b-c1-bg3">▌ </span>  <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">▌ </span>     <span class="b-c1-bg3">█▀</span>     <span class="b-c1-bg3">▌ </span>  <span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>
<span class="b-c2-bg3">▀</span><span class="b-c1-bg3"> </span>      <span class="b-c1-bg3"> </span><span class="b-c4-bg5">▀</span>  <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c3">▀▀▀▀</span><span class="b-c4-bg5">█▀</span> <span class="b-c2-bg3">▀</span><span class="b-c1-bg3"> </span>     <span class="b-c1-bg3"> </span><span class="b-c4-bg5">▀</span>  <span class="b-c4-bg5">█▀</span>
<span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>      <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span> <span class="b-c1-bg3"> </span><span class="b-c4-bg5">█</span>     <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░</span>  <span class="b-c4-bg5">  </span>
<span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░░░</span><span class="b-c4-bg5">  </span> <span class="b-c5">▄</span><span class="b-c6-bg5">▒░</span><span class="b-c5">▄</span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░</span><span class="b-c5">██</span><span class="b-c4-bg5">  </span> <span class="b-c4-bg5">▀</span><span class="b-c6-bg5">░░░</span><span class="b-c4-bg5">  </span> <span class="b-c6-bg5">▒░░░</span><span class="b-c4-bg5">  </span></span>

    <span class="term-title term-bold">cisco@cisssco</span>
    <span class="term-dim">--------------------------------------------------</span>
    <span class="term-key">Name:</span>        <span class="term-value">Cisco Ramon (Abhishek Raj)</span>
    <span class="term-key">Position:</span>    <span class="term-value">Project Engineer @ C-DAC (National Supercomputing Mission)</span>
    <span class="term-key">Ex:</span>          <span class="term-value">HPC Application Engineer @ IIT (BHU) Varanasi</span>
    <span class="term-key">GitHub:</span>      <a class="term-link" href="https://github.com/CISSSCO" target="_blank">github.com/CISSSCO</a>
    <span class="term-key">LinkedIn:</span>    <a class="term-link" href="https://www.linkedin.com/in/abhi581b" target="_blank">linkedin.com/in/abhi581b</a>
    <span class="term-key">Website:</span>     <a class="term-link" href="https://ciscoramon.pages.dev" target="_blank">ciscoramon.pages.dev</a>
    <span class="term-key">Portfolio:</span>   <a class="term-link" href="https://cisssco.github.io" target="_blank">cisssco.github.io</a>

    <span class="neofetch-palette">
      <span class="palette-swatch swatch-black"></span><span class="palette-swatch swatch-red"></span><span class="palette-swatch swatch-green"></span><span class="palette-swatch swatch-yellow"></span><span class="palette-swatch swatch-blue"></span><span class="palette-swatch swatch-magenta"></span><span class="palette-swatch swatch-cyan"></span><span class="palette-swatch swatch-white"></span>
    </span>

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

  <div class="term-table-responsive">
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
</div>
  `
};
