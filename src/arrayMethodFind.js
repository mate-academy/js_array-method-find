'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }

    return result[0];
  };
}

module.exports = applyCustomFind;
