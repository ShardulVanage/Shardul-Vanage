import React from 'react'
import HeroImage from '../heroImage.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { MdOutlineKeyboardArrowRight} from 'react-icons/md'



const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-t from-black to-gray-900 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white py-5">
                    I'm a Frontend & Web3 Developer
                    </h2>
               
              

                <p className="text-gray-300 py-4 max-w-md m-2">
                Hi, I'm Shardul Vanage, a Frontend & Web3 Developer who loves building webpages and Software products.
                 I'd love to combine my passion for learning and developing with my software development 
                 skills to continue building personalized products 
                </p>
              
                <div className='py-2'>
                    <button className="group text-white w-fit px-6 py-2.5 my-2 flex item-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500 text-lg cursor-pointer ">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={23} className="ml-1 mt-1" />
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