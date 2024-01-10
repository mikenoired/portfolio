import { Header } from '@/app/ui/header';
import { data } from '../data';
import { Sidebar } from '@/app/ui/works/sidebar';

export default function SlugPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-12 pt-10 flex'>
        <Sidebar data={data} />
        <div className='md:pl-[200px]'>{children}</div>
      </main>
    </>
  );
};