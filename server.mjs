import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://chaitustar13_db_user:mv6YJ4SQyFpjuMFw@cluster0.r6ieqrx.mongodb.net/?appName=Cluster0';

mongoose
  .connect(mongoUri, {
    dbName: 'solarwatt-energy',
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

// Schema & Model for contact/quote requests
const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bill: { type: Number, required: true },
  },
  { timestamps: true }
);

const Quote = mongoose.model('Quote', quoteSchema);

// API route to receive form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, bill } = req.body;

    if (!name || !email || !phone || !bill) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const quote = await Quote.create({ name, email, phone, bill });

    return res.status(201).json({
      success: true,
      message: 'Quote saved successfully.',
      id: quote._id,
    });
  } catch (err) {
    console.error('Error saving quote:', err);
    return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// Basic health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


