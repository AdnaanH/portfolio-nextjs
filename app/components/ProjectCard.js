import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ imgUrl, title, description}) => {
  return (
    <div className='flex h-full'>
      <div className='flex flex-col h-full'>
        <div className='rounded-t-xl relative group overflow-hidden flex-grow'>
          <Image
            src={imgUrl}
            alt={title}
            width={275}
            height={300}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='text-white rounded-b-xl bg-[#14213D] py-6 px-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#FCA311]'>{description}</p>
        </div>
      </div>
    </div>

  )
}

export default ProjectCard
