'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i], i, this)) {
        const searchElement = this[i];

        return searchElement;
      }
    }
  };
}

module.exports = applyCustomFind;
