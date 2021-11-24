const siteRouter = require('./site');
const lopsRouter = require('./lops');
const meRouter = require('./me');


function route(app) {
    app.use('/me', meRouter);
    app.use('/lops', lopsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
