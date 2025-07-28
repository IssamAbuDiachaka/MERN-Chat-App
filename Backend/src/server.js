import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import messageRouter from './routes/message.route.js';
import connectDB from './lib/db.js'
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import http from 'http';


dotenv.config();

const app = express();

const server = http.createServer(app);

// Middleware
app.use(express.json()); 
app.use(cookieParser());


//Allow frontend to com wit backend
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true, 
        }
});

// socket.io connection
io.on('connection', (socket) => {
    console.log('New client connected', socket.id);

    // join user to their own room
    socket.on('join', (userId) => {
        socket.join(userId)
    });

    // Relay a message
    socket.on('send message', (senderId, receiverId, text, avater) => {
        io.to(receiverId).emit('getMessage', {
            senderId,
            text,
            avater,
            createdAt: new Date(),
        });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected: ', socket.id)
    })
});


app.get('/', (req, res) => {
    res.send('API is runnin ...')
})

//Routes
app.use('/api/auth', authRouter); 
app.use('/api/message', messageRouter);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB();    
})