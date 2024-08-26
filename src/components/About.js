import React from 'react';

const About = () => {
  const hobbies = [
    "Driving",
    "Technology",
    "Self Improvement",
    "Knowledge",
    "Philosophy",
    "Food",
    "Swimming",
    "Travelling",
    <a href="https://drive.google.com/file/d/1jaz69xPJHv32i1zirkpkiuuL2Lk9EBQg/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Pets</a>
  ];

  const books = [
    "Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin",
    "Artificial Intelligence: A Modern Approach by Stuart Russell and Peter Norvig",
    "How the Internet of Things Is Changing Our World by Vint Cerf"
  ];

  const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Alan Kay" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.", author: "George Bernard Shaw" },
    { quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", author: "Martin Luther King Jr." },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The scientist discovers a new type of material or energy and the engineer discovers a new use for it.", author: "Gordon Lindsay Glegg" }
  ];

  const education = [
    {
      institution: "Moringa School",
      qualification: "Full Stack Web Development; Python with Flask,React, JavaScript, HTML, CSS"
    },
    {
      institution: "LinkedIn Courses",
      courses: [
        "Learning Django",
        "TeamWork Foundations",
        "Creating and Giving Business Presentations",
        "Problem-Solving Techniques",
        "Leading Yourself",
        "Communication Foundations",
        "Design Thinking: Understanding the Process",
        "Project Management Foundations"
      ]
    },
    {
      institution: "CAPYEI, MasterCard Foundation",
      qualification: "Auto-Mobile Engineering"
    }
  ];

  return (
    <section id="about" className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
      <p>
        I am a beginner Software Developer with a background in Auto-Mobile Engineering. I have a passion for the automobile sector and studied software development to apply these skills in the automobile industry.
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Education</h3>
      <ul className="list-disc list-inside ml-4">
        {education.map((edu, index) => (
          <li key={index} className="mb-2">
            <strong>{edu.institution}</strong>
            {edu.qualification && <div>{edu.qualification}</div>}
            {edu.courses && (
              <ul className="list-inside ml-4">
                {edu.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Interests/Hobbies</h3>
      <ul className="list-disc list-inside ml-4">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Favorite Books</h3>
      <ul className="list-disc list-inside ml-4">
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
      <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">Philosophical Quotes</h3>
      <ul className="list-disc list-inside ml-4">
        {quotes.map((quote, index) => (
          <li key={index} className="mb-2">
            "{quote.quote}" - <strong>{quote.author}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
