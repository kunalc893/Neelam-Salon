const nav = document.querySelector('.links');
const navHeader = document.querySelector('.nav');
if (nav && navHeader) {
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Open navigation');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
  navHeader.insertBefore(toggle, nav);
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('is-open', !expanded);
  });
}

const priceGrid = document.querySelector('.pricing-grid');
if (priceGrid) {
  const searchWrap = document.createElement('div');
  searchWrap.className = 'price-search-wrap';
  searchWrap.innerHTML = '<label class="eyebrow" for="price-search">Find a service</label><input id="price-search" class="price-search" type="search" placeholder="Try hair spa, waxing, facial…" autocomplete="off"><p class="search-count" aria-live="polite"></p>';
  priceGrid.before(searchWrap);
  const input = searchWrap.querySelector('input');
  const count = searchWrap.querySelector('.search-count');
  const rows = [...priceGrid.querySelectorAll('.price-row')];
  input.addEventListener('input', () => {
    const term = input.value.trim().toLocaleLowerCase();
    let shown = 0;
    rows.forEach(row => {
      const visible = row.textContent.toLocaleLowerCase().includes(term);
      row.hidden = !visible;
      if (visible) shown++;
    });
    priceGrid.querySelectorAll('.pricebox').forEach(box => {
      const hasRows = box.querySelector('.price-row');
      const hasPackage = box.id === 'packages';
      box.hidden = Boolean(term) && hasRows && ![...box.querySelectorAll('.price-row')].some(row => !row.hidden) || Boolean(term) && !hasRows && !hasPackage;
    });
    count.textContent = term ? `${shown} service${shown === 1 ? '' : 's'} found` : 'Showing all listed services';
  });
  count.textContent = 'Showing all listed services';
}

const galleryImages = document.querySelectorAll('.photo-grid img');
if (galleryImages.length) {
  const dialog = document.createElement('dialog');
  dialog.className = 'gallery-dialog';
  dialog.innerHTML = '<button class="gallery-close" type="button" aria-label="Close image">×</button><img alt="">';
  document.body.append(dialog);
  const preview = dialog.querySelector('img');
  galleryImages.forEach(image => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `View larger: ${image.alt}`);
    const open = () => {
      preview.src = image.src;
      preview.alt = image.alt;
      dialog.showModal();
    };
    image.addEventListener('click', open);
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
