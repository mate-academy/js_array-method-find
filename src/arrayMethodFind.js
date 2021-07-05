'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  Array.prototype.find2 = function(callback) {
    if (this.length === 0) {
      return undefined;
    }

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return this[i];
      }
    }
  };
}

module.exports = applyCustomFind;
