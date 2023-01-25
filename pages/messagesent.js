import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function MessageSent() {
  const router = useRouter();
  return (
    <Layout text='Success'>
      <main className='h-screen flex flex-col bg-neuwhite-100  items-center  justify-start  '>
        <div className='max-w-md font-bold bg-neuwhite-100 mx-5 rounded-lg text-gray-700 p-6 mt-40 shadow-form'>
          <h1>Message has been sent from {router.query.email}.</h1>
          <h1>We'll contact you shortly {router.query.name}✨</h1>
        </div>
      </main>
    </Layout>
  );
}
