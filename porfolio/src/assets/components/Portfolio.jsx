 import React from "react";
 import decentragram from '../portfolio/DECTRAGRAM DD.jpg';
 import e_commerce from '../portfolio/e_commerce App.jpg';
 import food_delivery from '../portfolio/FD.jpg';
 import foodiz from '../portfolio/Foodz.jpg';
 import recipe_io from '../portfolio/RECIPE.IO.png';
 import video_game from '../portfolio/VIDEOgAME UI.jpg'

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: decentragram,
        text:"Decentragram"
      },
      {
        id: 2,
        src: foodiz,
        text:"FoOdie website"
      },
      {
        id: 3,
        src: recipe_io,
        text:"Recipe.io"
      },
      {
        id: 4,
        src: video_game,
        text:"Video Game Info App"
      },
      {
        id: 5,
        src: food_delivery,
        text:"Online food delivery App"
      },
      {
        id: 6,
        src: e_commerce,
        text: "E_Commerce_Catelog_App"
      },
    ];
  
    return (
      <div
        name="portfolio"
        className='w-full h-screen bg-gradient-to-t from-[#000a04] to-[#0a192f] text-white'
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, text }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg backdrop-blur-sm bg-white/30 ...">
                <img
                    
                  src={src}
                  alt=""
                  className="rounded-md duration-200 scale-90 hover:scale-100 overflow-visible ..."
                />
                <div className="flex flex-col items-center justify-center">
                  
                  <div className="shadow-inner ...">
                  <button className="w-1/2 px-6 py-2 m-3 mt-4 duration-200 hover:scale-105 hover:text-pink-500">
                    Code
                  </button>
                  </div>

                  <h2 className="mb-2">{text}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;