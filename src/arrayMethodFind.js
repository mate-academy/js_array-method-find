'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let foundItem;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        foundItem = this[i];
        break;
      }
    }

    return foundItem;
  };
}

module.exports = applyCustomFind;
