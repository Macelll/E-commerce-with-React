import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Rent-A-God, where ancient power meets modern blessings! Inspired by the mighty gods of mythology, we bring you divine favors and decrees crafted to enhance your journey. Whether you seek wisdom, strength, love, or fortune, our carefully curated selections channel the essence of legendary deities.</p>
          <p>At Rent-A-God, we believe that mythology is more than just stories—it's a connection to timeless forces that shape our world. Each product is designed with purpose, inspired by the gods who once ruled Olympus, the Underworld, and beyond.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Join us in embracing the divine and unlocking your own legendary path. Your destiny awaits!</p>
        </div>
      </div>
      <div className='text-xl py-4 justify-center-flex'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'> Carefully selected for over millenias</p>
        </div>
        <div className='border flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Divinely Approved</b>
          <p className='text-gray-600'>Each item carries the favor (or decree) of the gods</p>
        </div>
        <div className='border flex-1 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Immortal Customer Support</b>
          <p className='text-gray-600'>We may not be omnipresent, but we're pretty close.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About;