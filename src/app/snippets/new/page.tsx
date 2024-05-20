export default function SnippetCreatePage() {
  return (
    <form>
      <h3 className='m-3 font-bold'>Create a snippet</h3>
      <div className='flex flex-col gap-4 p-3'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input className='w-full rounded border p-2' type='text' name='title' />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea className='w-full rounded border p-2' name='code' />
        </div>
      </div>
    </form>
  );
}
