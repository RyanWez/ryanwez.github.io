'use client';
import Image from 'next/image';

const Preloader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={`preloader ${loading ? '' : 'preloader-hidden'}`}>
      <Image src="/images/mona.webp" alt="Loading..." width={60} height={60} priority />
    </div>
  );
};

export default Preloader;
