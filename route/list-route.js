'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json() ;
const List = require('../model/list.js');
const listRouter = module.exports = new Router();

listRouter.post('/api/list', jsonParser, function(req, res, next){
  req.body.timestamp = new Date();
  new List(req.body).save()//save -> write to mongo
  .then(list => res.json(list))
  .catch(next);
});