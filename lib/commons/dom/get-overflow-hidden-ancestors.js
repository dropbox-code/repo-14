import memoize from '../../core/utils/memoize';

/**
 * Get all ancestor nodes (including the passed in node) that have overflow:hidden
 * @method getOverflowHiddenAncestors
 * @memberof axe.commons.dom
 * @param {VirtualNode} vNode
 * @returns {VirtualNode[]}
 */
const getOverflowHiddenAncestors = memoize(
  function getOverflowHiddenAncestorsMemoized(vNode, ruleId = null) {
    const ancestors = [];

    if (!vNode) {
      return ancestors;
    }

    const overflow = vNode.getComputedStylePropertyValue('overflow');

    if (ruleId && ruleId === 'zoom-text-overlap-viewport') {
      if (
        overflow.includes('hidden') ||
        overflow.includes('clip') ||
        overflow.includes('scroll')
      ) {
        ancestors.push(vNode);
      }
    } else {
      if (overflow.includes('hidden')) {
        ancestors.push(vNode);
      }
    }

    return ancestors.concat(getOverflowHiddenAncestors(vNode.parent));
  }
);

export default getOverflowHiddenAncestors;
