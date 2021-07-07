'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    // write code here

    if (typeof callback !== 'function') {
      return this;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          return this[i];
        }
      }

      return undefined;
    }
  };
}

module.exports = applyCustomFind;
