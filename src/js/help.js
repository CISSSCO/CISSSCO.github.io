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
    description: "Navigate through the virtual filesystem. Explore project folders via 'cd projects' and specific project subdirectories.",
    examples: ["cd projects", "cd cerrfix", "cd ..", "cd ~"]
  },

  ls: {
    summary: "List simulated filesystem entries",
    usage: ["ls", "ls -l", "ls [directory]"],
    description: "Lists virtual files and directories in the current or specified directory.",
    examples: ["ls", "ls -l", "ls projects"]
  },

  cat: {
    summary: "Concatenate and print files",
    usage: ["cat <file>"],
    description: "Reads and renders the simulated file content to the terminal screen.",
    examples: ["cat about.txt", "cat skills.txt", "cat experience.log"]
  },

  tree: {
    summary: "List contents of directories in a tree format",
    usage: ["tree"],
    description: "Displays a visual ASCII tree of the entire portfolio filesystem.",
    examples: ["tree"]
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
    usage: ["clear"],
    description: "Clear all output from the terminal scroll buffer. Alternatively press Ctrl+L.",
    examples: ["clear"]
  }
};
