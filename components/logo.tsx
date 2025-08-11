'use client';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

export function Logo() {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        router.push('/');
      }}
    >
      <Image src="/favicon.ico" alt="langShift" width={24} height={24} />
      langShift
    </div>
  );
}
