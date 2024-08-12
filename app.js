const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const recordRoutes = require('./routes/recordRoutes');
const errorHandler = require('./middleware/errorMiddleware')
const path = require('path');
const PORT = 9000;

app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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