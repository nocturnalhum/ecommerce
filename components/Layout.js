import React from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ` - Sugardipity` : 'Sugardipity'}</title>
        <meta name='description' content='Sugardipity Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between '>
        <header>
          <Navbar />
        </header>
        <main className={`${inter.className} container m-auto mt-4 px-4`}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
