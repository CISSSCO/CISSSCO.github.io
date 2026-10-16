(function () {
  let activeOverlay = null;
  let activeKeyHandler = null;
  let currentParts = ["home", "cisco"];
  let selectedIndex = 0;
  let terminalRef = null;

  function getNode(parts) {
    if (!window.VFS) return null;
    let curr = window.VFS.getCurrentParts ? null : null; // fallback
    // We can use window.VFS.ls() logic
    return null;
  }

  function getDirEntries(parts) {
    if (!window.VFS) return [];
    const res = window.VFS.ls(parts.join("/"));
    if (!res.success) return [];
    return res.entries || [];
  }

  function getParentParts(parts) {
    if (parts.length <= 2) return ["home", "cisco"];
    return parts.slice(0, -1);
  }

  function formatPath(parts) {
    if (parts.length === 2 && parts[0] === "home" && parts[1] === "cisco") {
      return "~";
    }
    if (parts.length > 2 && parts[0] === "home" && parts[1] === "cisco") {
      return "~/" + parts.slice(2).join("/");
    }
    return "/" + parts.join("/");
  }

  async function getFilePreview(parts, fileName, isDir) {
    if (!window.VFS) return "";
    const fullPath = parts.join("/") + "/" + fileName;

    if (isDir) {
      const childRes = window.VFS.ls(fullPath);
      if (!childRes.success) return `<div class="term-dim">Cannot read directory</div>`;
      const entries = childRes.entries || [];
      if (entries.length === 0) return `<div class="term-dim">(empty directory)</div>`;
      const list = entries.map(e => {
        const color = e.type === "dir" ? "term-accent term-bold" : "term-green";
        return `<div style="padding:0.15rem 0;"><span class="${color}">${e.name}</span> <span class="term-dim" style="float:right;">${e.size}</span></div>`;
      }).join("");
      return `
        <div class="term-title" style="margin-bottom:0.4rem;">DIR CONTENTS (${entries.length} items):</div>
        <div style="line-height:1.5;">${list}</div>
      `;
    }

    const catRes = await window.VFS.cat(fullPath, terminalRef);
    if (!catRes.success) {
      return `<div class="term-red">${catRes.error}</div>`;
    }
    // Clean preview
    return `
      <div class="term-title" style="margin-bottom:0.4rem;">FILE PREVIEW: ${fileName}</div>
      <div style="line-height:1.5; word-break:break-word;">${catRes.content}</div>
    `;
  }

  async function renderRanger() {
    if (!activeOverlay) return;

    const currentEntries = getDirEntries(currentParts);
    if (selectedIndex >= currentEntries.length) {
      selectedIndex = Math.max(0, currentEntries.length - 1);
    }

    const parentParts = getParentParts(currentParts);
    const isAtRootHome = (currentParts.length <= 2);
    const parentEntries = isAtRootHome ? [] : getDirEntries(parentParts);

    const pathDisplay = formatPath(currentParts);
    const currentItem = currentEntries[selectedIndex] || null;

    // 1. Parent Column HTML
    let parentHTML = "";
    if (isAtRootHome) {
      parentHTML = `<div class="term-dim" style="padding:0.5rem; text-align:center;">(Top level: ~)</div>`;
    } else {
      parentHTML = parentEntries.map(e => {
        const isCurrentDir = e.baseName === currentParts[currentParts.length - 1];
        const activeClass = isCurrentDir ? "ranger-item active" : "ranger-item";
        const color = e.type === "dir" ? "term-accent" : "term-dim";
        return `<div class="${activeClass}"><span class="${color}">${e.name}</span></div>`;
      }).join("");
    }

    // 2. Current Column HTML
    let currentHTML = "";
    if (currentEntries.length === 0) {
      currentHTML = `<div class="term-dim" style="padding:0.5rem;">(empty directory)</div>`;
    } else {
      currentHTML = currentEntries.map((e, idx) => {
        const isSelected = idx === selectedIndex;
        const activeClass = isSelected ? "ranger-item active" : "ranger-item";
        let color = "term-green";
        if (e.type === "dir") color = "term-accent term-bold";
        else if (e.name.endsWith(".org")) color = "term-yellow";
        else if (e.name.endsWith(".md")) color = "term-cyan";

        return `
          <div class="${activeClass}" data-idx="${idx}">
            <span class="${color}">${e.type === "dir" ? "📁 " : "📄 "}${e.name}</span>
            <span class="term-dim" style="font-size:0.8rem; margin-left:0.5rem;">${e.size}</span>
          </div>
        `;
      }).join("");
    }

    // 3. Preview Column HTML
    let previewHTML = `<div class="term-dim">No item selected</div>`;
    if (currentItem) {
      previewHTML = await getFilePreview(currentParts, currentItem.baseName, currentItem.type === "dir");
    }

    // Update DOM
    const headerPath = activeOverlay.querySelector("#ranger-path");
    const headerCount = activeOverlay.querySelector("#ranger-count");
    const parentCol = activeOverlay.querySelector("#ranger-col-parent");
    const currentCol = activeOverlay.querySelector("#ranger-col-current");
    const previewCol = activeOverlay.querySelector("#ranger-col-preview");
    const statusInfo = activeOverlay.querySelector("#ranger-status-info");

    if (headerPath) headerPath.textContent = pathDisplay;
    if (headerCount) {
      const idxText = currentEntries.length ? `[${selectedIndex + 1}/${currentEntries.length}]` : `[0/0]`;
      headerCount.textContent = idxText;
    }

    if (parentCol) parentCol.innerHTML = parentHTML;
    if (currentCol) {
      currentCol.innerHTML = currentHTML;
      // Attach click events to items
      currentCol.querySelectorAll(".ranger-item").forEach(itemEl => {
        itemEl.addEventListener("click", () => {
          const idx = parseInt(itemEl.getAttribute("data-idx"), 10);
          if (idx === selectedIndex) {
            // Second click: enter/open
            enterSelected();
          } else {
            selectedIndex = idx;
            renderRanger();
          }
        });
      });
      // Scroll selected item into view
      const activeEl = currentCol.querySelector(".ranger-item.active");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }

    if (previewCol) {
      previewCol.innerHTML = previewHTML;
      previewCol.scrollTop = 0;
    }

    if (statusInfo && currentItem) {
      const perm = currentItem.type === "dir" ? "drwxr-xr-x" : "-rw-r--r--";
      statusInfo.textContent = `${perm}  ${currentItem.size}  ${currentItem.date}  ${currentItem.name}`;
    } else if (statusInfo) {
      statusInfo.textContent = "0 items";
    }
  }

  function moveUp() {
    const entries = getDirEntries(currentParts);
    if (!entries.length) return;
    selectedIndex = (selectedIndex - 1 + entries.length) % entries.length;
    renderRanger();
  }

  function moveDown() {
    const entries = getDirEntries(currentParts);
    if (!entries.length) return;
    selectedIndex = (selectedIndex + 1) % entries.length;
    renderRanger();
  }

  function navigateParent() {
    if (currentParts.length <= 2) return; // at ~
    const lastDir = currentParts[currentParts.length - 1];
    currentParts = getParentParts(currentParts);
    // Find index of previous dir in new currentParts
    const entries = getDirEntries(currentParts);
    const idx = entries.findIndex(e => e.baseName === lastDir);
    selectedIndex = idx >= 0 ? idx : 0;
    renderRanger();
  }

  function enterSelected() {
    const entries = getDirEntries(currentParts);
    if (!entries.length || selectedIndex >= entries.length) return;
    const item = entries[selectedIndex];
    if (item.type === "dir") {
      currentParts = [...currentParts, item.baseName];
      selectedIndex = 0;
      renderRanger();
    }
  }

  function exitRanger() {
    if (!activeOverlay) return;

    if (activeKeyHandler) {
      window.removeEventListener("keydown", activeKeyHandler, true);
      activeKeyHandler = null;
    }

    // Sync VFS cd
    if (window.VFS) {
      const target = currentParts.slice(2).join("/");
      window.VFS.cd(target ? "~/" + target : "~");
    }

    const exitedPath = formatPath(currentParts);

    // Remove overlay
    activeOverlay.remove();
    activeOverlay = null;

    if (terminalRef) {
      terminalRef.updatePrompt();
      terminalRef.printLine(`Exited ranger at ${exitedPath}`, "term-dim");
    }

    const input = document.getElementById("terminal-input");
    if (input) input.focus();
  }

  function startRanger(startPath = "", terminal = null) {
    terminalRef = terminal;

    if (activeOverlay) {
      exitRanger();
    }

    // Determine initial directory
    if (startPath && window.VFS) {
      const testCd = window.VFS.cd(startPath);
      if (testCd.success) {
        currentParts = window.VFS.getCurrentParts();
      } else {
        currentParts = window.VFS.getCurrentParts();
      }
    } else if (window.VFS) {
      currentParts = window.VFS.getCurrentParts();
    } else {
      currentParts = ["home", "cisco"];
    }

    selectedIndex = 0;

    const appContainer = document.getElementById("terminal-app") || document.body;

    // Create Ranger DOM
    const overlay = document.createElement("div");
    overlay.className = "ranger-overlay";
    overlay.id = "ranger-overlay";

    overlay.innerHTML = `
      <div class="ranger-header">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <span class="term-accent term-bold" style="letter-spacing:1px;">RANGER:</span>
          <span class="term-cyan term-bold" id="ranger-path">~</span>
          <span class="term-yellow" id="ranger-count">[0/0]</span>
        </div>
        <div style="display:flex; gap:0.4rem; align-items:center;">
          <button class="ranger-btn" id="btn-ranger-up" title="Move Up (k / Up)">▲ Up</button>
          <button class="ranger-btn" id="btn-ranger-down" title="Move Down (j / Down)">▼ Down</button>
          <button class="ranger-btn" id="btn-ranger-parent" title="Parent Directory (h / Left)">◄ Back</button>
          <button class="ranger-btn" id="btn-ranger-enter" title="Open Directory (l / Enter)">► Enter</button>
          <button class="ranger-btn ranger-btn-exit" id="btn-ranger-exit" title="Exit Ranger (q / Esc)">✕ Quit</button>
        </div>
      </div>

      <div class="ranger-columns">
        <div class="ranger-col-parent" id="ranger-col-parent"></div>
        <div class="ranger-col-current" id="ranger-col-current"></div>
        <div class="ranger-col-preview" id="ranger-col-preview"></div>
      </div>

      <div class="ranger-footer">
        <div id="ranger-status-info" class="term-dim">Loading...</div>
        <div class="term-dim" style="font-size:0.78rem;">
          Keys: <span class="term-yellow">↑/k</span> Up · <span class="term-yellow">↓/j</span> Down · <span class="term-yellow">←/h</span> Back · <span class="term-yellow">→/l/Enter</span> Open · <span class="term-red">q/Esc</span> Quit
        </div>
      </div>
    `;

    appContainer.appendChild(overlay);
    activeOverlay = overlay;

    // Attach button listeners
    overlay.querySelector("#btn-ranger-up").addEventListener("click", moveUp);
    overlay.querySelector("#btn-ranger-down").addEventListener("click", moveDown);
    overlay.querySelector("#btn-ranger-parent").addEventListener("click", navigateParent);
    overlay.querySelector("#btn-ranger-enter").addEventListener("click", enterSelected);
    overlay.querySelector("#btn-ranger-exit").addEventListener("click", exitRanger);

    // Keyboard navigation
    activeKeyHandler = function (e) {
      if (!activeOverlay) return;

      // Prevent default terminal behavior
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "Escape"].includes(e.key) ||
          e.key === "k" || e.key === "j" || e.key === "h" || e.key === "l" || e.key === "q") {
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.key === "ArrowUp" || e.key === "k") {
        moveUp();
      } else if (e.key === "ArrowDown" || e.key === "j") {
        moveDown();
      } else if (e.key === "ArrowLeft" || e.key === "h") {
        navigateParent();
      } else if (e.key === "ArrowRight" || e.key === "l" || e.key === "Enter") {
        enterSelected();
      } else if (e.key === "q" || e.key === "Escape") {
        exitRanger();
      }
    };

    window.addEventListener("keydown", activeKeyHandler, true);

    renderRanger();
  }

  window.RANGER = {
    start: startRanger,
    exit: exitRanger
  };
})();

