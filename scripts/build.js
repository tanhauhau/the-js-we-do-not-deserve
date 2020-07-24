const fs = require('fs').promises;
const path = require('path');
const glob = require('tiny-glob');
const mdsvex = require('mdsvex');
const svelte = require('svelte/compiler');

const SOURCE = path.join(__dirname, '../src');
const DEST = path.join(__dirname, '../docs');

(async function () {
  let pages = await glob('**/*.mdx', { cwd: SOURCE });
  const result = {};
  for (const page of pages) {
    const readme = path.join(SOURCE, page);
    const { name } = require(path.join(readme, '../package.json'));
    const componentName = page
      .split('/')[0]
      .split('-')
      .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
      .join('');

    const svelteCode = svelte.compile(
      (await mdsvex.compile(await fs.readFile(readme, 'utf8'))).code,
      {
        name: componentName,
      }
    );
    await fs.writeFile(
      path.join(DEST, componentName + '.js'),
      svelteCode.js.code,
      'utf-8'
    );
  }
})();
