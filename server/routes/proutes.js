
const router = require('express').Router();
const { ObjectController } = require('../controllers');
//const ObjectController = require('../controllers').Object.Controller;
//const ObjectController = require('../controllers/object.controller');

// /Objects/lakdsjfhksadjf

module.exports = router
  .get('/', ObjectController.index)
  .post('/', ObjectController.create)
  .get('/:object_id', ObjectController.show)
  .put('/:object_id', ObjectController.update)
  .delete('/:object_id', ObjectController.destroy);

  // .get('/', ObjectController.indexs)
  // .post('/', ObjectController.creates)
  // .get('/:Object_id', ObjectController.shows)
  // .put('/:Object_id', ObjectController.updates)
  // .delete('/:Object_id', ObjectController.destroys);
 






//var controller = require('../controllers/pObjectcontroller.js')

// module.exports = function(app){

//   app.get('/allobjects', function(req,res){
//     controller.allPObjects(req,res);
//   })
//   app.get('/onep/:id', function(req, res){
//     //console.log("I am in get one p object", req.body)
//     controller.onePObject(req, res);
//   })

//   app.post('/newp', function(req, res){
//     controller.createNewP(req,res);
//   })
  
//   app.put('/editp/:id', function(req, res){
//     // console.log("I am in edit p object mongoose route", req.body)
//     controller.updatePr(req,res);
//   })

  
//   app.delete('/deletep/:id', function(req, res){
//     // console.log('I got this object to delete: ' , req.body)
//     controller.deletePr(req, res);
//   })

//   app.get('/deletes/:id/:sid', function(req, res){
//     controller.deletes(req, res);
//   })

//   app.get('/onep/:id', function(req, res){
//     //console.log("I am in get one p object", req.body)
//     controller.onePObject(req, res);
//   })

//   app.post('/news', function(req, res){
//     // console.log("hi new secondary", req.body);
//     controller.createNewS(req,res);
//   })

//   app.get('/showalls/:id', function(req, res){
//     //console.log("I am in show all secondary objects:")
//     controller.showAllSc(req,res);
//   })

//   app.delete('/deletes/:id', function(req, res){
//     // console.log('I got this object to delete: ' , req.body)
//     controller.deleteSc(req, res);
//   })

//   app.put('/editsec/:id', function(req, res){
//     console.log("Edit one secondary obj.", req.body);
//     controller.updateSc(req,res);
//   })

// }
