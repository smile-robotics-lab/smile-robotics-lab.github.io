(() => {
  const root = document.querySelector('#research.research-section');
  if (!root) return;

  const dialog = root.querySelector('.research-dialog');
  const body = dialog.querySelector('.dialog-body');
  const title = dialog.querySelector('#dialog-title');

  function publicationsFor(areaId) {
    return root.querySelector(`#publications-${areaId}`).content.cloneNode(true);
  }

  function openDialog(heading, ...content) {
    title.textContent = heading;
    body.replaceChildren(...content);
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  function showProject(projectId) {
    const project = root.querySelector(`#${projectId}`);
    const status = project.querySelector('.project-status').cloneNode(true);
    status.classList.add('project-detail-status');
    const visual = document.createElement('div');
    visual.className = 'project-detail-visual';
    visual.append(project.querySelector('.project-visual > div').cloneNode(true));
    openDialog(
      project.querySelector('h3').textContent,
      status,
      visual,
      project.querySelector('.project-caption').cloneNode(true),
      project.querySelector('.project-meta').cloneNode(true)
    );
  }

  root.addEventListener('click', event => {
    const link = event.target.closest('a[data-publications], a[data-detail]');
    if (!link || !root.contains(link)) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();

    if (link.dataset.publications) {
      const template = root.querySelector(`#publications-${link.dataset.publications}`);
      openDialog(template.dataset.title, publicationsFor(link.dataset.publications));
    } else if (link.dataset.project) {
      showProject(link.dataset.project);
    } else {
      const areaId = link.dataset.detail;
      const figure = root.querySelector(`#research-detail-${areaId}`).content.cloneNode(true);
      const heading = root.querySelector(`#${areaId} .area-heading`).textContent.replace(/^\s*\d+\s*/, '').trim();
      if (areaId === 'planning') {
        figure.append(root.querySelector('#planning-method-detail').content.cloneNode(true));
      }
      openDialog(heading, figure, publicationsFor(areaId));
    }
  });

  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
})();
