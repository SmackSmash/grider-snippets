'use client';
import { useState } from 'react';
import { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { updateSnippet } from '@/actions';

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet: { id, title, code } }: EditSnippetFormProps) => {
  const [editorValue, setEditorValue] = useState<string | undefined>(code);

  const handleEditorChange = (value: string | undefined) => {
    setEditorValue(value);
  };

  // Funky way of calling server functions, works with JS disabled and
  // appears to be the standard. Bind arguments to function and pass
  // bound version of function to a form action.
  const updateSnippetAction = updateSnippet.bind(null, id, editorValue);

  return (
    <div>
      <h1>Edit snippet form for &quot;{title}&quot;</h1>
      <Editor
        height='400px'
        defaultLanguage='javascript'
        theme='vs-dark'
        options={{ minimap: { enabled: false } }}
        defaultValue={code}
        onChange={handleEditorChange}
      />
      <form action={updateSnippetAction}>
        <button
          className='mt-2 rounded bg-poimandres-lightgreen px-4 py-2 text-poimandres-blackslate'
          type='submit'
        >
          Update snippet
        </button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
