interface EditSnipppetPageProps {
  params: {
    id: string;
  };
}

export default function EditSnippetPage({ params: { id } }: EditSnipppetPageProps) {
  return <div>Edit snippet page for {id}</div>;
}
