'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }

    return undefined;
  };
}

module.exports = applyCustomFind;
