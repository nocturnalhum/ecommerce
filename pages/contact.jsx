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
        <div className='w-full h-full flex justify-center bg-[#ecf0f3] mt-16'>
          <div className='max-w-2xl rounded-xl p-10 h-4/5 mt-5 bg-[#ecf0f3] shadow-form'>
            <h1 className='text-3xl font-bold flex justify-center mb-4'>
              @Contact
            </h1>
            <form
              action=''
              className='flex flex-col justify-center items-center w-full'
            >
              <div className='w-full h-10 pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-input focus-within:shadow-focus'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  className='bg-[#ecf0f3]  border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              <div className='w-full h-10 pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-input focus-within:shadow-focus'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='bg-[#ecf0f3]  border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              <div className='w-full h-10 pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-input focus-within:shadow-focus'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  className='bg-[#ecf0f3]  border-none outline-none mt-2 bg-opacity-0'
                />
              </div>
              <div className='w-full h-48  pl-6 my-4 rounded-lg bg-[#ecf0f3] shadow-input focus-within:shadow-focus'>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  maxLength={217}
                  className='bg-[#ecf0f3]  w-full h-44 py-2 border-none outline-none mt-1 bg-opacity-0 pr-6 resize-none overflow-hidden'
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
