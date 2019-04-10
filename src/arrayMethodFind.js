'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let shouldBeAdded = callback(item, i, items);

      if (shouldBeAdded) {
        return item;
      }
    }
  };
}

module.exports = applyCustomFind;
