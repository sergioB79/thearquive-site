(function initArchive() {
  const data = window.archiveData;
  if (!data) {
    return;
  }

  const state = {
    category: "All",
    status: "All"
  };

  const projectList = document.getElementById("project-list");
  const categoryFilters = document.getElementById("category-filters");
  const statusFilters = document.getElementById("status-filters");
  const categoriesPanel = document.getElementById("categories-panel");
  const statusesPanel = document.getElementById("statuses-panel");
  const updatedStamp = document.getElementById("updated-stamp");

  if (
    !projectList ||
    !categoryFilters ||
    !statusFilters ||
    !categoriesPanel ||
    !statusesPanel ||
    !updatedStamp
  ) {
    return;
  }

  updatedStamp.textContent = data.meta.updated || "Unknown";

  renderFilters(categoryFilters, data.categories, "category");
  renderFilters(statusFilters, data.statuses, "status");
  renderFilters(categoriesPanel, data.categories.filter((item) => item !== "All"), "category");
  renderFilters(statusesPanel, data.statuses.filter((item) => item !== "All"), "status");
  renderProjects();

  function renderProjects() {
    if (!data.projects.length) {
      projectList.innerHTML =
        '<p class="project-empty">The archive starts empty by design. Add the first project folder and it becomes the first dossier in the index.</p>';
      return;
    }

    const visibleProjects = data.projects.filter((project) => {
      const categoryMatch =
        state.category === "All" || project.category === state.category;
      const statusMatch =
        state.status === "All" ||
        project.status === state.status ||
        project.visibility === state.status;

      return categoryMatch && statusMatch;
    });

    if (!visibleProjects.length) {
      projectList.innerHTML =
        '<p class="project-empty">No dossiers match the current filters. Reset category or status to inspect the full archive.</p>';
      return;
    }

    projectList.innerHTML = visibleProjects.map(renderProject).join("");
  }

  function renderProject(project) {
    const links = Array.isArray(project.links)
      ? project.links
          .map(
            (link) =>
              `<a class="project-link" href="${link.url}">${link.label}</a>`
          )
          .join("")
      : "";

    return `
      <article class="project-row">
        <div class="project-cell project-index">
          <div class="project-number">${project.number}</div>
          <div class="project-eyebrow">${project.category}</div>
        </div>
        <div class="project-cell">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <p class="project-editorial">${project.editorial}</p>
        </div>
        <div class="project-cell project-status-block">
          <div>
            <div class="project-status">${project.status}</div>
            <div class="project-status">${project.visibility}</div>
          </div>
          <div class="project-year">${project.year}</div>
        </div>
        <div class="project-cell project-links">
          ${links}
        </div>
        <div class="project-cell project-file-block">
          <div class="project-file">File No.</div>
          <div class="project-file">${project.fileCode}</div>
        </div>
      </article>
    `;
  }

  function renderFilters(container, items, type) {
    container.innerHTML = items
      .map((item) => {
        const selected = state[type] === item;
        return `
          <button
            class="archive-button${selected ? " is-active" : ""}"
            type="button"
            data-filter-type="${type}"
            data-filter-value="${item}"
            aria-pressed="${selected ? "true" : "false"}"
          >
            ${item}
          </button>
        `;
      })
      .join("");

    container.querySelectorAll("[data-filter-type]").forEach((button) => {
      button.addEventListener("click", () => {
        state[type] = button.getAttribute("data-filter-value") || "All";
        syncFilters();
        renderProjects();
      });
    });
  }

  function syncFilters() {
    renderFilters(categoryFilters, data.categories, "category");
    renderFilters(statusFilters, data.statuses, "status");
    renderFilters(categoriesPanel, data.categories.filter((item) => item !== "All"), "category");
    renderFilters(statusesPanel, data.statuses.filter((item) => item !== "All"), "status");
  }
})();
