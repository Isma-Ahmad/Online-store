const jwt = require('jsonwebtoken');
const db = require('../models');


const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, 'abc@123');
        const user = await db.User.findByPk(decoded.userId);
        if (!user) return res.status(401).json({ error: 'User not found' });

        req.user = user; 
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticate;
