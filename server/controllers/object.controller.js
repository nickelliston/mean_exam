let mongoose = require('mongoose')
let Primary = mongoose.model('Primary');
let Secondary = mongoose.model('Secondary');

module.exports = {

    index: (req, res) =>{
        console.log('line 8, index/all objects')
        Primary.find({})
        .then (data => { 
            //console.log("20",data)
            res.json({data:data})}  )
        .catch(errors => { 
            //console.log("Find all Errors", errors);
            res.json({data:errors})})
    },


    show(request, response) {
        const { object_id: objectId } = request.params;
    
        Primary.findById(objectId )
        .populate('secondary')
          .then(data => {
            if (!data ) {
              throw new Error('Not Found!');
            }
    
            response.json({data:data});
          })
          .catch(error => response.status(Http.Conflict).json(error));
      },


    create:(req, res) =>{
        //console.log("I am in create new", req.body)
        Primary.create(req.body)
        .then( data => res.json(data))
        .catch(err => { 
           console.log("Create Errors", err);
            res.json(data)
            // setting back end validation
            // const error = Object.keys(err.error).map(key => err.error[key].message);
            // res.status(402).json(error)
        })
    },


    update(request, response) {
        console.log('object to update ', request.body)
        const { object_id: objectId } = request.params;
        console.log('updating product', objectId, request.body);
        Primary.findByIdAndUpdate(objectId, request.body, { new: true, runValidators: true })
          .then(data => response.json(data))
          .catch(error => {
            // this assumes validation failures which may not be the case.
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            response.status(Http.Unauthorized).json(errors);
          })
      },


    // destroy resource
  destroy(request, response) {
    console.log('I am in destroy method in server controller', request.body)
    const { object_id: objecttId } = request.params;

    Primary.findByIdAndRemove(objecttId)
      .then(data => {console.log('did I dleteit??', data); response.json(data) })
      .catch(error => response.status(Http.Forbidden).json(error));
  },
  
}

