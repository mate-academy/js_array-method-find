'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    // write code here
    let res;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        res = this[i];

        return res;
      }
    }

    return undefined;
  };
}

module.exports = applyCustomFind;
