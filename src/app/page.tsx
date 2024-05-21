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
      <h1 className='text-3xl text-poimandres-darkpink'>Snippets</h1>
      {snippets.map(({ id, title, code }) => (
        <div className='my-4' key={id}>
          <h1 className='mb-2'>{title}</h1>
          <div className='rounded bg-poimandres-blackslate p-4 shadow-md'>
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
