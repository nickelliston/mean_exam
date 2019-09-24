const mongoose = require('mongoose');

const SecondarySchema = new mongoose.Schema({
    primary: {type: mongoose.Schema.Types.ObjectId, ref: 'Primary'},

    name: {type: String, require: true, minlength: [2, "at least 2 char long"]},
    rating: {type: Number,require: true},
    content: {type: String, minlength: [5, "At least five characger long"]}
    
},{timestamps: true})

// module.exports = mongoose.model('Secondary', SecondarySchema)
// module.exports = SecondarySchema;
mongoose.model('Secondary', SecondarySchema)

// module.exports = {
//     SecondarySchema,
//     Secondary: mongoose.model('Secondary', SecondarySchema)
// }