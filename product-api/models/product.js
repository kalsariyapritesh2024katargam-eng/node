const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    product_name : String,
    product_price : Number,
    product_description : String,
    product_category : String,
    product_stock : Number 

})

module.exports = mongoose.model('productapi' , userSchema);