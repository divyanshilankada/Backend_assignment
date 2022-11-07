const mongoose=require('mongoose');

const customerSchema = new mongoose.Schema({

    Customer_id : {
        type:String,
        required : true,
        unique : true
    },
    Customer_name : {
        type:String,
        required : true
    },
    Email : {
        type:String,
        required : true,
        unique : true
    },
    Balance : {
        type:Number,
        required : true
    },


}, { timestamps: true })


const customerModel = mongoose.model("customerModel", customerSchema);
module.exports = customerModel;
