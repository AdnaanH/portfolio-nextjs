import React from 'react'
import Image from 'next/image'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section>
        <div className='grid h-screen grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-black text-center mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Hello I am <br /><span className='text-[#FCA311]'> Adnan Hamisi</span></h1>
                <p className='text-[#14213D] mb-6 text-lg lg:text-xl'>
                I am a dedicated Frontend Web Developer and UI/UX Designer
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 mb-6 bg-[#14213D] text-white hover:bg-[#FCA311]'>Hire me</button>
                    <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-[#FCA311] hover:text-black border border-[#FCA311]'>View resume</button>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-8 justify-center sm:justify-start mt-6">
                    <a href="https://github.com/AdnaanH" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-4xl text-[#14213D] hover:text-[#FCA311] mr-3 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/adnan-hamisi-637a1b161/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl text-[#14213D] hover:text-[#FCA311] mr-3 transition duration-300" />
                    </a>
                    <a href="mailto:ahamisi777@gmail.com">
                        <FaEnvelope className="text-4xl text-[#14213D] hover:text-[#FCA311] mr-3 transition duration-300" />
                    </a>
                </div>
            </div>
            <div className='col-span-5 place-self-center  mt-4 lg:mt-0'>
                <div className='rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src='/images/Hero-Image.png'
                        alt='hero image'
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default HeroSection
