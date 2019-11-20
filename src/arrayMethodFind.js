'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const call = callback(this[i], i, this);
      if (call) {
        return this[i];
      }
    }
    return undefined;
  };
}

module.exports = applyCustomFind;
