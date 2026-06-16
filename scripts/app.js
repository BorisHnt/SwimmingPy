const state = {
  projects: [],
  activeProjectId: "",
};

const elements = {
  nav: document.querySelector("#project-nav"),
  projectPanel: document.querySelector("#project-panel"),
  searchPanel: document.querySelector("#search-panel"),
  searchInput: document.querySelector("#search-input"),
  searchResults: document.querySelector("#search-results"),
  readingToggle: document.querySelector("#reading-toggle"),
  showAll: document.querySelector("#show-all"),
  clearSearch: document.querySelector("#clear-search"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadProjects() {
  try {
    const response = await fetch("data/projects.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("projects.json indisponible");
    }

    return response.json();
  } catch (error) {
    if (Array.isArray(window.PISCINE_PROJECTS_FALLBACK)) {
      return window.PISCINE_PROJECTS_FALLBACK;
    }

    throw error;
  }
}

function renderTimeline(projects) {
  elements.nav.innerHTML = projects
    .map((project) => {
      const current = project.id === state.activeProjectId ? ' aria-current="page"' : "";

      return `
        <button type="button" data-project-id="${escapeHtml(project.id)}"${current}>
          <span class="timeline-number">${escapeHtml(project.number || "")}</span>
          <span class="timeline-copy">
            <strong>${escapeHtml(project.navTitle || project.name || project.title)}</strong>
            <span>${escapeHtml(project.focus)}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderTextList(lines, className = "") {
  if (!Array.isArray(lines) || lines.length === 0) {
    return "";
  }

  return `
    <ul class="${className}">
      ${lines.map((line) => `<li data-reading>${escapeHtml(line)}</li>`).join("")}
    </ul>
  `;
}

function renderTags(tags) {
  if (!Array.isArray(tags) || tags.length === 0) {
    return "";
  }

  return `
    <ul class="tag-list" aria-label="Tags de notion">
      ${tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
    </ul>
  `;
}

function renderProject(projectId, conceptId = "", shouldScroll = true) {
  const project = state.projects.find((item) => item.id === projectId) || state.projects[0];

  if (!project) {
    elements.projectPanel.innerHTML = '<p class="empty-state">Aucun projet a afficher.</p>';
    return;
  }

  state.activeProjectId = project.id;
  renderTimeline(state.projects);

  const concepts = project.concepts
    .map((concept) => {
      const code = concept.code
        ? `<h4>Exemple</h4><pre><code>${escapeHtml(concept.code)}</code></pre>`
        : "";
      const output = concept.output
        ? `<h4>Résultat</h4><pre class="output"><code>${escapeHtml(concept.output)}</code></pre>`
        : "";

      return `
        <article class="notebook-block" id="${escapeHtml(concept.id)}">
          <div class="concept-heading">
            <h3>${escapeHtml(concept.title)}</h3>
            <span>${escapeHtml(concept.level || "base")}</span>
          </div>
          ${renderTags(concept.tags)}
          <div class="description">
            ${concept.description.map((line) => `<p data-reading>${escapeHtml(line)}</p>`).join("")}
          </div>
          <h4>Pourquoi c'est utile</h4>
          ${renderTextList(concept.whyItMatters, "why-list")}
          ${code}
          ${output}
          <h4>Erreur fréquente</h4>
          <p class="mistake" data-reading>${escapeHtml(concept.commonMistake)}</p>
          <h4>Comment la reconnaître</h4>
          <p data-reading>${escapeHtml(concept.howToSpot || "")}</p>
          <h4>Bon réflexe</h4>
          <p data-reading>${escapeHtml(concept.fix || "")}</p>
          <h4>Mémo</h4>
          <p class="memo" data-reading>${escapeHtml(concept.memo)}</p>
        </article>
      `;
    })
    .join("");

  elements.projectPanel.innerHTML = `
    <article class="project-page">
      <p class="project-kicker">${escapeHtml(project.focus)}</p>
      <h2 class="project-title">${escapeHtml(project.title)}</h2>
      <p class="summary" data-reading>${escapeHtml(project.summary)}</p>
      <ul class="meta-list" aria-label="Informations projet">
        <li>${escapeHtml(project.status)}</li>
        <li>${project.concepts.length} notions</li>
        <li>${escapeHtml(project.focus)}</li>
      </ul>
      <section class="project-overview" aria-label="Objectifs et notions">
        <div>
          <h3>Objectifs de révision</h3>
          ${renderTextList(project.objectives, "overview-list")}
        </div>
        <div>
          <h3>Notions abordées</h3>
          <ul class="overview-list">
            ${project.concepts.map((concept) => `<li>${escapeHtml(concept.title)}</li>`).join("")}
          </ul>
        </div>
      </section>
      ${concepts}
    </article>
  `;

  window.readingAssist.refresh(document);

  if (conceptId) {
    document.getElementById(conceptId)?.scrollIntoView({ block: "start" });
  } else if (shouldScroll) {
    elements.projectPanel.scrollIntoView({ block: "start" });
  }
}

function getSearchText(project, concept) {
  return [
    project.title,
    project.shortTitle,
    project.name,
    project.navTitle,
    project.summary,
    project.focus,
    concept.title,
    ...(concept.tags || []),
    ...concept.description,
    ...(concept.whyItMatters || []),
    concept.commonMistake,
    concept.howToSpot || "",
    concept.fix || "",
    concept.memo,
  ]
    .join(" ")
    .toLowerCase();
}

function searchProjects(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    elements.searchPanel.hidden = true;
    return;
  }

  const results = [];

  state.projects.forEach((project) => {
    project.concepts.forEach((concept) => {
      if (getSearchText(project, concept).includes(normalized)) {
        results.push({ project, concept });
      }
    });
  });

  elements.searchPanel.hidden = false;

  if (results.length === 0) {
    elements.searchResults.innerHTML =
      '<li class="empty-state" data-reading>Aucun résultat. Essaie un mot plus simple.</li>';
    window.readingAssist.refresh(document);
    return;
  }

  elements.searchResults.innerHTML = results
    .map(({ project, concept }) => {
      const excerpt = concept.description[0] || project.summary;

      return `
        <li>
          <button
            class="result-button"
            type="button"
            data-project-id="${escapeHtml(project.id)}"
            data-concept-id="${escapeHtml(concept.id)}"
          >
            <strong>${escapeHtml(project.title)}</strong>
            <span>${escapeHtml(concept.title)}</span>
            <span data-reading>${escapeHtml(excerpt)}</span>
          </button>
        </li>
      `;
    })
    .join("");

  window.readingAssist.refresh(document);
}

function clearSearch() {
  elements.searchInput.value = "";
  elements.searchPanel.hidden = true;
  elements.searchInput.focus();
}

function setupEvents() {
  elements.nav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");

    if (!button) {
      return;
    }

    clearSearch();
    renderProject(button.dataset.projectId);
  });

  elements.searchInput.addEventListener("input", (event) => {
    searchProjects(event.target.value);
  });

  elements.searchResults.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id][data-concept-id]");

    if (!button) {
      return;
    }

    renderProject(button.dataset.projectId, button.dataset.conceptId);
  });

  elements.showAll.addEventListener("click", () => {
    clearSearch();
    renderProject(state.projects[0]?.id);
  });

  elements.clearSearch.addEventListener("click", clearSearch);

  elements.readingToggle.addEventListener("click", () => {
    const enabled = elements.readingToggle.getAttribute("aria-pressed") !== "true";
    elements.readingToggle.setAttribute("aria-pressed", String(enabled));
    window.readingAssist.setEnabled(enabled, document);
  });
}

async function init() {
  state.projects = await loadProjects();
  state.activeProjectId = state.projects[0]?.id || "";

  setupEvents();
  renderTimeline(state.projects);
  renderProject(state.activeProjectId, "", false);

  const readingEnabled = window.readingAssist.isEnabled();
  elements.readingToggle.setAttribute("aria-pressed", String(readingEnabled));
  window.readingAssist.setEnabled(readingEnabled, document);
}

init().catch((error) => {
  elements.projectPanel.innerHTML = `
    <p class="empty-state">
      Impossible de charger les données du site. ${escapeHtml(error.message)}
    </p>
  `;
});
