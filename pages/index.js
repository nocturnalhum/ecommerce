import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Layout title='Home Page'>
        <div className='flex justify-center'>
          <div className='container min-h-screen max-w-5xl bg-homepage bg-cover'>
            <div className=' rounded-3xl bg-gray-100 opacity-90 flex mt-24 mx-10 flex-col items-center p-10 '>
              <h1 className='font-bold text-3xl mb-4'>News ...</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                ratione necessitatibus? Rem in ad ipsam, aliquid pariatur ipsa,
                harum sunt quasi expedita eveniet explicabo cum!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
