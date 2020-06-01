'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let foundValue = 0;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        foundValue = this[i];

        return foundValue;
      }
    }

    return undefined;
  };
}

module.exports = applyCustomFind;
