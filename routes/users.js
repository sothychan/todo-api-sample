'use strict';

const users = (router) => {
    console.log('Initializing users route');

    router.get('/users/{id}', (req, res) => {
        res.send('Getting user by id');
    });

    router.post('/users', (req, res) => {
        res.send('Creating a user');
    });
};

module.exports = users;