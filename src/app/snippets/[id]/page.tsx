import { notFound } from 'next/navigation';
import { getHighlighter } from 'shiki';
import parse from 'html-react-parser';
import { db } from '@/db';
import { deleteSnippet } from '@/actions';

interface ViewSnippetPageProps {
  params: {
    id: string;
  };
}

export default async function ViewSnippetPage({ params: { id } }: ViewSnippetPageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: Number(id) } });

  if (!snippet) {
    return notFound();
  }

  const highlighter = await getHighlighter({
    themes: ['poimandres'],
    langs: ['javascript']
  });

  const deleteSnippetAction = deleteSnippet.bind(null, Number(id));

  return (
    <div>
      <div className='overflow-x-auto rounded bg-poimandres-blackslate p-4 shadow-md'>
        {parse(
          highlighter.codeToHtml(snippet!.code, {
            lang: 'javascript',
            theme: 'poimandres'
          })
        )}
      </div>
      <form action={deleteSnippetAction}>
        <button
          className='mt-2 rounded bg-poimandres-lightpink px-4 py-2 text-poimandres-blackslate'
          type='submit'
        >
          Delete Snippet
        </button>
      </form>
    </div>
  );
}
