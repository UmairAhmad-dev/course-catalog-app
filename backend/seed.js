const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course.js');

dotenv.config();

const courses = [
  {
    title: "Intro to Web Development",
    category: "Web",
    level: "Beginner",
    duration: "6 weeks",
    imageUrl: "http://localhost:5000/uploads/web.avif",
    instructor: { name: "Alex Mercer", avatar: "https://i.pravatar.cc/150?img=33" },
    description: "Learn the foundational blocks of the web. Master HTML5, CSS3, modern Flexbox/Grid layouts, and JavaScript basics to launch your frontend journey.",
    syllabus: ["HTML5 Semantics & Structure", "CSS3 Layouts & Responsive Design", "JavaScript Variables, Functions & DOM Manipulation"]
  },
  {
    title: "Python for Data",
    category: "Data & AI",
    level: "Beginner",
    duration: "8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    instructor: { name: "Dr. Sarah Jenkins", avatar: "https://i.pravatar.cc/150?img=47" },
    description: "Step into data science. Understand core Python syntax, control structures, and essential data libraries used by analytical teams globally.",
    syllabus: ["Python Programming Fundamentals", "Data Manipulation with Pandas & NumPy", "Data Visualization using Matplotlib & Seaborn"]
  },
  {
    title: "React Fundamentals",
    category: "Web",
    level: "Intermediate",
    duration: "5 weeks",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    instructor: { name: "Umair Ahmad", avatar: "https://i.pravatar.cc/150?img=68" },
    description: "Build robust, component-driven single page applications. Understand state tracking, structural hooks, client-side routing, and external API requests.",
    syllabus: ["JSX & Component Architecture", "State Management (useState, useEffect)", "React Router DOM & Context API"]
  },
  {
    title: "Mobile Apps with Flutter",
    category: "Mobile",
    level: "Intermediate",
    duration: "7 weeks",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
    instructor: { name: "Ch. Uzair", avatar: "https://i.pravatar.cc/150?img=12" },
    description: "Develop stunning cross-platform native mobile applications for iOS and Android simultaneously from a single shared Dart codebase.",
    syllabus: ["Dart Programming Essentials", "Flutter Widgets Hierarchy & Layouts", "State Management & Firebase Integration"]
  },
  {
    title: "Machine Learning Basics",
    category: "Data & AI",
    level: "Advanced",
    duration: "10 weeks",
    imageUrl: "http://localhost:5000/uploads/machinelearning.jpeg",
    instructor: { name: "Prof. Alan Turing", avatar: "https://i.pravatar.cc/150?img=60" },
    description: "Dive deep into modern artificial intelligence. Implement regression analysis models, classification structures, and predictive clustering models.",
    syllabus: ["Supervised vs Unsupervised Learning", "Linear & Logistic Regression Models", "Evaluating Model Accuracy & Tuning Parameters"]
  },
  {
    title: "UI/UX Design 101",
    category: "Design",
    level: "Beginner",
    duration: "4 weeks",
    imageUrl: "http://localhost:5000/uploads/ui.avif",
    instructor: { name: "Sophia Rose", avatar: "https://i.pravatar.cc/150?img=49" },
    description: "Master user-centric digital interfaces. Learn wireframing frameworks, responsive accessibility models, and professional Figma layout prototyping.",
    syllabus: ["User Research & Information Architecture", "Wireframing & High-Fidelity Prototyping in Figma", "UI Visual Hierarchies & Component Design"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Course.deleteMany();
    console.log('🗑️ Existing courses cleared...');
    await Course.insertMany(courses);
    console.log('🌱 Database seeded with rich course data!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding Error: ${error.message}`);
    process.exit(1);
  }
};

seedDB();