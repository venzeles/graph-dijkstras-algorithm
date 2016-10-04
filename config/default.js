'use sctrict';

const path = require('path');

module.exports = {
    server: {
        port: '8080'
    },
    root: process.cwd(),
    pug: {
        basedir: path.join(process.cwd(), 'templates'),
        cache: true,
        pretty: true
    }
};