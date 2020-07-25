let hash = window.location.hash.slice(1);
let appContainer = document.querySelector('#app');
let nav = document.querySelector('nav');

const components = {};
const rendered = {};

init();
render();

window.addEventListener(
  'hashchange',
  () => {
    hash = window.location.hash.slice(1);
    render();
  },
  false
);

function init() {
  let html = '';
  DATA.forEach((page) => {
    html += `<section id="${page}"></section>`;
  });
  appContainer.innerHTML = html;

  redirectToIndex();
  components[hash] = import(window.BASE_URL + '/' + hash + '.js').then(
    (mod) => mod.default
  );

  setTimeout(() => {
    DATA.forEach((page) => {
      components[page] = import(window.BASE_URL + '/' + page + '.js').then(
        (mod) => mod.default
      );
    });
  });
  render();
}

async function render() {
  if (rendered[hash]) return;
  let _hash = hash;
  const Component = await components[hash];
  if (_hash === hash && !rendered[hash]) {
    new Component({ target: document.querySelector('#' + hash) });
    rendered[hash] = true;
    if (window.twttr.init === true) window.twttr.widgets.load();
  }
}

function redirectToIndex() {
  if (!hash || !DATA.has(hash)) {
    window.location.hash = '#Index';
    return true;
  }
}

function rIC(fn) {
  let schedule;
  if (typeof requestIdleCallback !== 'undefined') {
    schedule = requestIdleCallback;
  } else {
    schedule = setTimeout;
  }
  schedule(fn);
}
