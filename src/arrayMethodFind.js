'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const condition = callback(this[i], i, this);

      if (condition) {

        return this[i];
      }
    }
  };
}

module.exports = applyCustomFind;
