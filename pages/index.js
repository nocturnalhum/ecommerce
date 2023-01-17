import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Layout title='Home Page'>
        <div className='w-full  h-screen object-fill'>
          {/* <Image
            src='/images/cookies.jpg'
            alt='cookie'
            width={4000}
            height={2000}
          ></Image> */}
        </div>
      </Layout>
    </>
  );
}
