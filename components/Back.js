import Link from 'next/link';

export const Back = () => {
  return (
    <div className='backLink'>
      <Link href='/blog'>
        <a className='back'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='#00303f'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
          Back
        </a>
      </Link>
    </div>
  );
};
