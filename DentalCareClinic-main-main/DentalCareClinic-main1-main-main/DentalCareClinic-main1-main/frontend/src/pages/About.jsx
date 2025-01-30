import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        
        <div className='text-center text-2x1 pt-10 text-gray-500'>
          <p><b>ABOUT<span className='text-gray-700 font-medium'> US</span></b></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.thing} alt=""/>
          <div className= 'flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, justo vitae luctus scelerisque, sem leo laoreet tortor, vel interdum ipsum lorem ac odio. Morbi vel magna id ipsum posuere consequat. Nullam vulputate magna a lacus sagittis viverra. Aliquam vel nunc eros. Donec semper arcu in euismod lobortis. Praesent at orci sed dui iaculis cursus a sit amet enim. Nulla augue erat, venenatis nec consequat a, eleifend eget tortor. Maecenas interdum iaculis libero, in viverra arcu porttitor nec. Vestibulum non lacinia velit, quis bibendum quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, justo vitae luctus scelerisque, sem leo laoreet tortor, vel interdum ipsum lorem ac odio. Morbi vel magna id ipsum posuere consequat. Nullam vulputate magna a lacus sagittis viverra. Aliquam vel nunc eros. Donec semper arcu in euismod lobortis. Praesent at orci sed dui iaculis cursus a sit amet enim. Nulla augue erat, venenatis nec consequat a, eleifend eget tortor. Maecenas interdum iaculis libero, in viverra arcu porttitor nec. Vestibulum non lacinia velit, quis bibendum quam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, justo vitae luctus scelerisque, sem leo laoreet tortor, vel interdum ipsum lorem ac odio. Morbi vel magna id ipsum posuere consequat. Nullam vulputate magna a lacus sagittis viverra. Aliquam vel nunc eros. Donec semper arcu in euismod lobortis. Praesent at orci sed dui iaculis cursus a sit amet enim. Nulla augue erat, venenatis nec consequat a, eleifend eget tortor. Maecenas interdum iaculis libero, in viverra arcu porttitor nec. Vestibulum non lacinia velit, quis bibendum quam.</p>
          </div>
        </div>
    </div>
  )
}

export default About