import express from 'express';
import registerUser from '../Controllers/RegisterUser.js';
import { loginUser, logOut }  from '../Controllers/loginLogoutUser.js';
const router = express.Router();
//Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
export default router; 
