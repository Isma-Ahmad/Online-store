const express= require('express');
const app = express();
const db = require('./models');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const PORT = 8000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/product', productRoutes);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log('Server is running on port 8000');
    });
  });
  
    // app.listen(PORT, ()=> console.log(`Server is start on PORT no ${PORT}`));