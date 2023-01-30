import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#4e84f0]'>
            About
          </p>
          <h2 className='py-4 hover:scale-105 duration-300 ease-in hover:text-[#4e84f0]'>Who I Am</h2>
          <p className='py-2 text-gray-600 text-justify leading-{26px}'>
          I started web developement in 2020 learning and building front-end that connect with backend technologies with Html,
           Css and Php. My focus is learn new technologies and nowadays I’m more interested in study javascript and react 
           and understand there is more than one way to accomplish a task. Even though I am proficient in building front-end
            applications using HTML, CSS, Javascript, and React, I am a very dedicated person and can pick up new tech stacks as needed.
             I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
      </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer duration-150 ease-in hover:text-[#4e84f0] '>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
