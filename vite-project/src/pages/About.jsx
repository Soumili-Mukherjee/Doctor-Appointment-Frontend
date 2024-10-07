/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div>
        <p>ABOUT <span>US</span></p>
      </div>
      <div>
        <img src= {assets.about_image} alt="" />
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default About