import React from 'react'
import Image from 'next/image'

const Skills = () => {

  return (
    <section className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <Image
          src='/images/Tech-Stacks.png' 
          className="hidden sm:block"
          width={500}
          height={500} 
          alt='tech' 
      />
      <div className='text-center'>
        <h2 className='text-4xl font-bold text-white mb-4 sm:text-center'>SKILLS</h2>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">React</span>
                </div>
            </div> 
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">Bootstrap</span>
                </div>
            </div> 
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">Tailwind</span>
                </div>
            </div> 
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">Wordpress</span>
                </div>
            </div> 
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">PHP</span>
                </div>
            </div> 
            <div class="p-2 sm:w-1/2 w-full">
                <div class="bg-[#14213D] rounded flex p-4 h-full items-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                        class="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="font-medium text-[#FCA311]">MERN</span>
                </div>
            </div>    
        </div>
      </div>
    </section>
  )
}

export default Skills
