(function () {
  const input = document.getElementById("terminal-input");
  const form = document.getElementById("terminal-form");
  const content = document.getElementById("content-area");

  if (!input || !form || !content) return;

  const history = [];
  let historyIndex = -1;

  function printLine(text) {
    const line = document.createElement("div");
    line.textContent = text;
    content.appendChild(line);
    line.scrollIntoView({ block: "end" });
  }

  function printHTML(html) {
    const block = document.createElement("div");
    block.className = "block";
    block.innerHTML = html;
    content.appendChild(block);
    block.scrollIntoView({ block: "end" });
  }

  function hint() {
    printLine("type 'help' to get started");
  }

  function clearScreen() {
    content.innerHTML = "";
    hint();
  }
  function firstScreen() {
    printHTML(window.CONTENT["about"]);
    hint();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cmd = input.value.trim();
    if (!cmd) return;

    printLine(`$ ${cmd}`);
    history.push(cmd);
    historyIndex = history.length;

    if (cmd === "clear") {
      clearScreen();
    } else if (window.CONTENT[cmd]) {
      printHTML(window.CONTENT[cmd]);
    } else {
      printLine(`command not found: ${cmd}`);
    }

    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (!history.length) return;
      e.preventDefault();
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex];
    }

    if (e.key === "ArrowDown") {
      if (!history.length) return;
      e.preventDefault();
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });

  firstScreen();

})();
