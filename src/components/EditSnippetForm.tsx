'use client';
import { Snippet } from '@prisma/client';
import Editor, { type OnChange } from '@monaco-editor/react';

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet: { id, title, code } }: EditSnippetFormProps) => {
  const handleEditorChange = (value: string | undefined) => {
    alert(value);
  };

  return (
    <div>
      <h1>Edit snippet form for &quot;{title}&quot;</h1>
      <Editor
        height='400px'
        defaultLanguage='javascript'
        theme='vs-dark'
        defaultValue={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditSnippetForm;
