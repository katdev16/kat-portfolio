import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Voice File Manger (Python)</h3>
        <p>
          A file mangerment system using your voice 
        </p>
        <a href="https://github.com/katdev16/file-orgernizer">View on GitHub</a>
      </div>
      <div className="project">
        <h3>Calculator (Javascript)</h3>
        <p>
          Developed a calculator program using html css and Javascript.
        </p>
        <a href="https://github.com/katdev16/calculator">View on GitHub</a>
      </div>
      <div className="project">
        <h3>To-do list (React)</h3>
        <p>
          Developed a todo list program using React.
        </p>
        <a href="https://github.com/katdev16/react-to-do-list">View on GitHub</a>
      </div>
    </section>
  );
};

export default Projects;
