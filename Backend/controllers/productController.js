import Product from "../models/productModel.js"

export  const addProduct = async (req,res) => {
  
   try {
    console.log("USER:", req.user);
    console.log("BODY:", req.body);
    const product = await Product.create(req.body); 
    
    res.status(201).json({
      success: true,
      message: "Product added",
      product,
    });
   } catch (error) {
   res.status(500).json({
    success: false,
    message: error.message});
   }   
}

export const getProducts = async (req,res) => {
    try {
        const { category } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }
        const products = await Product.find(filter)
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
