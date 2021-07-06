'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const items = this;

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i], i, items)) {
        return items[i];
      }
    }
  };
}

module.exports = applyCustomFind;
