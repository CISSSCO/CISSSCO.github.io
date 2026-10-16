window.HELP_DOCS = {
  about: {
    summary: "Display system overview and identity",
    usage: ["about"],
    description: "Display an overview of background, roles, affiliations, and contact links inspired by neofetch/fastfetch.",
    examples: ["about"]
  },

  projects: {
    summary: "List personal projects with optional filtering",
    usage: [
      "projects",
      "projects <keyword>"
    ],
    description: "List all personal projects or filter them by name, domain, or technology stack. Projects are loaded dynamically.",
    examples: [
      "projects",
      "projects cerrfix",
      "projects shell",
      "projects linux"
    ]
  },

  skills: {
    summary: "List technical skills with proficiency ratings",
    usage: [
      "skills",
      "skills <keyword>"
    ],
    description: "Display technical skills with visual ASCII progress bars, level ratings, and primary usage areas.",
    examples: [
      "skills",
      "skills c++",
      "skills python",
      "skills linux"
    ]
  },

  experience: {
    summary: "Display professional engineering experience",
    usage: [
      "experience",
      "experience <keyword>"
    ],
    description: "Display work history, research roles at IIT (BHU) and C-DAC, key responsibilities, and technologies used.",
    examples: [
      "experience",
      "experience hpc",
      "experience cdac"
    ]
  },

  philosophy: {
    summary: "Display guiding engineering principles",
    usage: ["philosophy"],
    description: "Insights on systems programming, Linux as a learning platform, open source philosophy, and ricing.",
    examples: ["philosophy"]
  },

  uses: {
    summary: "Display hardware, window managers, and toolchains",
    usage: ["uses"],
    description: "Details daily driver Linux setups, tiling window managers (bspwm, dwm), editors (Vim, Emacs), and tools.",
    examples: ["uses"]
  },

  cd: {
    summary: "Change current working directory",
    usage: ["cd [directory]"],
    description: "Navigate through the virtual filesystem. Explore folders via 'cd projects', 'cd skills', 'cd experiences', and their subdirectories.",
    examples: ["cd projects", "cd skills", "cd experiences", "cd skills/python", "cd ..", "cd ~"]
  },

  ls: {
    summary: "List simulated filesystem entries",
    usage: ["ls", "ls -l", "ls [directory]"],
    description: "Lists virtual files and directories in the current or specified directory.",
    examples: ["ls", "ls -l", "ls projects", "ls skills", "ls experiences"]
  },

  cat: {
    summary: "Concatenate and print files",
    usage: ["cat <file>"],
    description: "Reads and renders the simulated file content to the terminal screen.",
    examples: ["cat about.txt", "cat skills/python/proficiency.txt", "cat projects/orgslide/README.md", "cat experiences/iitbhu/role.txt"]
  },

  tree: {
    summary: "List contents of directories in a tree format",
    usage: ["tree", "tree [directory]"],
    description: "Displays a visual ASCII tree of the entire portfolio filesystem or a target directory.",
    examples: ["tree", "tree projects", "tree skills", "tree experiences"]
  },

  theme: {
    summary: "Switch terminal color palette",
    usage: ["theme", "theme <name>"],
    description: "Allows switching between different terminal color schemes: default, matrix, dracula, gruvbox, nord, amber.",
    examples: ["theme", "theme matrix", "theme dracula", "theme gruvbox"]
  },

  crt: {
    summary: "Toggle retro CRT scanline effect",
    usage: ["crt"],
    description: "Toggles retro cathode-ray-tube scanline styling overlay on the terminal viewport.",
    examples: ["crt"]
  },

  clear: {
    summary: "Clear the terminal screen",
    usage: ["clear", "c", "cls"],
    description: "Clear all output from the terminal scroll buffer. Alternatively press Ctrl+L.",
    examples: ["clear", "c", "cls"]
  },

  ranger: {
    summary: "Interactive terminal file manager with Miller columns",
    usage: ["ranger [directory]", "r [directory]"],
    description: "Launch a full-featured curses/TUI style file manager. Features three Miller columns (parent directory, current directory, live preview pane), keyboard navigation (arrow keys or h/j/k/l), mouse/touch controls, and automatic directory synchronization upon exit.",
    examples: ["ranger", "ranger projects", "ranger skills", "ranger experiences", "r"]
  },

  neofetch: {
    summary: "Display author identity, roles, and compact system banner",
    usage: ["neofetch", "fetch", "about"],
    description: "Fastfetch/Neofetch inspired system overview displaying author name, current position at C-DAC (National Supercomputing Mission), former deputation at IIT (BHU) Varanasi, profile links, and ANSI color swatches.",
    examples: ["neofetch", "fetch"]
  },

  alias: {
    summary: "Display list of all defined command shortcuts and aliases",
    usage: ["alias"],
    description: "Prints an aligned table of all active shortcuts and aliases (e.g. c -> clear, q -> exit, ll -> ls -l, r -> ranger, proj -> projects).",
    examples: ["alias"]
  },

  help: {
    summary: "Display concise help overview and command list",
    usage: ["help", "h"],
    description: "Shows primary commands, basic shell utilities, and a compact grid of all available commands and aliases.",
    examples: ["help", "h"]
  },

  man: {
    summary: "Display full technical manual pages",
    usage: ["man [command]", "man --all"],
    description: "Display in-depth manual documentation for a command or view the complete command reference.",
    examples: ["man", "man --all", "man projects", "man ranger", "man skills", "man experience"]
  },

  exit: {
    summary: "Terminate terminal session",
    usage: ["exit", "quit", "q"],
    description: "Closes the current terminal session with a session termination prompt.",
    examples: ["exit", "quit", "q"]
  },

  history: {
    summary: "Display command history",
    usage: ["history"],
    description: "Prints list of commands entered in the current terminal session with index numbers.",
    examples: ["history"]
  },

  whoami: {
    summary: "Print current username",
    usage: ["whoami"],
    description: "Prints 'cisco' — the active session user identity.",
    examples: ["whoami"]
  },

  uname: {
    summary: "Print system information",
    usage: ["uname", "uname -a"],
    description: "Prints kernel and architecture information: Linux cisssco 6.6.0-arch1-custom x86_64 GNU/Linux.",
    examples: ["uname", "uname -a"]
  },

  pwd: {
    summary: "Print current working directory",
    usage: ["pwd"],
    description: "Prints the absolute virtual filesystem path of the current working directory.",
    examples: ["pwd"]
  },

  date: {
    summary: "Display current date and time",
    usage: ["date"],
    description: "Displays current system date and UTC/local timestamp.",
    examples: ["date"]
  }
};
