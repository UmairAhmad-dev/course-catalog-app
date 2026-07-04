const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  level: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  duration: { type: String, required: true },
  imageUrl: { type: String, required: true },
  instructor: {
    name: { type: String, required: true },
    avatar: { type: String, required: true }
  },
  description: { type: String, required: true },
  syllabus: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);