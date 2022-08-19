import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full  bg-gradient-to-t from-slate-900 to-gray-800  text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
           
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>  © 2022 - Shardul Vanage | Designed By shardul vanage</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href='https://www.facebook.com/profile.php?id=100010380311176'><FaFacebook  className='hover:text-blue-700'/></a>
            <a href='https://www.instagram.com/shardul.vanage/'><FaInstagram className='hover:text-pink-600'/></a>
            <a href='https://twitter.com/shardul_vanage'><FaTwitter className='hover:text-cyan-500' /></a>
            <a href='https://www.linkedin.com/in/shardul-vanage-294823200/'><FaLinkedin className=' hover:text-blue-500'/></a>
            <a href='https://github.com/ShardulVanage'><FaGithub className='hover:text-white' /> </a>
            
        </div>
        </div>
    </div>
  )
}

export default Footer