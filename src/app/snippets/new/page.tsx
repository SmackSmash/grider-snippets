import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const snippet = await db.snippet.create({ data: { title, code } });
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className='m-3 font-bold'>Create a snippet</h3>
      <div className='flex flex-col gap-4 p-3'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            className='w-full rounded border p-2 text-poimandres-blackslate'
            type='text'
            name='title'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea className='w-full rounded border p-2 text-poimandres-blackslate' name='code' />
        </div>
        <button
          className='rounded bg-poimandres-darkblue p-2 font-bold uppercase text-poimandres-darkslate hover:text-poimandres-white'
          type='submit'
        >
          Add Snippet
        </button>
      </div>
    </form>
  );
}
