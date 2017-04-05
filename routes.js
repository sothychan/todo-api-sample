'use strict';

const Promise = require('bluebird');

const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const routes = (router) => {
    console.log('Initializing routes');

    fs.readdirAsync('routes')
        .then((dir) => {
            dir.forEach((fileName) => {
                // path.join will make filepath become routes/sessions.js
                const filepath = path.join(__dirname, 'routes', fileName);
                const route = require(filepath);
                route(router);
            });
        });
}

module.exports = routes;