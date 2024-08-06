module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      total_orders: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {timestamps: true},
);
    return Order;
  };
  