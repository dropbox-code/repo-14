import autocompleteMatches from './autocomplete-matches';

function autocompleteA11yMatches(node, virtualNode) {
  const a11yEngineFlag = true;
  // the flag is used to tell autocomplete matcher that it is being called
  // by a11y-engine and thus bypass an if block
  return autocompleteMatches(node, virtualNode, a11yEngineFlag);
}

export default autocompleteA11yMatches;
