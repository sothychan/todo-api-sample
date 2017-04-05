'use strict';

const sessions = (router) => {
    console.log('Initializing sessions route');

    router.post('/sessions', (req, res) => {
        res.send('Creating new session');
    });

    router.delete('/sessions', (req, res) => {
        res.send('Deleting current session');
    });
};

module.exports = sessions;