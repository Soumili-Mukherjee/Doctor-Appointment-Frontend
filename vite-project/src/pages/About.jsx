/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className= 'w-full md:max-w-[360px]' src= {assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'> 
          <p>Welcome to prescripto,your trusted partner in managing your healthcare needs convaninently and effeciently.At prescripto we understand  the challenge individual scheduling doctor appointments and managing their health records  </p>
          <p>We are a team of passionate professionals with a background in healthcare and technology. Our goal is to create a seamless digital experience for doctors and patients, enabling them to connect anytime, anywhere. Whether you are a patient looking for convenient access to medical care or a doctor seeking to provide better care to your patients, our platform is designed with your needs in mind. </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We believe that technology can transform healthcare by making it more efficient, accessible, and patient-centered. Our vision is to build a digital ecosystem that empowers patients to take control of their health while giving doctors the tools they need to provide exceptional care.

Thank you for choosing our platform. Together, we can create a healthier and more connected world.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
      <p>Why <span className='text-gray-700 font-semibold'></span>Choose Us</p>
           
    
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>Convanience:</b>
          <p>Access to a network of trusted healthcare professionals in uour area.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of the health.</p>

        </div>
      </div>
     
    </div>
  )
}

export default About