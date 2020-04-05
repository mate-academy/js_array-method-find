'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const arr = this;
    let count = 0;

    for (const item of arr) {
      if (callback(item, count, arr)) {
        return item;
      };
      count++;
    }
  };
}

module.exports = applyCustomFind;
