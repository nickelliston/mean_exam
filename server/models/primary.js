const mongoose = require('mongoose');
const { SecondarySchema} = require('./secondary');
const PrimarySchema = new mongoose.Schema({
    title: { type: String, 
            required: true,
            minlength:[2, "At least 2 char long"]
        },
    descr: { type: String,
             required: true,
             minlength: [5, "It should be at least 5 char long"]},
    //secondary: [SecondarySchema]
    //comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
    secondary: [{type: mongoose.Schema.Types.ObjectId, ref: 'Secondary'}]
},{timestamps:true});

mongoose.model('Primary', PrimarySchema)