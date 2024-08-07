const db = require('../models');


const getAllProducts = async () => {
    try {
        return await db.Product.findAll();
    } catch (error) {
        throw new Error('Error retrieving products: ' + error.message);
    }
};

const getProduct = async (productId) => {
    try {
        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error retrieving product: ' + error.message);
    }
};

const createProduct = async (productData) => {
    try {
        return await db.Product.create(productData);
    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }
};


const updateProduct = async (productId, productData) => {
    try {
        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        return await product.update(productData);
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};


const deleteProduct = async (productId) => {
    try {
        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        await product.destroy();
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
};
