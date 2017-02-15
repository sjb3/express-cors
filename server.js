'use strict';
//npm modules
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('note:server');
//app modules

//module constants
const PORT = process.env.PORT || 3000;
const app = express();
// app.use(cors());

app.use(morgan('dev'));

const server = module.exports = app.listen(PORT, function(){
  debug(`server up ${PORT}`);
});

server.isRunning = true;

