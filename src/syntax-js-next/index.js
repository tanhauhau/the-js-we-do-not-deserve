import { parse } from '@lihautan/babel-parser';

export default function () {
  return {
    name: 'syntax-js-next',
    parserOverride(code, opts) {
      return parse(code, {
        ...opts,
        plugins: opts.plugins ? [...opts.plugins, 'jsNext'] : ['jsNext'],
      });
    },
  };
}
