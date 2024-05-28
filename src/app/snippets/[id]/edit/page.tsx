interface EditSnipppetProps {
  params: {
    id: string;
  };
}

export default function EditSnippet(props: EditSnipppetProps) {
  console.log(props);
  return <div>Edit snippet page</div>;
}
