'use client';
import { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet: { id, title, code } }: EditSnippetFormProps) => {
  return (
    <div>
      <h1>Edit snippet form for &quot;{title}&quot;</h1>
      <Editor height='400px' defaultLanguage='javascript' theme='vs-dark' defaultValue={code} />
    </div>
  );
};

export default EditSnippetForm;
