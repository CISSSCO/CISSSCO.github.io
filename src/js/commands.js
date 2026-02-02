(function () {
  const COMMANDS = {};

  function register(command) {
    COMMANDS[command.name] = command;
  }

  function get(name) {
    return COMMANDS[name];
  }

  function list() {
    return Object.values(COMMANDS);
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
    description: "about me",
    usage: "about",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.about);
    },
  });

  register({
    name: "projects",
    description: "things I build",
    usage: "projects",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.projects);
    },
  });

  register({
    name: "philosophy",
    description: "how I think",
    usage: "philosophy",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.philosophy);
    },
  });

  register({
    name: "uses",
    description: "tools & environment",
    usage: "uses",
    run({ terminal }) {
      terminal.printHTML(window.CONTENT.uses);
    },
  });

  register({
    name: "clear",
    description: "clear the screen",
    usage: "clear",
    run({ terminal }) {
      terminal.clear();
    },
  });

  // Expose API
  window.COMMANDS = {
    get,
    list,
  };
})();
