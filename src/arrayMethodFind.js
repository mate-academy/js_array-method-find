'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = this[i];
      if (callback(item, i, arr) === true) {
        return item;
      }
    }
  };
}

module.exports = applyCustomFind;
