import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>WeShare App</h3>
        <p>
          A full-stack social sharing platform using Java and Spring Boot, with Thymeleaf for the frontend and MySQL for
          the database.
        </p>
        <a href="https://github.com/yourusername/weshare-app">View on GitHub</a>
      </div>
      <div className="project">
        <h3>RobotWorld API</h3>
        <p>
          Developed an API for a robot simulation project using Java, Javalin, and PostgreSQL.
        </p>
        <a href="https://github.com/yourusername/robotworld-api">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
