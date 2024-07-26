import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <div className="mb-4">
        <h3 className="text-2xl font-semibold">AutoMobile Sales Associate</h3>
        <p className="italic">Demwas Motorbikes, Narok</p>
        <p>2022 – 2023</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Kept records of all the sales and inventory.</li>
          <li>Ensured the store was well stocked.</li>
          <li>Resolved customer queries using active listening and problem-solving skills.</li>
          <li>Used open-ended questioning to understand customer needs and recommend appropriate products.</li>
          <li>Responded to customer complaints, diffusing tension and reporting feedback to supervisors for service delivery improvement.</li>
          <li>Advised customers on current company products and services available, tailoring advice to suit customers' needs.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
