import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import connectDB from './lib/db.js'
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


dotenv.config();


const app = express();
// Middleware
app.use(express.json()); // Allow server to understand json data
app.use(cors('*')); //Allow frontend to com wit backend
app.use(cookieParser()); // Allows server to parse cookies


app.get('/', (req, res) => {
    res.send('API is runnin ...')
})

app.use('/api/auth', authRouter); // Use authRouter for authentication routes




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB();    
})