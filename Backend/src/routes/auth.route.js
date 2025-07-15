// Import required packages
import express from 'express';
import  {signOut, signUp, signIn} from '../controllers/auth.controllers.js';
import auth from '../middleware/auth.js';


// Create router
const authRouter = express.Router();

// Sign Up route post /api/auth/sign-up
authRouter.post('/sign-up', signUp);

// Sign In route post /api/auth/sign-in
authRouter.post('/sign-in', signIn);

// post /api/auth/logout
authRouter.get('/sign-out', auth, signOut);




export default authRouter;
