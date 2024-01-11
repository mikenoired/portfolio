import { newQNA } from '@/app/lib/actions';

export const BlockForm = () => {
  return (
    <div className='mt-5'>
      <h1 className='text-2xl font-bold mb-3'>Add new Q&A block</h1>
      <form className='p-4 border flex flex-col w-[400px]' action={newQNA}>
        <div className='flex flex-col'>
          <label className='text-xl font-semibold mb-3'>Question</label>
          <input
            className='border bg-black p-3'
            type='text'
            name='title'
            placeholder='Who asked :P'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label className='text-xl font-semibold mb-3'>Answer</label>
          <input
            className='border bg-black p-3'
            type='text'
            name='content'
            placeholder='Bleh'
          />
        </div>
        <input type='submit' value='Upload' />
      </form>
    </div>
  );
};