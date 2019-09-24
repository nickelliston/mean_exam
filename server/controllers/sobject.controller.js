let mongoose = require('mongoose')
let Primary = mongoose.model('Primary');
let Secondary = mongoose.model('Secondary');

module.exports = {

    // index: (req, res) =>{
    //     Secondary.find({})
    //     .then (data => { 
    //         //console.log("20",data)
    //         res.json({data:data})}  )
    //     .catch(errors => { 
    //         //console.log("Find all Errors", errors);
    //         res.json({data:errors})})
    // },


    index:(req, res) => {
        //console.log("show all S obj by primary id:", req.params.id)
        Secondary.find({primary: req.params.id})
        .then(data => res.json({data:data}))
        .catch(errors => { 
            //console.log("Find S by primary id error", errors);
            res.json({errors:errors})})

    },



    create:(req, res) =>{
        //console.log("I am in create new", req.body)
        Secondary.create(req.body)
            .then( data => {
                    return Primary.findByIdAndUpdate(data.primary, { $push: { secondary: data.id }})
                        .then(() => {
                            res.json({data:data})})
                        })
        .catch(err => { 
           console.log(" Create Errors", err);
            res.json(data)
            // setting back end validation
            // const error = Object.keys(err.error).map(key => err.error[key].message);
            // res.status(402).json(error)
        })
    },


    // update:(req, res) =>{
    //     console.log("parameters to update sec object", req.body)
    //     Secondary.findByIdAndUpdate(req.params.id,req.body)
    //     .then(data => res.json(data))
    //     .catch(errors => { 
    //         console.log("Update S Errors", errors);
    //         res.json({errors:errors})})
    // }, 

    update(request, response) {
        console.log('sobject to update ', request.body)
        const { sobject_id: sobjectId } = request.params;
        console.log('updating sobject', sobjectId, request.body);
        Secondary.findByIdAndUpdate(sobjectId, request.body, { new: true, runValidators: true })
          .then(data => response.json(data))
          .catch(error => {
            // this assumes validation failures which may not be the case.
            const errors = Object.keys(error.errors).map(key => error.errors[key].message);
            response.status(Http.Unauthorized).json(errors);
          })
      },
    
    show:(req, res) => {
        //console.log("show all S obj by primary id:", req.params.id)
        Secondary.find({primary: req.params.id})
        .then(data => res.json({data:data}))
        .catch(errors => { 
            //console.log("Find S by primary id error", errors);
            res.json({errors:errors})})

    },

    destroy(request, response) {
        console.log('I am in destroy secondary in server controller', request.body)
        const { sobject_id: sobjecttId } = request.params;
    
        Secondary.findByIdAndRemove(sobjecttId)
          .then(data => {console.log('did I dlete it??', data); response.json(data) })
          .catch(error => response.status(Http.Forbidden).json(error));
      },
    
}

