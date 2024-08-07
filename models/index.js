const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("Store", "postgres", "1234", {
    host: "localhost",
    dialect: "postgres"
});

const db = {};

db.User = require('./user')(sequelize);
db.Product = require('./product')(sequelize);
db.Order = require('./order')(sequelize);
db.Record = require('./record')(sequelize);


db.User.hasMany(db.Order, { foreignKey: 'user_id' });
db.Order.belongsTo(db.User, { foreignKey: 'user_id' });

db.Product.hasMany(db.Record, { foreignKey: 'product_id' });
db.Record.belongsTo(db.Product, { foreignKey: 'product_id' });

db.Order.hasMany(db.Record, { foreignKey: 'order_id' });
db.Record.belongsTo(db.Order, { foreignKey: 'order_id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
