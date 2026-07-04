const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // HARDCODED FIX: Directly point to your local MongoDB port and database name
    const conn = await mongoose.connect('mongodb://localhost:27017/course_catalog_db');
    console.log(`🚀 MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;