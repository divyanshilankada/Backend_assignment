const express = require("express");
const router = express.Router();
const CustomerModel = require('../models/customerModel');

router.get('/', async (req, res) => {

    
    try{

        const customers = await CustomerModel.find();
        res.status(200).json({
            status:"Success",
            message:customers
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

        if(req.body.Customer_id !== "" && req.body.Customer_name !== "" && req.body.Email !== "" && req.body.Balance >= 0)
        {
            const customer = await CustomerModel.create(req.body);

            res.status(200).json({
                status:"Success",
                message:customer
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

            
            const customer = await CustomerModel.findOne({Customer_id:req.params.id});

            if(customer)
            {
                res.status(200).json({
                    status:"Success",
                    message:customer,
                    
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

router.put('/:email/:balance', async (req, res) => {

    try{

        console.log(req.params);

        if(req.params.email !== "" && req.params.balance >= 0)
        {
            const Order = await CustomerModel.findOne({Email:req.params.email});
            
                //console.log(Order, req.params.available_quantity);
                if(Order.Balance >= req.params.balance)
                {
                    const order = await CustomerModel.updateOne({Email:req.params.email},{Balance:req.params.balance});
                    //const blog = await Blog.update({_id:req.params.id},req.body);
                    const updateOrder = await CustomerModel.find({Email:req.params.email});
                    console.log(updateOrder);

                    res.status(200).json({
                        status:"Success",
                        message:updateOrder
                    });
                }
                else
                {
                    res.status(400).json({ 
                        status:"Failed",
                        message:"Insufficient Funds"
                    });
                }
                    

            
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


module.exports = router;