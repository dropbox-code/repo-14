import { getRectStack } from './get-rect-stack';
import { getNodeFromTree } from '../../core/utils';
import createGrid from './create-grid';

/**
 * Return all elements that are at the center bounding rect of the passed in node.
 * @method getElementStack
 * @memberof axe.commons.dom
 * @param {Node} node
 * @return {Node[]}
 */
function getElementStack(
  node,
  ruleId = null,
  isCoordsPassed = false,
  x = null,
  y = null
) {
  if (ruleId === 'zoom-text-overlap-viewport') {
    createGrid(document.body, null, null, {
      ruleId,
      gridSize: 500
    });
  } else {
    createGrid();
  }

  const vNode = getNodeFromTree(node);
  const grid = vNode._grid;

  if (!grid) {
    return [];
  }

  return getRectStack(
    grid,
    vNode.boundingClientRect,
    false,
    isCoordsPassed,
    x,
    y
  );
}

export default getElementStack;
