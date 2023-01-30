import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Alexandre | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='../public/assets/logo.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Alexandre Martins</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/alexandre-martins-b38070197/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/alexandre-omartins'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'></span> Web Development{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
        Dedicated and motivated web developer with experience in technical support. 
        Adept to learning new technologies, team collaboration, and relationship building. 
        Excited to put my knowledge and skills into practice and develop them.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Web Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Php
            <span className='px-2'>|</span>CodeIgniter
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Firebase
            <span className='px-2'>|</span>RESTAPI
          </p>
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience 
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SERIN
            </span>
            <span className='px-2'>|</span>Salvador, BA, Brasil
          </p>
          <p className='py-1 italic'>Web Developer & Technical Support (2019 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Web developement with HTML, CSS, and Php.
            </li>
            <li>
            Troubleshoot technical  issues and concerns directly with a diverse client base
            </li>
          </ul>
        </div>


      

      </div>
    </>
  );
};

export default resume;
