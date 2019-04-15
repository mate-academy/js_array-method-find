'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      let element = this[i];
      if (callback(element, i, this)) {
        return element;
      }
    }
  };
}

module.exports = applyCustomFind;
