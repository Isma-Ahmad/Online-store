const db = require('../models');


const getAllProducts = async () => {
        return await db.Product.findAll();
};

const getProduct = async (productId) => {
   
        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
   
};

const createProduct = async (productData) => {
   
        return await db.Product.create(productData);
};


const updateProduct = async (productId, productData) => {

        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        return await product.update(productData);
};


const deleteProduct = async (productId) => {
  
        const product = await db.Product.findOne({ where: { product_id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }
        await product.destroy();
   
};


module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
};
