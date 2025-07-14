// Import required packages
import express from 'express';
import { signUp } from '../controllers/auth.controllers.js';


// Create router
const authRouter = express.Router();

// Sign Up route
authRouter.post('/sign-up', signUp)

export default authRouter;
