window.HELP_DOCS = {
  projects: {
    summary: "List personal projects with optional filtering",
    usage: [
      "projects",
      "projects <keyword>"
    ],
    description: `
List all personal projects or filter them by name, domain, or stack.
Projects are loaded from a static JSON file and rendered dynamically.
    `,
    examples: [
      "projects",
      "projects cerrfix",
      "projects shell",
      "projects linux"
    ]
  },

  skills: {
    summary: "List technical skills with proficiency and usage context",
    usage: [
      "skills",
      "skills <keyword>"
    ],
    description: `
Display technical skills with proficiency level, usage areas,
and projects where they were applied.
    `,
    examples: [
      "skills",
      "skills python",
      "skills linux"
    ]
  },

  clear: {
    summary: "Clear the terminal screen",
    usage: ["clear"],
    description: "Clear all previous output and reset the view.",
    examples: ["clear"]
  }
};
