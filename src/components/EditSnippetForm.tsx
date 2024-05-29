'use client';
import { Snippet } from '@prisma/client';

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet: { id, title, code } }: EditSnippetFormProps) => {
  return <div>Edit snippet form for &quot;{title}&quot;</div>;
};

export default EditSnippetForm;
