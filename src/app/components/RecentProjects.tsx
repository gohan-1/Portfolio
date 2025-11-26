import React from 'react'
import { projects } from '../data'
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-60 w-full text-center' id="projects">
      <h1 className='text-4xl font-bold text-white'> 
        A small selection of{' '}
        <span className="font-bold text-purple-400">recent projects</span>
      </h1>

      <div className='flex flex-wrap items-center py-20 justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div 
            key={id} 
            className='sm:h-[41rem] h-[23rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center w-[80vw]'
          >
            <PinContainer title={title} href={link}>
              
              <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[28vh] w-[80vw] overflow-hidden lg:h-[30vh]'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="./bg.png" alt="bg.img" className='w-full h-full object-cover' />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0 w-auto max-h-full object-contain'/>
              </div>

              <h1 className='font-bold lg:text-2xl md:text-xl text-amber-50 text-base line-clamp-1'>
                {title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-amber-50 text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>

                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div 
                      key={index}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{ transform: `translate(-${index * 10}px)` }}
                    >
                      <img src={icon} alt='icon' className='p-2' />
                    </div>
                  ))}
                </div>

                <div className='flex text-purple-200 justify-center items-center'>
                  <p className='lg:text-xl md:text-xs text-sm text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' />
                </div>

              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
