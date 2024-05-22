import { db } from '@/db';

interface ViewSnippetProps {
  params: {
    id: string;
  };
}

export default async function ViewSnippet({ params: { id } }: ViewSnippetProps) {
  return <div>{id}</div>;
}
