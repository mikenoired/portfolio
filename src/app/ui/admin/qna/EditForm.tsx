import { editQNA, fetchQNAById } from "@/app/lib/actions"

export default async function EditForm({id}: {id: number}) {
  const updateQNA = editQNA.bind(null, Number(id));
  const block = await fetchQNAById(id);
  return (
    <div className='mt-5'>
      <h1 className='text-2xl font-bold mb-3'>Edit Q&A block</h1>
      <form className='p-4 border flex flex-col w-[400px]' action={updateQNA}>
        <div className='flex flex-col'>
          <label className='text-xl font-semibold mb-3'>Question</label>
          <input
            className='border bg-black p-3'
            type='text'
            name='title'
            placeholder='Who asked :P'
            defaultValue={block?.title}
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='text-xl font-semibold mb-3'>Answer</label>
          <input
            className='border bg-black p-3'
            type='text'
            name='content'
            placeholder='Bleh'
            defaultValue={block?.content}
          />
        </div>
        <input type='submit' value='Upload' />
      </form>
    </div>
  );
};
