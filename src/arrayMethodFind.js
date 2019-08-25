'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        return this[index];
      }
    }
  };
}

module.exports = applyCustomFind;
