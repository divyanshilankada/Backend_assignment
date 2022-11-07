const mongoose=require('mongoose');

const productSchema = new mongoose.Schema({

    Product_id : {
        type:String,
        required : true,
        unique : true
    },
    Product_type : {
        type:String,
        required : true
    },
    Product_name : {
        type:String,
        required : true
    },
    Product_price : {
        type:Number,
        required : true
    },
    Available_quantity : {
        type:Number,
        required : true
    },


}, { timestamps: true })


const ProductModel = mongoose.model("productModel", productSchema);
module.exports = ProductModel;
