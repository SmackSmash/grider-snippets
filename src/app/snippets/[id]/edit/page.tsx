import { notFound } from 'next/navigation';
import EditSnippetForm from '@/components/EditSnippetForm';
import { db } from '@/db';

interface EditSnipppetPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({ params: { id } }: EditSnipppetPageProps) {
  const snippet = await db.snippet.findFirst({ where: { id: Number(id) } });

  if (!snippet) {
    return notFound();
  }

  return <EditSnippetForm snippet={snippet} />;
}
