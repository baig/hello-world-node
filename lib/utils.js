'use strict';

function _clone(a) {
    return JSON.parse(JSON.stringify(a));
}

module.exports = {
    clone: _clone,
};
