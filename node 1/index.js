import express from 'express';
import userRoutes from './routes/users.js';
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });