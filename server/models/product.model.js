const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: { 
        type: String, 
        required: [true, "A title is indeed neccessary here!"],
        minlength: [2, "Please make sure your title is longer than 2 characters!"
    ]},
    price: {
        type:Number,
        validate: [price => price  !==  undefined  &&  price > 1, "Opps. This might well be a great product but for this list, you are too inexpensive! This list requires you to cost at least one dollar!"
    ]},
    description: { 
        type: String,
        required: [true, "A description is required."],
        minlength: [3, "The description must be more than 3 characters."
    ]},
    
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);