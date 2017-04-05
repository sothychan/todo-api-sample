'use strict';

class BaseModel {
    constructor() {
        Object.defineProperty(this, 'props', {
            configurable: false,
            enumerable: false,
            value: {},
            writeable: true
        });
    }
}

module.exports = BaseModel;

