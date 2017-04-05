'use strict';

const BaseModel = require('./base');

class Task extends BaseModel {

    constructor() {
        super();
    }

    get id() {
        return this.props.id;
    }
    set id(value) {
        console.log('Setting id: ', value);
        this.props.id = value;
    }

    get title() {
        return this.props.title;
    }
    set title(value) {
        this.props.title = value;
    }

    get description() {
        return this.props.description;
    }
    set description(value) {
        this.props.description = value;
    }

    get isCompleted() {
        return this.props.isCompleted;
    }
    set isCompleted(v) {
        if (typeof v !== 'boolean') throw new TypeError('Is completed must be a boolean');
        this.props.isComplete = v;
    }

    toJson() {
        return {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            isCompleted: this.props.isCompleted || false
        };
    }
}

module.exports = Task;