import React from 'react'
import {assets} from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center'>
      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5 '/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 '/>
        <p className='font-semibold'>7 day return policy</p>
        <p className='text-gray-400'>We offer 7 day return policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5 '/>
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>We provide 2487 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
