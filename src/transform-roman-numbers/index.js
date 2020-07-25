import { isValidRoman, romanToArab } from 'roman-numbers';

export default function ({ types: t }) {
  return {
    name: 'roman-numbers',
    visitor: {
      Identifier(path) {
        const { parent, node } = path;
        if (
          // const a = II
          (t.isVariableDeclarator(parent) && parent.init === node) ||
          // { a: II }
          (t.isObjectProperty(parent) && !parent.method) ||
          // [II]
          t.isArrayExpression(parent) ||
          // const { a: b = II } = c
          (t.isAssignmentExpression(parent) && parent.right === node) ||
          // function a({ a: b = II }) {}
          (t.isAssignmentPattern(parent) && parent.right === node) ||
          // II + III
          (t.isBinaryExpression(parent)) ||
          // II++
          (t.isUpdateExpression(parent))
        ) {
          const name = node.name;
          if (isValidRoman(name) && !path.scope.hasBinding(name)) {
            path.replaceWith(t.numericLiteral(romanToArab(name)));
          }
        }
      },
    },
  };
}
