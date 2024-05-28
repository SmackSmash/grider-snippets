interface EditSnipppetPageProps {
  params: {
    id: string;
  };
}

export default function EditSnippetPage(props: EditSnipppetPageProps) {
  console.log(props);
  return <div>Edit snippet page</div>;
}
