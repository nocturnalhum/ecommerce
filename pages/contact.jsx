import React from 'react';
import Layout from '../components/Layout';

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
export default function Contact() {
  return (
    <>
      <Layout title='Contact'>
        <div className='flex justify-center bg-[#ecf0f3] h-[950px] relative'>
          <div className='container rounded-xl p-10 pb-20 bg-[#ecf0f3] shadow-form top-20 absolute z-[1]'>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <form
              action=''
              className='flex flex-col justify-center items-center w-full h-full'
            >
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='w-full h-10 pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-finput focus:shadow-ffocus'
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='w-full h-10 pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-inner'
              />
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='w-full h-10 pl-6 my-4 border-none outline-none rounded-lg bg-[#ecf0f3] shadow-input focus:shadow-focus'
              />
              <input
                type='text'
                name='message'
                placeholder='Message'
                className='w-full h-40 pl-6 my-4 border-none outline-none rounded-lg bg-[#ecf0f3] shadow-input focus:shadow-focus'
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
