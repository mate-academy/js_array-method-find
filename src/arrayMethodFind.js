'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let i = 0;
    while ((i < this.length) && (!callback(this[i], i, this))) {
      i++;
    }
    if (i >= this.length) {
      i = undefined;
    }
    return this[i];
  };
}

module.exports = applyCustomFind;
