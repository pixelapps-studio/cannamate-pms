import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href='/' className='flex w-fit items-center gap-2'>
      <span className='font-alt text-xl dark:text-white text-black'>Cannamate</span>
    </Link>
  );
}
