import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <Link href='/'>
                  <a href='#' className='header-item'>
                    Home
                  </a>
                </Link>
                <Link href='/about'>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    About
                  </a>
                </Link>
                <Link href='/users'>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Users List
                  </a>
                </Link>
                <a
                  href='/api/users'
                  target='_blank'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  Users API
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <hr />
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <p>
          <Link href='/'>
            <a>Go home</a>
          </Link>
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
