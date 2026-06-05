import express from 'express';
import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://127.0.0.1:27017/octofit-tracker';
const PORT = 8000;

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send({ message: 'Welcome to OctoFit Tracker API' });
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB at', MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Backend server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
