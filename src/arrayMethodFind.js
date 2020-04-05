'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    const result = [];
    let index = 0;

    for (const item of this) {
      if (callback(item, index, this)) {
        result.push(item);
      }
      index++;
    }

    return result[0];
  };
}

module.exports = applyCustomFind;
