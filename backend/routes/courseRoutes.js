const express = require('express');
const router = express.Router();
const Course = require('../models/Course.js');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error fetching course directory" });
  }
});

// GET single course by MongoDB Object ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: "Course profile not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid ID format or server error" });
  }
});

module.exports = router;