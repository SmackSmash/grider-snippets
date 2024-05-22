import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='container m-2 mx-auto px-2'>
          <Link
            className='mb-8 mt-2 inline-block -rotate-6 text-4xl text-poimandres-yellow'
            href='/'
          >
            Snippets!
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
