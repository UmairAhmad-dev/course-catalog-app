# 🎓 Full-Stack Course Catalog Application

A modern, highly responsive MERN full-stack web application that allows users to seamlessly browse, search, filter, and sort an interactive directory of professional courses. Data flows dynamically from a local MongoDB cluster and is managed using a robust Express API engine, with optimized asset rendering served directly from the backend server repository.

## 🚀 Key Production Features

- **Live Database Streaming:** Replaced simulated state mockups with direct database connectivity pulling live schema entities from MongoDB.
- **Dynamic Search & Filtering:** Live, real-time filtering of courses by title matching and specific category classification via asynchronous Axios HTTP requests.
- **Advanced Numerical Sorting:** Custom utility algorithm that parses complex duration strings under the hood to accurately sort items mathematically by course length (Shortest/Longest).
- **High-Performance Local Asset Hosting:** Bypasses flaky external web image links by utilizing Express static middleware to host optimized assets (`.avif` and `.jpeg`) directly inside the local backend filesystem.
- **Graceful UI States:** Clean, professional loading animations and intuitive empty-state feedback grids complete with instant filter-reset triggers.
- **Dynamic Structural Routing:** Fully isolated page paths (`/course/:id`) with robust clean-URL layout definitions to display deep-dive breakdowns of individual course modules.

## 🏗️ Full-Stack Project Blueprint

```text
course-catalog-app/
├── backend/
│   ├── config/          # Database connection configuration (Mongoose)
│   ├── models/          # MongoDB Data Schemas
│   ├── public/uploads/  # Localized asset hosting engine (.avif / .jpeg)
│   ├── routes/          # Express API route controller paths
│   ├── seed.js          # Automation database lifecycle seeder script
│   └── server.js        # Core Express framework server initialization
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI elements (CourseCard, FilterBar)
    │   ├── pages/       # Catalog Main and Course Detail dashboards
    │   └── main.jsx     # Frontend build compiler shell configuration
