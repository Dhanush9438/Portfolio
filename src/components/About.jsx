import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
        I’m Dhanush B., a software developer with good knowledge of the MERN stack and expertise in Java, specializing in Spring and Spring Boot. I’m passionate about building scalable software solutions and dynamic web applications, driven by a commitment to continuous learning and innovation.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
