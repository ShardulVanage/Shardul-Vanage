import React from 'react'
import HeroImage from '../heroImage.png'
import {BsArrowDown,BsArrowReturnRight} from 'react-icons/bs'


const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white ">
                    I'm a Frontend Developer
                    </h2>
               
               <div className=' rounded-2xl backdrop-blur-sm bg-white/30 ... '>

                <p className="text-gray-400 py-4 max-w-md m-2">
                Hi I'm Shardul, a Frontend Web Developer who loves building webpages and Software products.
                 I'd love to combine my passion for learning and developing with my software development 
                 skills to continue building personalized products 
                </p>
               </div>
                <div>
                    <button>
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                        <BsArrowReturnRight  size={25} className="ml-1"/>

                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="myprofile" className="rounded-2xl mx-auto w-2/3 md:w-full "/>
            </div>
        </div>
    </div>
  )
}

export default Home