import React from 'react';
import Layout from '../../components/Layout';

export default function SignIn() {
  return (
    <Layout title='Sign In'>
      <main className=' flex justify-center items-center bg-neuwhite-100 min-h-screen'>
        <div className='container h-full max-w-2xl max-h-[800px]  mx-auto rounded-xl p-10 my-8 bg-newwhite-100 shadow-form'>
          <h1 className='text-3xl font-bold flex justify-center mb-6'>
            Sign In
          </h1>
          {/* ============================================================ */}
          {/* ==========<<< Form Field >>>================================ */}
          {/* ============================================================ */}
          <form className='flex flex-col justify-center items-start w-full'>
            {/* ============================================================ */}
            {/* ==========<<< Email Field >>>=============================== */}
            {/* ============================================================ */}
            <label className='font-semibold  ml-1 flex' htmlFor='name'>
              Email:
              <p className='font-light ml-2  text-red-500'></p>
            </label>
            <div className='w-full h-10 pl-6 my-2 rounded-lg bg-neuwhite-100 shadow-input focus-within:shadow-focus'>
              <input
                type='email'
                placeholder='example@mail.com'
                className='bg-[#ecf0f3]  pr-6 w-full border-none outline-none mt-2 bg-opacity-0'
              />
            </div>
            {/* ============================================================ */}
            {/* ==========<<< Password Field >>>============================ */}
            {/* ============================================================ */}
            <label className='font-semibold  ml-1 flex' htmlFor='name'>
              Password:
              <p className='font-light ml-2  text-red-500'></p>
            </label>
            <div className='w-full h-10 pl-6 my-2 rounded-lg bg-neuwhite-100 shadow-input focus-within:shadow-focus'>
              <input
                type='password'
                placeholder='********'
                className='bg-[#ecf0f3]  pr-6 w-full border-none outline-none mt-2 bg-opacity-0'
              />
            </div>
            {/* =============================================================== */}
            {/* ==========<<< Submit Button >>>================================ */}
            {/* =============================================================== */}
            <div className='self-center mt-2'>
              <button
                type='submit'
                className={`${
                  true
                    ? 'bg-blue-500 cursor-pointer'
                    : 'bg-gray-400 cursor-not-allowed'
                } text-blue-50 px-8 py-2 rounded-full font-medium w-40  `}
              >
                {false ? (
                  <div className='flex items-center gap-2 justify-center mr-2'>
                    <GiTwirlyFlower className='animate-spin text-2xl' />
                    Sending
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
