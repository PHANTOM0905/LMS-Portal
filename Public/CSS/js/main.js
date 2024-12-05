document.addEventListener("DOMContentLoaded", () => {
    const courses = [
      {
        title: "Artificial Intelligence",
        description: "Explore the fundamentals of AI, including machine learning and neural networks.",
        image: "https://via.placeholder.com/250x150?text=AI+Course"
      },
      {
        title: "Cloud Computing",
        description: "Learn the basics of cloud services like AWS, Azure, and Google Cloud.",
        image: "https://via.placeholder.com/250x150?text=Cloud+Computing"
      },
      {
        title: "Programming in C",
        description: "Master the basics of C programming, one of the most powerful languages.",
        image: "https://via.placeholder.com/250x150?text=C+Programming"
      },
      {
        title: "Basics of Python",
        description: "Start your journey with Python, one of the most beginner-friendly languages.",
        image: "https://via.placeholder.com/250x150?text=Python+Basics"
      },
      {
        title: "Data Structures and Algorithms",
        description: "Learn how to solve complex problems with efficient algorithms.",
        image: "https://via.placeholder.com/250x150?text=DSA+Course"
      },
      {
        title: "Web Development",
        description: "Build modern websites using HTML, CSS, JavaScript, and more.",
        image: "https://via.placeholder.com/250x150?text=Web+Development"
      },
      {
        title: "Database Management Systems",
        description: "Understand how to design, query, and manage databases.",
        image: "https://via.placeholder.com/250x150?text=DBMS+Course"
      },
      {
        title: "Cybersecurity Fundamentals",
        description: "Learn how to protect systems and data from cyber threats.",
        image: "https://via.placeholder.com/250x150?text=Cybersecurity"
      }
    ];
  
    const courseList = document.getElementById("course-list");
    courses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
      courseDiv.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
      courseList.appendChild(courseDiv);
    });
  });
  