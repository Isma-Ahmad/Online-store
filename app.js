const express= require('express');
const app = express();
const db = require('./models');
const PORT = 8000;

app.use(express.json());


db.sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on PORT no ${PORT}`);
    });
  }).catch(err => {
    console.error(err);
  });

// app.listen(PORT, ()=> console.log(`Server is start on PORT no ${PORT}`));