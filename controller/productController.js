const productService = require('../services/productService');


const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const product = await productService.createProduct(productData);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        const product = await productService.updateProduct(productId, productData);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        await productService.deleteProduct(productId);
        res.status(204).send(); // No content
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProduct(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
};
