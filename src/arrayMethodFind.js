'use strict';

/**
 * Implement method Find
 */
function applyCustomFind() {
  [].__proto__.find2 = function(callback) {
    let valueMethodFind;
    for (let elem = 0; elem < this.length; elem++) {
      if (callback(this[elem], elem, this)) {
        valueMethodFind = this[elem];
        break;
      }
    }
    return valueMethodFind;
  };
}

module.exports = applyCustomFind;
