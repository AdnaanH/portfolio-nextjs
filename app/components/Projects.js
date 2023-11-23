import React from 'react'
import ProjectCard from './ProjectCard'


const ProjectList = [
    {
        id: 1,
        title: 'Countries Web Page',
        description: 'React | Bootstrap | JQUERY',
        image: '/images/image1.jpg',
        tag: ['All']
    },
    {
        id: 2,
        title: 'Easybank Landing Page',
        description: 'React | Tailwind',
        image: '/images/image2.jpg',
        tag: ['All']
    },
    {
        id: 3,
        title: 'Interactive Card Details',
        description: 'HTML | CSS | Javascript',
        image: '/images/image3.jpg',
        tag: ['All']
    },
    {
        id: 4,
        title: 'Tip Calculator',
        description: 'HTML | CSS | Javascript',
        image: '/images/image4.jpg',
        tag: ['All']
    },
    {
        id: 5,
        title: 'Intro Section',
        description: 'HTML | CSS | Javascript',
        image: '/images/image5.jpg',
        tag: ['All']
    },
    {
        id: 6,
        title: 'Interactive-rating',
        description: 'HTML | CSS | Javascript',
        image: '/images/image6.jpg',
        tag: ['All']
    }

]

const Projects = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {ProjectList.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}
        </div>
        
    </>

  )
}

export default Projects
