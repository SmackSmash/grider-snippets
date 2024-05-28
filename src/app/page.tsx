import Link from 'next/link';
import { getHighlighter } from 'shiki';
import parse from 'html-react-parser';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const highlighter = await getHighlighter({
    themes: ['poimandres'],
    langs: ['javascript']
  });

  return (
    <div>
      {snippets.map(({ id, title, code }) => (
        <div className='mb-8' key={id}>
          <div className='flex' key={id}>
            <h1 className='mb-2'>{title}</h1>
            <Link
              className='ml-auto rounded-t-md bg-poimandres-blackslate px-4 pt-1 text-poimandres-lightgreen hover:underline'
              href={`/snippets/${id}/edit`}
            >
              🖊️ Edit
            </Link>
            <Link
              className='ml-2 rounded-t-md bg-poimandres-blackslate px-4 pt-1 text-poimandres-lightgreen hover:underline'
              href={`/snippets/${id}`}
            >
              👁️ View
            </Link>
          </div>
          <div className='overflow-x-auto rounded-b rounded-tl bg-poimandres-blackslate p-4 shadow-md'>
            {parse(
              highlighter.codeToHtml(code, {
                lang: 'javascript',
                theme: 'poimandres'
              })
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
