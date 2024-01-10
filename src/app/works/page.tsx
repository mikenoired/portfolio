import { Header } from '@/app/ui/header';
import { data } from './data';
import { NavButton } from '@/app/ui/works/nav-button';

export default async function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-[200px] pt-[180px] flex flex-col items-end'>
        {data.map((link, index) => <NavButton
          key={index}
          title={link.title}
          thumb={link.thumbnail}
          url={link.url}
        />)}
      </main>
    </>
  );
}