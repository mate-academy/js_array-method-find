'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let resultArr;
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const index = i;

      if (callback(item, index, arr)) {
        resultArr = item;
        return resultArr;
      };
    }
  };
}

module.exports = applyCustomFind;
