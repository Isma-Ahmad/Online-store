const db = require('../models');

const createProduct = async (productData, userId) => {
    const user = await db.User.findByPk(userId);
    if (!user =='admin') {
        throw new Error('Only admins can add products');
    }
    
    const { image, ...productDetails } = productData;
    let imageData = null;

    if (image) {
        imageData = image; 
    }
    
    const product = await db.Product.create({ ...productDetails, image: imageData });
    return product;
};

const getAllProducts = async () => {
    return await db.Product.findAll();
};

const getProductById = async (productId) => {
    const product = await db.Product.findByPk(productId);
    if (!product) throw new Error('Product not found');
    return product;
};

const updateProduct = async (productId, updatedData, userId) => {
    const user = await db.User.findByPk(userId);
    if (!user || user.userType !== 'admin') {
        throw new Error('Only admins can update products');
    }
    
    const product = await db.Product.findByPk(productId);
    if (!product) throw new Error('Product not found');
    
    const { image, ...productDetails } = updatedData;
    if (image) {
        productDetails.image = image; 
    }
    
    return await product.update(productDetails);
};

const deleteProduct = async (productId, userId) => {
    const user = await db.User.findByPk(userId);
    if (!user == 'admin') {
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
