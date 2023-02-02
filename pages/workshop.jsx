import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Layout from '../components/Layout';

export default function Workshop() {
  return (
    <>
      <Layout title='Workshops'>
        <div className='h-screen flex justify-center items-center text-cyan-800 mt-50 bg-slate-300 font-bold text-3xl'>
          <h1>No Workshops Available At this Time</h1>
        </div>
      </Layout>
    </>
  );
}
