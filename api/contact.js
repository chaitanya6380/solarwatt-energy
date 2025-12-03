import mongoose from 'mongoose';

const mongoUri =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  'mongodb+srv://chaitustar13_db_user:mv6YJ4SQyFpjuMFw@cluster0.r6ieqrx.mongodb.net/?appName=Cluster0';

if (!mongoUri) {
  console.error('MONGO_URI is not set in environment variables.');
}

let cached = global._mongoConnection;

if (!cached) {
  cached = global._mongoConnection = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        dbName: 'solarwatt-energy',
      })
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bill: { type: Number, required: true },
  },
  { timestamps: true }
);

const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  if (!mongoUri) {
    return res.status(500).json({
      success: false,
      message: 'Form is not configured correctly. Please contact the site administrator.',
    });
  }

  try {
    await connectToDatabase();

    const { name, email, phone, bill } = req.body || {};

    if (!name || !email || !phone || typeof bill === 'undefined') {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const numericBill = Number(bill);

    if (Number.isNaN(numericBill)) {
      return res.status(400).json({ success: false, message: 'Bill must be a number.' });
    }

    const quote = await Quote.create({ name, email, phone, bill: numericBill });

    return res.status(201).json({
      success: true,
      message: 'Quote saved successfully.',
      id: quote._id,
    });
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while submitting the form. Please try again.',
    });
  }
}


