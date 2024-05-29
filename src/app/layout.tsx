import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snippets',
  description: 'A place to store all your favourite code snippets!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='min-h-screen w-full'>
        <div className='container mx-auto flex h-screen w-full flex-col px-2'>
          <header className='mb-14 mt-4 flex items-center'>
            <Link className='-rotate-6 text-4xl text-poimandres-yellow' href='/'>
              Snippets!
            </Link>
            <Link
              className='ml-auto rounded bg-poimandres-lightgreen px-4 py-2 text-poimandres-blackslate'
              href='/snippets/new'
            >
              New
            </Link>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
