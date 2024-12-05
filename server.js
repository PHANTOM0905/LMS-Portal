const express = require('express');
const app = express();
const path = require('path');

// Set the view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for courses
const courses = [
  { id: 1, title: "Artificial Intelligence", description: "Explore AI fundamentals", image: "/images/Artificial%20Intelligence.jpeg", content: "Learn the basics of AI and machine learning." },
  { id: 2, title: "Cloud Computing", description: "Learn cloud services like AWS", image: "/images/Cloud%20Computing.png", content: "Get hands-on experience with cloud platforms like AWS and Azure." },
  { id: 3, title: "Programming in C", description: "Master C programming basics", image: "/images/C%20Programming.jpg", content: "Learn the basics of C programming and memory management." },
  { id: 4, title: "Basics of Python", description: "Get started with Python", image: "/images/Python.jpg", content: "Explore Python programming for beginners and develop small projects." },
  { id: 5, title: "Data Structures and Algorithms", description: "Learn efficient problem-solving techniques", image: "/images/DSA.jpg", content: "Understand arrays, linked lists, trees, and algorithms for problem-solving." },
  { id: 6, title: "Web Development", description: "Build modern websites", image: "/images/WebDev.jpg", content: "Learn HTML, CSS, JavaScript, and create interactive web pages." },
  { id: 7, title: "Database Management Systems", description: "Understand database design and querying", image: "/images/DBMS.jpeg", content: "Learn SQL and design databases using relational models." },
  { id: 8, title: "Cybersecurity Fundamentals", description: "Protect systems from cyber threats", image: "/images/CyberSecurity.jpg", content: "Learn basic cybersecurity practices and defensive techniques." },
  { id: 9, title: "Machine Learning Basics", description: "Dive into ML algorithms and models", image: "/images/ML.jpg", content: "Learn the foundational algorithms and techniques in machine learning." }
];

// Route to render the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Route for the dashboard page, passing courses data
app.get('/dashboard', (req, res) => {
  res.render('dashboard', { courses });
});

// Route for individual course details
app.get('/course/:id', (req, res) => {
  const courseId = parseInt(req.params.id);  // Ensure courseId is an integer
  const course = courses.find(c => c.id === courseId);  // Find course by ID

  if (course) {
    res.render('course-details', { course });  // Render course-details page
  } else {
    res.status(404).send("Course not found");  // If course not found, send 404
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
