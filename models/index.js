const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize("Online_Store", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
  });

const db = {};


db.User = require('./user')(sequelize, DataTypes);
db.Product = require('./product')(sequelize, DataTypes);
db.Order = require('./order')(sequelize, DataTypes);
db.Record = require('./record')(sequelize, DataTypes);


db.User.hasMany(db.Order, { foreignKey: 'user_id' });
db.Order.belongsTo(db.User, { foreignKey: 'user_id' });

db.Product.hasMany(db.Record, { foreignKey: 'product_id' });
db.Record.belongsTo(db.Product, { foreignKey: 'product_id' });

db.Order.hasMany(db.Record, { foreignKey: 'order_id' });
db.Record.belongsTo(db.Order, { foreignKey: 'order_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
