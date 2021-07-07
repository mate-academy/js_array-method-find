'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (const [index, value] of this.entries()) {
      if (callback(this[index], index, this)) {
        return value;
      }
    }
  };
}

module.exports = applyCustomFind;
