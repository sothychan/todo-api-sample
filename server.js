'use strict';

const express = require('express');
const router = express.Router();
const routes = require('./routes');

const app = express();

// initialize routes
routes(router);

app.use(router);

app.listen(3000);