
const db = require('../models');

const createProduct = async (productData) => {
    try {
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
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error retrieving product: ' + error.message);
    }
};

const updateProduct = async (productId, updateData) => {
    try {
        const [updated] = await db.Product.update(updateData, { where: { product_id: productId } });
        if (updated) {
            const updatedProduct = await db.Product.findByPk(productId);
            return updatedProduct;
        }
        throw new Error('Product not found');
    } catch (error) {
        throw new Error('Error updating product: ' + error.message);
    }
};

const deleteProduct = async (productId) => {
    try {
        const deleted = await db.Product.destroy({ where: { product_id: productId } });
        if (!deleted) {
            throw new Error('Product not found');
        }
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
