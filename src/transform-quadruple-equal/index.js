export default function ({ template }) {
  return {
    name: 'transform-quadruple-equal',
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator === '====') {
          path.replaceWith(
            template.expression`Object.is(${path.node.left}, ${path.node.right})`()
          );
        } else if (path.node.operator === '!===') {
          path.replaceWith(
            template.expression`!Object.is(${path.node.left}, ${path.node.right})`()
          );
        }
      },
    },
  };
}
