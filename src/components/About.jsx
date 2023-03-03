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
        <p className="text-xl mt-20">
        Hey, I am Dhanush B. I'm a self-taught full-stack web developer specializing in the MERN stack.
        I write optimized code that makes the web app faster and more scalable. 
        Frontend Developer who focuses on writing clean, elegant and efficient code.

        </p>

        <br />

        <p className="text-xl">
          My job is to develop a website from the scratch and also updating an already developed website. 
          I read a lot and check with currently trending websites, in order to make your job easier. 
          I've experiences with various clients, so i can understand your requirements even if you didnt have any experiences about websites. 
          I am excited to continue developing my skills and gaining valuable experiences as an student.
        </p>
      </div>
    </div>
  );
};

export default About;
