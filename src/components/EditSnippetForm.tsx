'use client';

interface EditSnippetFormProps {
  snippet: {
    id: number;
    title: string;
    code: string;
  };
}

const EditSnippetForm = ({ snippet: { id, title, code } }: EditSnippetFormProps) => {
  return <div>Edit snippet form for &quot;{title}&quot;</div>;
};

export default EditSnippetForm;
