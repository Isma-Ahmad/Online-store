
const userService = require('../services/userService');



const signup = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await userService.authenticateUser(email, password);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const updatedUser = await userService.updateUser(userId, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    signup,
    login,
    updateUser
};
