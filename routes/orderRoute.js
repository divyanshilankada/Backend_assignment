const express = require("express");
const router = express.Router();
const OrderModel = require('../models/orderModel');

router.get('/', async (req, res) => {

    
    try{

        const orders = await OrderModel.find();
        res.status(200).json({
            status:"Success",
            message:orders
        })
        

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});



router.post('/', async (req, res) => {

    try{

        console.log(req.body);

        if(req.body.Product_id !== "" && req.body.Customer_id !== "" && req.body.Product_name !== "" && req.body.Quantity >= 0)
        {
            const order = await OrderModel.create(req.body);

            res.status(200).json({
                status:"Success",
                message:order
            });
        }
        else
        {
            res.status(400).json({ 
                status:"Failed",
                message:"Incorrect entries"
            });
        }
        
                

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});

router.get('/:id', async (req, res) => {

    try{

            
            const order = await OrderModel.findOne({_id:req.params.id});

            if(order)
            {
                res.status(200).json({
                    status:"Success",
                    message:order,
                    
                });
            }
            else
            {
                res.status(400).json({ 
                    status:"Failed",
                    message:"Incorrect order_id"
                });
            }        

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});



module.exports = router;