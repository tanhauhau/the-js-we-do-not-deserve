const fs = require('fs').promises;
const path = require('path');
const glob = require('tiny-glob');
const mdsvex = require('mdsvex');
const svelte = require('svelte/compiler');
const replaceImport = require('./replace-import');

// load prism diff
global.Prism = require('prismjs');
require('prismjs/components/prism-diff');
require('prismjs/plugins/diff-highlight/prism-diff-highlight');
Prism.languages['diff-js'] = Prism.languages['diff'];
//

const PAGE = path.join(__dirname, '../pages');
const SOURCE = path.join(__dirname, '../src');
const DEST = path.join(__dirname, '../docs');

const BASE_URL = '/'; // '/the-js-not-have/';

(async function () {
  const allPages = [];
  const readmes = await glob('**/*.mdx', { cwd: SOURCE });
  for (const readme of readmes) {
    allPages.push({
      mdPath: path.join(SOURCE, readme),
      componentName: readme
        .split('/')[0]
        .split('-')
        .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
        .join(''),
    });
  }

  const pages = await glob('*.mdx', { cwd: PAGE });
  for (const page of pages) {
    allPages.push({
      mdPath: path.join(PAGE, page),
      componentName:
        page[0].toUpperCase() + page.replace('.mdx', '').slice(1).toLowerCase(),
    });
  }

  const result = [];

  for (const { mdPath, componentName } of allPages) {
    let {
      js: { code: svelteCode },
    } = svelte.compile(
      (await mdsvex.compile(await fs.readFile(mdPath, 'utf8'))).code,
      {
        name: componentName,
      }
    );

    svelteCode = await replaceImport(svelteCode);

    await fs.writeFile(
      path.join(DEST, componentName + '.js'),
      svelteCode,
      'utf-8'
    );

    result.push(componentName);
  }

  await require('./html/build')(DEST, result);
})();
