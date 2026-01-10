// Minimal terminal interaction with command history
// Intentional, explicit, no framework

(function () {
  const input = document.getElementById("terminal-input");
  const output = document.getElementById("terminal-output");
  const form = document.getElementById("terminal-form");

  if (!input || !output || !form) return;

  const history = [];
  let historyIndex = -1;

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

    history.push(value);
    historyIndex = history.length;

    if (commands[value]) {
      commands[value]();
    } else {
      print(`command not found: ${value}`);
    }

    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (history.length === 0) return;

      e.preventDefault();

      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
      moveCursorToEnd(input);
    }

    if (e.key === "ArrowDown") {
      if (history.length === 0) return;

      e.preventDefault();

      historyIndex = Math.min(history.length, historyIndex + 1);

      if (historyIndex === history.length) {
        input.value = "";
      } else {
        input.value = history[historyIndex];
      }

      moveCursorToEnd(input);
    }
  });

  function moveCursorToEnd(el) {
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = el.value.length;
    });
  }
})();
