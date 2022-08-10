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
        text:"Decentragram",
        href:"https://github.com/ShardulVanage/decentragranm"
      },
      {
        id: 2,
        src: foodiz,
        text:"FoOdie_website",
        href:"https://github.com/ShardulVanage/FoOdiz"
      },
      {
        id: 3,
        src: recipe_io,
        text:"Recipe.io",
        href:"https://github.com/ShardulVanage/recipe.io-REACT"
      },
      {
        id: 4,
        src: video_game,
        text:"Video_Game_Info_App",
        href:"https://github.com/ShardulVanage/Flutter-U-I-xx/tree/main/video_game_UI"
      },
      {
        id: 5,
        src: food_delivery,
        text:"Online_food_delivery_App",
        href:"https://github.com/ShardulVanage/Flutter-U-I-xx/tree/main/flutter_food_delivery_ui"
      },
      {
        id: 6,
        src: e_commerce,
        text: "E_Commerce_Catelog_App",
        href:"https://github.com/ShardulVanage/E-commerce-catalog_app"
      },
    ];
  
    return (
      <div
      name="portfolio"
      className="bg-gradient-to-b from-[#0a192f] to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,text,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 ">
                  {text}
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href}>

                  Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default Portfolio;