'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
      const searchCondition = callback(this[i], i, this);

      if (searchCondition) {
        return this[i];
      }
    }

    return undefined;
  };
}

module.exports = applyCustomFind;
