import Image from 'next/image';
import React from 'react';
import crud2Img from '../public/assets/projects/crud2.jpg'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crud = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1' 
          layout='fill'
          
          objectFit='cover'
          src={crud2Img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Crud App</h2>
          <h3>Php / Bootstrap / SQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-6'>
          A project with CRUD (Create, Read, Update, Delete) which are the four main operations with a database.
          </p>
          <a
            href='https://github.com/alexandre-omartins/Php_crud'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold'>Code</button>
          </a>

         
          

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 ml-2.5'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Php
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Html
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Css
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sql
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'  >
          <p className='underline cursor-pointer duration-300 ease-in hover:text-[#4e84f0]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crud;
