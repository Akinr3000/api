// const productmodel = require ("../model/product");

// const product = require("../controller/query");

const cartmodel = require("../model/add-product");

exports.cartpage = (req, res) => {
    res.send("welcome to cart page")
}

exports.cartpost = async (req,res) => {
    
        const addcart = new cartmodel({
            name:req.body.name,
            price:req.body.price,
            object_id:req.body.object_id,
        })
        const save = await addcart.save();
        res.json(save)
   
    }