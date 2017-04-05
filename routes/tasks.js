'use strict';

const Promise = require('bluebird');
const Task = require('../models/task');

const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const tasks = (router) => {
    console.log('Initializing tasks route');

    router.get('/tasks', (req, res) => {
        // mimic getting tasks from a database
        const filepath = path.join(__dirname, '..', 'fixtures', 'tasks.json');
        fs.readFileAsync(filepath)
            .then((fileContent) => {
                res.setHeader('Content-type', 'application/json');
                res.send(fileContent);
            });
    });

    router.post('/tasks', (req, res) => {
        const filepath = path.join(__dirname, '..', 'fixtures', 'tasks.json');
        const task = new Task();
        task.id = "1234";
        task.title = "Fake task creation";
        task.description = "Fake task";
        console.log('Json task: ', task.toJson());
        res.json(task.toJson());
    });
};

module.exports = tasks;