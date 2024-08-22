import React from 'react';
import { HiOutlineDownload } from 'react-icons/hi'; // Import HiOutlineDownload icon

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Contact Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            If you have any inquiries or concerns, feel free to get in touch with me. I'm open to new opportunities and collaborations. Let's create something amazing together!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-500"><a href="mailto:bilhaleposo@gmail.com" className="text-blue-500">bilhaleposo@gmail.com</a></p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-500">+254 791 742 971</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-500">Narok & Nairobi, Kenya</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
            <div className="flex flex-col items-center space-y-2">
              <a href="https://www.instagram.com/bilhaleposo/" className="text-blue-500">Instagram</a>
              <a href="https://www.linkedin.com/in/bilha-leposo-1656392b8" className="text-blue-500">LinkedIn</a>
              <a href="https://github.com/BilhaNanetia" className="text-blue-500">GitHub</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a href="/assets/files/Resume Bilha Leposo-2.pdf" download="Resume Bilha Leposo-2.pdf" className="flex items-center justify-center text-blue-500">
            <HiOutlineDownload size="1.5rem" className="mr-2" />
            <span className="text-xl font-semibold">Download My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
