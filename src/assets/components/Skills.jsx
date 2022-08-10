import React from "react";

import flutter from "../flutter.png"
import node from "../node.png"
import solidty from "../Solidity.png"
import truffle from "../truffle.png"
import reactImage from "../react.png";
import github from "../github.png";
import tailwind from "../tailwind.png";
import python from "../python.png"

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: solidty,
      title: "Solidity",
      style: "shadow-gray-700 ",
          },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: truffle,
      title: "Truffle",
      style: "shadow-[#3d2719]",
    },
    {
      id: 7,
      src: python,
      title: "python",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-[#000000] to-gray-900 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;