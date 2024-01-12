import EditForm from '@/app/ui/admin/qna/EditForm';

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main className='flex justify-center'>
      <EditForm id={params.id} />
    </main>
  );
}
