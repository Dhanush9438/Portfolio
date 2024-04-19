import React from "react";
import Js from "../assets/portfolio/js.jpg"
import google from "../assets/portfolio/google pro.png"
import es from "../assets/portfolio/es6 js.png"
import java from "../assets/Java Mastering the fundamental.png"
import jc from "../assets/Java collection.png";
import solid from "../assets/S.O.L.I.D Principles.png"


export const Certifications = () => {
  const Certifications=[
    {
      id: 1,
      src: Js,
    },
  
    {
      id: 2,
      src: google,
    },

    {
      id:3,
      src: es,
    },
    {
      id:4,
      src:java,
    },
    {
      id:5,
      src:jc,
    },
    {
      id:6,
      src:solid,
    }
    

  ];

  return (
    <div
      name="Certifications"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
          Certifications
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Certifications.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};
export default Certifications;

