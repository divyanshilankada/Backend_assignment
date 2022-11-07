const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({

    Product_id : {
        type:String,
        required : true,
    },
    Customer_id : {
        type:String,
        required : true
    },
    Product_name : {
        type:String,
        required : true
    },
    Quantity : {
        type:Number,
        required : true
    },


}, { timestamps: true })


const orderModel = mongoose.model("orderModel", orderSchema);
module.exports = orderModel;
