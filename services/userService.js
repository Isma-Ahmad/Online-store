
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'your_jwt_secret_key';


const createUser = async (userData) => {
    try {
        
        const existingUser = await db.User.findOne({ where: { email: userData.email } });
        if (existingUser) {
            throw new Error('Email is already in use');
        }

       
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);

        const user = await db.User.create(userData);
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};


const authenticateUser = async (email, password) => {
    try {
        const user = await db.User.findOne({ where: { email } });
        if (user && await bcrypt.compare(password, user.password)) {
           
            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
            return { user, token };
        }
        throw new Error('Invalid email or password');
    } catch (error) {
        throw new Error('Error authenticating user: ' + error.message);
    }
};


const updateUser = async (userId, updateData) => {
    try {
        const [updated] = await db.User.update(updateData, { where: { id: userId } });
        if (updated) {
            const updatedUser = await db.User.findByPk(userId);
            return updatedUser;
        }
        throw new Error('User not found');
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

module.exports = {
    createUser,
    authenticateUser,
    updateUser
};
