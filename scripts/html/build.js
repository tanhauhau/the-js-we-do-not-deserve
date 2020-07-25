const fs = require('fs').promises;
const path = require('path');
const { BASE_URL } = require('../constant');

module.exports = async function (dest, pages) {
  let html = await fs.readFile(path.join(__dirname, './index.html'), 'utf-8');
  let js = await fs.readFile(path.join(__dirname, './index.js'), 'utf-8');

  html = html.replace(
    '<script type="module"></script>',
    [
      `<script>self.BASE_URL = '${BASE_URL.slice(0, -1)}';</script>`,
      '<script type="module">',
      `const DATA = new Set(${JSON.stringify(pages)});`,
      'window.DATA = DATA;',
      js,
      '</script>',
    ].join('')
  );

  await fs.writeFile(path.join(dest, 'index.html'), html, 'utf-8');
};
