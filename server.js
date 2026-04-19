const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS, Images) from this directory
const path = require('path');
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend.html'));
});

// MongoDB Connection
const MONGODB_URI = 'mongodb://localhost:27017/trade';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB locally!'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Database Model
const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// API Endpoint for Newsletter Signup
app.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        return res.status(201).json({ message: 'Successfully joined the Inner Circle!' });
    } catch (error) {
        // Handle duplicate emails gracefully
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Email is already subscribed.' });
        }
        res.status(500).json({ error: 'Server error saving email.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Bharadwaj Learning Lab Server running on http://localhost:${PORT}`);
});
