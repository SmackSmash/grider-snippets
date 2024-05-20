import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div>
      {snippets.map(({ id, title, code }) => (
        <div key={id}>
          <h1>{title}</h1>
          <pre>{code}</pre>
        </div>
      ))}
    </div>
  );
}
