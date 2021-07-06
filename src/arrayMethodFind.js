'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        return arr[i];
      }
    }
  };
}

module.exports = applyCustomFind;
