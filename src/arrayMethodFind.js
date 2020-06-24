'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let matchedElem;

    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        matchedElem = this[i];

        return matchedElem;
      }
    }

    return undefined;
  };
}

module.exports = applyCustomFind;
