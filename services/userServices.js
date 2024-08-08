const bcrypt = require('bcryptjs');
const db = require('../models');


const registerUser = async (userData) => {
    
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await db.User.create({ ...userData, password: hashedPassword });
        return user;
   
};


const loginUser = async (email, password) => {
 
        const user = await db.User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        return user;
   
};


const updateUser = async (userId, updatedData) => {
  
        const user = await db.User.findByPk(userId);
        if (!user) throw new Error('User not found');

       
        if (updatedData.password) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
        }

        return await user.update(updatedData);
   
};

module.exports = {
    registerUser,
    loginUser,
    updateUser
};