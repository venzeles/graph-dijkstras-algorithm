'use sctrict';

const Router = require('koa-router');

const frontpage = require('./controllers/frontpage');

const router = module.exports = new Router();

router
  .get('/:dotA/:dotB', frontpage.get);
