const productService = require('../services/productService');


const createProduct = async (req, res) => {

            const userId = req.user.id;
            const images = req.files ? req.files.map(file => file.filename) : [];
            const productData = {
                ...req.body,
                images
            };
            const product = await productService.createProduct(productData, userId);
            res.status(201).json({ message: 'Product created successfully', product });
       
    };
    


const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send('Error retrieving products: ' + error.message);
    }
};


const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send('Error retrieving product: ' + error.message);
    }
};


const updateProduct = async (req, res) => {
    try {
        const userId = req.user.id;
        const productId = req.params.id;
        const images = req.files ? req.files.map(file => file.filename) : [];
        const updatedData = {
            ...req.body,
            images
        };
        const product = await productService.updateProduct(productId, updatedData, userId);
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).send('Error updating product: ' + error.message);
    }
};


const deleteProduct = async (req, res) => {
    try {
        const userId = req.user.id;
        const productId = req.params.id;
        await productService.deleteProduct(productId, userId);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send('Error deleting product: ' + error.message);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
