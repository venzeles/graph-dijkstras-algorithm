'use sctrict';

const koa = require( 'koa' );
const app = module.exports = koa();

const mount = require( 'koa-mount' );

const { router: frontpage } = require( './handlers/frontpage' );

app.use(mount('/', frontpage.middleware()));