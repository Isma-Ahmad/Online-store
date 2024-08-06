module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {timestamps: true}, 
);
    return Product;
  };
  