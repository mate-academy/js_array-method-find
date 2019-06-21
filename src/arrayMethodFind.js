'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        return this[i];
      }
    }
  };
}

module.exports = applyCustomFind;
