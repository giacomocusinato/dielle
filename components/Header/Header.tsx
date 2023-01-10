import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { LanguagePicker } from '../LanguagePicker';
import { Button } from '../Button';

const HeaderLink: React.FC<{ to: string, translateKey: string }> = ({ to, translateKey }) => {
  const { t } = useTranslation(['header']);

  return (
    <li key={translateKey}>
      <Link href={to}>
        <a className="flex items-center text-lg text-semibold hover:text-dielle focus:text-dielle">
          {t(`header:links.${translateKey}`)}
          {translateKey === 'jobs' && (
            <span className="bg-dielle p-1 ml-1 text-[10px] leading-[10px] uppercase text-white rounded-sm">
              Hiring
            </span>
          )}
        </a>
      </Link>
    </li >
  )
}

const HeaderContent: React.FC<{ isSticky: boolean }> = ({ isSticky }) => {
  const { t } = useTranslation(['header']);

  return (
    <>
      <div className="container w-full h-full flex justify-between items-center text-black" >
        <a onClick={() => (window.location.href = '/')}>
          <h1 className="font-avenir h-[27px] text-2xl uppercase font-semibold tracking-[2px]">Dielle</h1>
        </a>
        <ul className="space-x-4 hidden sm:flex">
          <HeaderLink to="/" translateKey="home" />
          <HeaderLink to="/solutions" translateKey="solutions" />
          <HeaderLink to="/industries" translateKey="industries" />
          <HeaderLink to="/jobs" translateKey="jobs" />
        </ul>

        <div className="flex items-center space-x-4">
          <LanguagePicker key={isSticky + ''} />
          <Button rounded stroked size="md" href="/contact">Contact</Button>
        </div>
      </div>
    </>
  )
}

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setIsSticky(window.scrollY > 200));
    return () => {
      window.removeEventListener('scroll', () => setIsSticky(window.scrollY > 200));
    };
  });

  return (
    <>
      <nav
        aria-hidden={isSticky}
        className="w-full h-20 flex-shrink-0">
        <HeaderContent isSticky={isSticky} />
      </nav>
      <nav
        aria-hidden={!isSticky}
        className={classNames(
          'fixed w-full top-0 h-16 bg-white/80 backdrop-blur-[3px] border-b border-gray-200 z-50',
          !isSticky && '-translate-y-16 overflow-hidden',
        )}
        style={{ transition: 'transform 0.175s ease-out' }}>
        <HeaderContent isSticky={isSticky} />
      </nav>
    </>
  );
}