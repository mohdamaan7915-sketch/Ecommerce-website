import React from 'react'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}/>
    </div>
    <div className='my-10 fle fle-col'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>asdfghhjkkl;mmnvcxzweertyuiiii</p>
       <p>bbggvfftyuiiuyrreewavvbnmklpojhgds</p>
       <b className='text-gray-800'>Our mission</b>
       <p>Log in to WhatsApp Web for simple, reliable and private messaging on your desktop. Send and receive messages and files with ease, all for free.
       </p> 
      </div>
    </div>
    <div classname='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>shop Online for Fashion, Beauty, Footwear, Accessories, Home & Kitchen products at the lowest prices.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Shop from top brands, earn exclusive rewards, and track your packages all in one place. Now available on iOS, Android, and web.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Shop the latest trends and stay connected to your favorite brands, all in one place. Turn on push-notifications so you never miss a sale.</p>
      </div>

    </div>
    <NewsLetterBox/>
    </div>

  )
}

export default About
