const express = require("express");
const router = express.Router();
const ProductModel = require('../models/productModel.js');

router.get('/', async (req, res) => {

    
    try{

        const products = await ProductModel.find();
        res.status(200).json({
            status:"Success",
            message:products
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

        if(req.body.Product_id !== "" && req.body.Product_type !== "" && req.body.Product_name !== "" && req.body.Product_price >= 0 && req.body.Available_quantity >= 0)
        {
            const product = await ProductModel.create(req.body);

            res.status(200).json({
                status:"Success",
                message:product
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

            
            const product = await ProductModel.findOne({Product_id:req.params.id});

            if(product)
            {
                res.status(200).json({
                    status:"Success",
                    message:product,
                    
                });
            }
            else
            {
                res.status(400).json({ 
                    status:"Failed",
                    message:"Incorrect Product_id"
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


router.put('/:product_name/:available_quantity', async (req, res) => {

    try{

        console.log(req.params);

        if(req.params.product_name !== "" && req.params.available_quantity >= 0)
        {
            const Order = await ProductModel.findOne({Product_name:req.params.product_name});
            
                console.log(Order, req.params.available_quantity);
                if(Order.Available_quantity >= req.params.available_quantity)
                {
                    const order = await ProductModel.updateOne({Product_name:req.params.product_name},{Available_quantity:req.params.available_quantity});
                    //const blog = await Blog.update({_id:req.params.id},req.body);
                    const updateOrder = await ProductModel.find({Product_name:req.params.product_name});
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
                        message:"Item is out of stock"
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