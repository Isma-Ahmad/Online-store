const userService = require('../services/userServices');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
   try {
           const user = await userService.registerUser(req.body);
           res.status(201).json(user);
        } catch (error) {
             next(error);
         }
   
};


const login = async (req, res) => {
  try{
        const user = await userService.loginUser(req.body.email, req.body.password);
        const token = jwt.sign({ userId: user.user_id }, 'abc@123', { expiresIn: '1h' });
        res.status(200).json({ token });
  }catch (error) {
        next(error);
    }
};


const updateUser = async (req, res) => {
  try{
        const user = await userService.updateUser(req.user.user_id, req.body);
        res.status(200).json(user);
  }catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    updateUser
};