'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    if (this.length === 0) {
      return;
    }

    let result;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result = this[i];
        break;
      }
    }

    return result;
  };
}

module.exports = applyCustomFind;
