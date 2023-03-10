import * as React from 'react';
import { SiGitbook } from 'react-icons/si';

export default function MenuItems() {
  return (
    <div className='mr-2 pt-1 font-medium uppercase text-white transition-colors hover:text-yellow-500'>
      <a href='https://upfinance.gitbook.io/docs/' className='animated-underline flex items-center pb-1'>
        <SiGitbook className='mt-[-3px] mr-2 inline-block' />
        Docs
      </a>
    </div>
  );
}
