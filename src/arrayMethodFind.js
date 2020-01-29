'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    for (let i = 0; i < this.length; i += 1) {
      const isTestPassed = callback(this[i], i, this);

      if (isTestPassed) {
        return this[i];
      }
    }
  };
}

module.exports = applyCustomFind;
