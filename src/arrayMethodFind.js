'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      const index = i;
      const arr = this;
      if (callback(item, index, arr)) {
        return this[i];
      }
    }
  };
}

module.exports = applyCustomFind;
