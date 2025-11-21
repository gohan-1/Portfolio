import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '../data'

const Client = () => {
  return (
    <div className='  w-full  text-center' id="testimonials">
      <h1 className='text-4xl font-bold  text-white'> 
        Kind words from 
      <span className="font-bold text-purple-400" >  satisfied clients</span>
       </h1>

       <div className='flex py-20 flex-col item-center max-lg:mt-10 '>

            <InfiniteMovingCards  items={testimonials} direction='right' speed='slow'/>
    
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
            {companies.map(({ id, img, name, nameImg }) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img src={img} alt={name} className="md:w-10 w-5" />
                <h1 className='text-4xl font-bold text-white'> {nameImg} </h1> /
                </div>
            ))}
        </div>
    </div>
  )
}

export default Client