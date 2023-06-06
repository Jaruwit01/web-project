const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: 'cannot be blank'    
            },
        type: {
            type: String,
            required: 'cannot be blank'
            },
        details:{
            type: String,
            required: 'cannot be blank'
        }
    }  , 
    { collection: 'items'}

)
module.exports = mongoose.model('items', itemSchema);
