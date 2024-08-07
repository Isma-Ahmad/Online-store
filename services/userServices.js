const bcrypt = require('bcryptjs');
const db = require('../models');


const registerUser = async (userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await db.User.create({ ...userData, password: hashedPassword });
        return user;
    } catch (error) {
        throw new Error('Error registering user: ' + error.message);
    }
};


const loginUser = async (email, password) => {
    try {
        const user = await db.User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        return user;
    } catch (error) {
        throw new Error('Error logging in user: ' + error.message);
    }
};


const updateUser = async (userId, updatedData) => {
    try {
        const user = await db.User.findByPk(userId);
        if (!user) throw new Error('User not found');

       
        if (updatedData.password) {
            updatedData.password = await bcrypt.hash(updatedData.password, 10);
        }

        return await user.update(updatedData);
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateUser
};
