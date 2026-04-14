import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:2/3 text-gray-600'>LinkedIn is an American business and employment-oriented social networking service. The platform is primarily used for professional networking and career development, as it allows jobseekers to post their CVs and employers to post their job listings</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1234567788</li>
              <li>mohdamaan7915@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copywright 2025@forever.com-All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer
