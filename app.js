const express= require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const recordRoutes = require('./routes/recordRoutes');

const PORT = 9000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/record', recordRoutes);



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port 9000');
    });
  });
  
// app.listen(PORT, ()=> console.log(`Server is start on PORT no ${PORT}`));