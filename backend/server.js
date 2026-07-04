const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const courseRoutes = require('./routes/courseRoutes.js');


dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Add this line to make your downloaded images accessible to the browser
app.use('/uploads', express.static('public/uploads'));

// Routes Setup
app.use('/api/courses', courseRoutes);


app.get('/', (req, res) => {
  res.send('Course Catalog API Engine is running smoothly...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🎯 Server actively running on port ${PORT}`);
});