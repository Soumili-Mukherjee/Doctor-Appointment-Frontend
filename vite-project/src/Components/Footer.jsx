import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*---left---*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-grey-600 leading-6'>Lorem Ipsum is a placeholder text that's often used in design and publishing to fill space. It's a jumble of Latin words that resembles natural language, making it ideal for representing real objects. </p>

        </div>
        {/*---center---*/}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        {/*---right---*/}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-212-456-7890</li>   
                 <li>soumilimukherjee20@gmail.com</li>

                    
                    
                
            </ul>

        </div>
        </div> 
         {/*---center---*/}
        <div>
          <hr/>
          <p className='py-5 text-sm text-center'>Cpyright 2024@ Prescription All Right Reserved</p>

        </div>
    </div>
  )
}

export default Footer