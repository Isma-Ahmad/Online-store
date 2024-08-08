const db = require('../models');


const createProduct = async (productData, userId) => {
    try {
        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can add products');
        }
        const product = await db.Product.create(productData);
        return product;
    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }
};


const getAllProducts = async () => {
    try {
        const products = await db.Product.findAll();
        return products;
    } catch (error) {
        throw new Error('Error retrieving products: ' + error.message);
    }
};


const getProductById = async (productId) => {
    try {
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        return product;
    } catch (error) {
        throw new Error('Error retrieving product: ' + error.message);
    }
};


const updateProduct = async (productId, updatedData, userId) => {
    try {
        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can update products');
        }
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        return await product.update(updatedData);
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};


const deleteProduct = async (productId, userId) => {
    try {
        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can delete products');
        }
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        await product.destroy();
        return { message: 'Product deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting product: ' + error.message);
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
