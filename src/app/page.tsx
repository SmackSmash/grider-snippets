import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      <h1 className='text-3xl text-poimandres-darkpink'>Snippets</h1>
      {snippets.map(({ id, title, code }) => (
        <div key={id}>
          <h1>{title}</h1>
          <div className='bg-poimandres-darkslate p-2'>
            <pre className='text-poimandres-yellow'>{code}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}
