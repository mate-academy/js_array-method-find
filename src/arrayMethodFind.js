'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }

    if (arr.length === 0) {
      return undefined;
    }

    return arr;
  };
}

module.exports = applyCustomFind;
