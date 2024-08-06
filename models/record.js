module.exports = (sequelize, DataTypes) => {
    const Record = sequelize.define('Record', {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {timestamps: true},
);
    return Record;
  };
  