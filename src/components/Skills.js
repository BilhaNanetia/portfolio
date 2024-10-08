import React from 'react';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'JavaScript',
      details: 'Experienced in modern JavaScript (ES6+), including concepts like asynchronous programming, and DOM manipulation.'
    },
    {
      name: 'Python',
      details: 'Proficient in Python for server-side web development.'
    },
    {
      name: 'React',
      details: 'Skilled in building dynamic and responsive user interfaces with React, utilizing hooks, context API, and component-based architecture.'
    },
    {
      name: 'Flask',
      details: 'Experienced in developing backend APIs with Flask, including user authentication, RESTful APIs, and integration with databases.'
    },
    {
      name: 'Django',
      details: 'Proficient in Django for building robust and scalable web applications with an emphasis on ORM, templating, and security.'
    },
    {
      name: 'HTML',
      details: 'Proficient in HTML5 for creating structured and semantic web content.'
    },
    {
      name: 'CSS',
      details: 'Experienced in CSS3, including Flexbox, Grid, and responsive design techniques.'
    },
    {
      name: 'Git',
      details: 'Proficient in version control using Git, including branching, merging, and collaborating on projects using platforms like GitHub.'
    },
    {
      name: 'SQLAlchemy',
      details: 'Experienced in using SQLAlchemy for database management and ORM (Object-Relational Mapping) in Python applications.'
    },
    {
      name: 'Tailwind CSS',
      details: 'Skilled in using Tailwind CSS for utility-first styling, creating custom designs with ease and maintaining a responsive layout.'
    }
  ];

  const otherSkills = [
    {
      name: 'Auto-Mobile Engineering',
      details: 'Experienced in motorbike diagnostics and maintenance. Knowledgeable in motorbike systems and components, including engines, transmissions, and electronic systems.'
    },
    {
      name: 'Auto Mobile Sales',
      details: 'Experienced in sales strategies, customer relationship management, and product knowledge.'
    }
  ];

  return (
    <section id="skills" className="p-6">
      <h2 className="text-3xl font-semibold mb-4 text-center">Technical Skills</h2>
      <ul className="list-disc list-inside space-y-2">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="text-lg">
            <strong>{skill.name}:</strong> {skill.details}
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-semibold mb-4 mt-6 text-center">Other Skills</h2>
      <ul className="list-disc list-inside space-y-2">
        {otherSkills.map((skill, index) => (
          <li key={index} className="text-lg">
            <strong>{skill.name}:</strong> {skill.details}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
