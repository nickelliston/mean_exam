const router = require('express').Router();
const { SobjectController } = require('../controllers');
//const SobjectController = require('../controllers').Object.Controller;
//const SobjectController = require('../controllers/object.controller');

// /Objects/lakdsjfhksadjf

module.exports = router
  
  .get('/', SobjectController.index)
  .post('/', SobjectController.create)
  .get('/:sobject_id', SobjectController.show)
  .put('/:sobject_id', SobjectController.update)
  .delete('/:sobject_id', SobjectController.destroy);
 