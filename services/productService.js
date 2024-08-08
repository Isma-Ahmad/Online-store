const db = require('../models');


const createProduct = async (productData, userId) => {
  
        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can add products');
        }
        const product = await db.Product.create(productData);
        return product;
   
};


const getAllProducts = async () => {
 
        const products = await db.Product.findAll();
        return products;
    
};


const getProductById = async (productId) => {
   
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        return product;
   
};


const updateProduct = async (productId, updatedData, userId) => {
  
        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can update products');
        }
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        return await product.update(updatedData);
   
};


const deleteProduct = async (productId, userId) => {

        const user = await db.User.findByPk(userId);
        if (user.userType !== 'admin') {
            throw new Error('Only admins can delete products');
        }
        const product = await db.Product.findByPk(productId);
        if (!product) throw new Error('Product not found');
        await product.destroy();
        return { message: 'Product deleted successfully' };
    
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
