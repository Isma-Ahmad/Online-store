const productService = require('../services/productService');



const createProduct = async (req, res) => {
 
        
        const userId = req.user.id;
        const productData = {
            ...req.body,
            image: req.file ? req.file.filename : null 
        };
        const product = await productService.createProduct(productData, userId);
        res.status(201).json({ message: 'Product created successfully', product });
   
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
 
        const userId = req.user.id;
        const productId = req.params.id;
        const updatedData = {
            ...req.body,
            image: req.file ? req.file.filename : null 
        };
        const product = await productService.updateProduct(productId, updatedData, userId);
        res.status(200).json({ message: 'Product updated successfully', product });
   
};


const deleteProduct = async (req, res) => {

        const userId = req.user.id;
        const productId = req.params.id;
        await productService.deleteProduct(productId, userId);
        res.status(200).json({ message: 'Product deleted successfully' });
    
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
