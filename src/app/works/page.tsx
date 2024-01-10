import { Header } from '../ui/header';

export default async function Page() {
  return (
    <>
      <Header transparent={false} />
      <main className='md:pt-12 pt-10'>
        <h1>Works page</h1>
      </main>
    </>
  );
}