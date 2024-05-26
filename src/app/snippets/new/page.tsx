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
    <form className='font-sans' action={createSnippet}>
      <div className='flex flex-col gap-4 p-3'>
        <label htmlFor='title'>Title</label>
        <input
          className='w-full rounded border border-none bg-poimandres-blackslate p-2 font-mono text-poimandres-white outline-none'
          type='text'
          name='title'
        />
        <label htmlFor='code'>Code</label>
        <textarea
          className='min-h-80 w-full rounded border border-none bg-poimandres-blackslate p-2 font-mono text-poimandres-white outline-none'
          name='code'
        />
        <button
          className='rounded bg-poimandres-lightgreen p-2 font-poetsen font-bold text-poimandres-darkslate'
          type='submit'
        >
          Add Snippet
        </button>
      </div>
    </form>
  );
}
