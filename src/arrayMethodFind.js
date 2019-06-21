'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    // write code here
    const length = this.length;
    for (let i = 0; i < length; i++) {
      if (callback(this[i], i, this) === true) {
        const result = this[i];
        return result;
      }
    };
  };
}

module.exports = applyCustomFind;
