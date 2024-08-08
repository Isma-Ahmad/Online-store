const db = require('../models');


const getAllOrders = async () => {

    return await db.Order.findAll();

};

const getOrder = async (orderId) => {

    const order = await db.Order.findOne({ where: { order_id: orderId } });
    if (!order) {
        throw new Error('Order not found');
    }
    return order;

};

const createOrder = async (orderData) => {

        return await db.Order.create(orderData);
   
};


const updateOrder = async (orderId, orderData) => {

        const order = await db.Order.findOne({ where: { order_id: orderId } });
        if (!order) {
            throw new Error('Order not found');
        }
        return await order.update(orderData);
   
};


const deleteOrder = async (orderId) => {

        const order = await db.Order.findOne({ where: { order_id: orderId } });
        if (!order) {
            throw new Error('Order not found');
        }
        await order.destroy();
   
};



module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders
};
