const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 4000;
const cors = require('cors');
app.use(cors());

app.use(express.json());
   const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/SkyTech-Computers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a route to handle form submissions
app.post('/insert', async (req, res) => {
  try {
    // Extract data from the request body
    const { userName, userEmail, userMessage } = req.body;

    // Save data to MongoDB using Mongoose
    // (Make sure you've connected to your MongoDB instance)
    const newUser = new User({ userName, userEmail, userMessage });
    await newUser.save();

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
