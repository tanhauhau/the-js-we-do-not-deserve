export default function ({ types: t, template }) {
  return {
    name: 'transform-destructure-number',
    visitor: {
      VariableDeclarator(path) {
        if (path.node.id.type === 'DestructureNumberPattern') {
          if (t.isNumericLiteral(path.node.init)) {
            const [a, b] = path.node.init.extra.raw.split('.');

            path.replaceWith(
              template.statement`let [${path.node.id.left}, ${
                path.node.id.right
              }] = [${a || '0'}, ${b || '0'}]`().declarations[0]
            );
          } else {
            throw new Error('Destructure number with number!');
          }
        }
      },
    },
  };
}
