'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }

    return undefined;
  };
}

// applyCustomFind();
// console.log([0, 10, 20, 30].find2(a => a === 10));

module.exports = applyCustomFind;
