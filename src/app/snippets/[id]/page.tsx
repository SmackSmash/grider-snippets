import { notFound } from 'next/navigation';
import { getHighlighter } from 'shiki';
import parse from 'html-react-parser';
import { db } from '@/db';

interface ViewSnippetProps {
  params: {
    id: string;
  };
}

export default async function ViewSnippet({ params: { id } }: ViewSnippetProps) {
  const snippet = await db.snippet.findFirst({ where: { id: Number(id) } });

  if (!snippet) {
    return notFound();
  }

  const highlighter = await getHighlighter({
    themes: ['poimandres'],
    langs: ['javascript']
  });

  return (
    <div className='overflow-x-auto rounded bg-poimandres-blackslate p-4 shadow-md'>
      {parse(
        highlighter.codeToHtml(snippet!.code, {
          lang: 'javascript',
          theme: 'poimandres'
        })
      )}
    </div>
  );
}
