import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import galaxyImg from '../public/assets/projects/galaxy.jpg'
import crudImg from '../public/assets/projects/crud.jpg'
import blankImg from '../public/assets/projects/blank.png'
import weatherImg from '../public/assets/projects/weather.png'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#4e84f0]'>
          Projects
        </p>
        <h2 className='py-4 hover:scale-105 ease-in duration-300 hover:text-[#4e84f0]'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Galaxy Travel'
            backgroundImg={galaxyImg}
            projectUrl='/galaxy'
            tech='React JS'
          />
          <ProjectItem
            title='Crud App'
            backgroundImg={crudImg}
            projectUrl='/crud'
            tech='Php'

          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherImg}
            projectUrl='/weather'
            tech='React JS'

          />
          <ProjectItem
            title='Not Ready'
            backgroundImg={blankImg}
            projectUrl='/#projects'
            tech='React'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
