const esModuleLexer = require('es-module-lexer');
const { BASE_URL } = require('./constant');

module.exports = async function (svelteCode) {
  await esModuleLexer.init;
  let offset = 0;
  for (const { s, e, d } of esModuleLexer.parse(svelteCode)[0]) {
    if (d === -1) {
      let importPath = svelteCode.slice(offset + s, offset + e);
      if (importPath === 'svelte') {
        importPath = BASE_URL + importPath + '/index.js';
      } else if (importPath.startsWith('svelte')) {
        importPath = BASE_URL + importPath + '.js';
      } else {
        // console.log(importPath, BASE_URL);
        // importPath = BASE_URL + importPath.slice(1);
      }
      svelteCode =
        svelteCode.slice(0, offset + s) +
        importPath +
        svelteCode.slice(offset + e);
      offset += importPath.length - (e - s);
    } else {
      // dynamic import?
    }
  }
  return svelteCode;
};
