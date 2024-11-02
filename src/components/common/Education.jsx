// src/components/Education.js
import React from "react";
const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "X",
      institution: "ABC High School",
      year: "2015",
    },
    {
      id: 2,
      degree: "XII",
      institution: "XYZ College",
      year: "2017",
    },
    {
      id: 3,
      degree: "B.Tech",
      institution: "LMN University",
      year: "2021",
    },
  ];

  return (
    <section className="bg-gray-800 text-white px-5 py-32" id="education">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-indigo-600 pb-2">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-gray-700 p-5 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{edu.degree}</h3>
              <p className="text-lg">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
