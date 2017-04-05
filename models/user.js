'use strict';

const BaseModel = require('./base');

class User extends BaseModel {

    constructor(name, email) {
        super();
        this.props.name = name;
        this.props.email = email;
    }

    get id() {
        return this.props.id;
    }
    set id(value) {
        this.props.id = value;
    }

    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }

    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }

    //todo: Create a toJson() function
}

module.exports = User;

