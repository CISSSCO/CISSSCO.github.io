// Minimal terminal interaction — intentional and explicit

(function () {
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  const form = document.getElementById("terminal-form");

  if (!input || !output || !form) return;

  const commands = {
    help: () => {
      print("available commands:");
      print("  projects    → view projects");
      print("  philosophy  → engineering philosophy");
      print("  uses        → tools & environment");
      print("  clear       → clear terminal");
    },

    projects: () => navigate("projects.html"),
    philosophy: () => navigate("philosophy.html"),
    uses: () => navigate("uses.html"),

    clear: () => {
      output.innerHTML = "";
    },
  };

  function print(text) {
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function navigate(url) {
    print(`opening ${url}...`);
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    print(`$ ${value}`);

    if (commands[value]) {
      commands[value]();
    } else {
      print(`command not found: ${value}`);
    }

    input.value = "";
  });
})();
