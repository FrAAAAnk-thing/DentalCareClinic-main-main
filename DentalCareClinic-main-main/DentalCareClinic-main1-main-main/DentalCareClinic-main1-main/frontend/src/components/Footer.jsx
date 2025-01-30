import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-white-800 text-black py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6'>
        
        {/* Left Section */}
        <div className='md:w-1/3 mb-6 md:mb-0'>
          <img src={assets.logo} alt="logo" className='w-32 mb-4' />
          <p className='text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        {/* Center Section */}
        <div className='md:w-1/3 mb-6 md:mb-0'>
          <p className='text-lg font-semibold mb-4'>COMPANY</p>
          <ul className='space-y-2'>
            <li><a href="#" className='hover:underline'>Home</a></li>
            <li><a href="#" className='hover:underline'>About Us</a></li>
            <li><a href="#" className='hover:underline'>Contact Us</a></li>
            <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div className='md:w-1/3'>
          <p className='text-lg font-semibold mb-4'>GET IN TOUCH</p>
          <ul className='space-y-2'>
            <li>+1-212-456-7890</li>
            <li>randomemailfortest@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='bg-white-700 text-center py-4 mt-10'>
        <p className='text-sm'>Copyright © 2025 Capstone II - All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer