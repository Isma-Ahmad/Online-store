const productService = require('../services/productService');




const createProduct = async (req, res) => {
 
        const userId = req.user.user_id;
        const productData = req.body;
        const product = await productService.createProduct(productData, userId);
        res.status(201).json(product);
    
};


const getAllProducts = async (req, res) => {
 
        const products = await productService.getAllProducts();
        res.status(200).json(products);
   
};


const getProductById = async (req, res) => {

        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.status(200).json(product);
    
};


const updateProduct = async (req, res) => {

        const userId = req.user.user_id;
        const productId = req.params.id;
        const updatedData = req.body;
        const updatedProduct = await productService.updateProduct(productId, updatedData, userId);
        res.status(200).json(updatedProduct);
   
};


const deleteProduct = async (req, res) => {
 
        const userId = req.user.user_id;
        const productId = req.params.id;
        const result = await productService.deleteProduct(productId, userId);
        res.status(200).json(result);
   
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
