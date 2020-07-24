export default function (babel) {
  const { types: t } = babel;

  return {
    name: 'transform-nil',
    visitor: {
      Identifier(path) {
        if (path.node.name === 'nil') {
          path.replaceWith(t.arrowFunctionExpression([], t.blockStatement([])));
        }
      },
    },
  };
}
