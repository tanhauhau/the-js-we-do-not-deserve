const fs = require('fs').promises;
const path = require('path');

module.exports = async function (dest, pages) {
  let html = await fs.readFile(path.join(__dirname, './index.html'), 'utf-8');
  let js = await fs.readFile(path.join(__dirname, './index.js'), 'utf-8');

  html = html.replace(
    '<script type="module"></script>',
    [
      '<script type="module">',
      `const DATA = new Set(${JSON.stringify(pages)});`,
      'window.DATA = DATA;',
      js,
      '</script>',
    ].join('')
  );

  await fs.writeFile(path.join(dest, 'index.html'), html, 'utf-8');
};
