const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        total_orders: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, { timestamps: true });

    return Order;
};
