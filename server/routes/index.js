const apiRouter = require('express').Router();
const router = require('express').Router();
const objectsRouter = require('./proutes');
const sobjectsRouter = require('./sroutes');
// const authorRouter = require('./author.routes');
const catchAll = require('./catch-all.routes');

apiRouter
  // .use('/authors', authorRouter)
  .use('/sobjects', sobjectsRouter)
  .use('/objects', objectsRouter);

// /api/whatever/aksdjafhkajsdfh
module.exports = router.use('/api', apiRouter).use(catchAll);
