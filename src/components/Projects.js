import React from 'react';
import '../styles/Projects.css'; 

const Projects = () => {
  const projects = [
    {
      title: "BeeMoto Sales and Inventory Tracker",
      image: '/assets/images/Screenshot from 2024-08-25 18-17-08.png',
      description: "A full-stack web application for managing sales and inventory of motorbike spares.",
      github: "https://github.com/BilhaNanetia/sales-and-inventory",
      demo: "https://drive.google.com/file/d/1bvFqGCUUZ5P40bhQubbNXhXGV5maxzCh/view?usp=sharing",
      details: [
        "Frontend: Developed a responsive user interface using HTML5, JavaScript, and Tailwind CSS.",
        "Backend: Utilized Python, Flask, and SQLite.",
        "Features: Implemented user authentication, sales management, inventory tracking, and reporting."
      ]
    },
    {
      title: "Yum Kingdom",
      image: '/assets/images/Screenshot from 2024-07-26 16-15-51.png',
      description: "A full-stack web application for users to share, discover, and manage recipes.",
      github: "https://github.com/BilhaNanetia/phase-4-final-project",
      demo: "https://drive.google.com/file/d/1Ev3CyWQtBCKbLhFLde_nAgTSq773C117/view?usp=sharing",
      details: [
        "Frontend: React (JavaScript Library).",
        "Backend: Flask (Python Framework).",
        "Authentication: JWT (JSON Web Token).",
        "Features: User authentication, browsing recipes from an External API, user profile management."
      ]
    },
    {
      title: "Education System CLI Application",
      image: '/assets/images/Screenshot from 2024-07-26 16-08-40.png',
      description: "Developed a Python command-line application (CLI) for managing schools, courses, and students.",
      github: "https://github.com/BilhaNanetia/education-system-phase-3-final-project",
      demo: "https://drive.google.com/file/d/1v59_AyXN6nmFebA9GKmI6h7vIxyyEVbr/view?usp=sharing",
      details: [
        "Implemented CRUD (Create, Read, Update, Delete) operations for all entities.",
        "Utilized Object-Relational Mapping (ORM) to interact with a SQLite database, ensuring data persistence.",
        "Technical Skills: Python, SQLite, ORM (Object-Relational Mapping)."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">Technical Projects</h2>
      <div className="projects-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image w-full h-auto mb-4 rounded-md"
            />
            <p className="mb-2">{project.description}</p>
            <ul className="list-disc list-inside ml-4 mb-4">
              {project.details.map((detail, i) => (
                <li key={i} className="mb-1">{detail}</li>
              ))}
            </ul>
            <div className="text-center">
              <a href={project.github} className="text-blue-500 hover:underline mr-2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              {' | '}
              <a href={project.demo} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
