import Link from "next/link";

export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-9xl'>404</h1>
      <p className='text-2xl'>Page not found</p>
      <p className='text-xl mt-5'>
        Go back to{" "}
        <Link className='text-blue-400' href='/'>
          home
        </Link>
      </p>
    </div>
  );
}
