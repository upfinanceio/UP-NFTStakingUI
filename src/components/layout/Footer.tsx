import { SiDiscord } from 'react-icons/si';
import { SiTwitter } from 'react-icons/si';
import { SiGitbook } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 flex h-14 w-full items-center justify-between bg-dark/10 px-5 text-center text-slate-100 shadow-inner shadow-dark/25 md:px-12 lg:px-20'>
      <div>{new Date().getFullYear()} Copyright © By Up Protocol</div>
      <div className='flex gap-6'>
        <a href='https://twitter.com/_UpFinance'>
          <SiTwitter
            size={25}
            className=' scale-1 fill-slate-100 transition-all ease-linear hover:scale-110'
          />
        </a>
        <a href='https://discord.gg/V4GkGfZZUf'>
          <SiDiscord
            size={25}
            className='scale-1 fill-slate-100 transition-transform ease-in-out hover:scale-110'
          />
        </a>
        <a href='https://upfinance.gitbook.io/docs/'>
          <SiGitbook
            size={25}
            className=' scale-1 fill-slate-100 transition-transform ease-in-out hover:scale-110'
          />
        </a>
      </div>
    </footer>
  );
}
