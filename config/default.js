'use sctrict';

const mypath = require('path');

module.exports = {
    server: {
        port: '8080'
    },
    root: process.cwd(),
    pug: {
        basedir: mypath.join(process.cwd(), 'templates'),
        cache: true,
        pretty: true
    }
};