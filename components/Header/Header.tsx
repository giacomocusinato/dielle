import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';
import { LanguagePicker } from '../LanguagePicker';
import { Button } from '../Button';

const links = ['solutions', 'traits', 'industries', 'partners', 'contats']

const scrollTo = (key: string) => document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' });

const HeaderContent: React.FC<{ isSticky: boolean }> = ({ isSticky }) => {
  const { t } = useTranslation(['header']);

  return (
    <>
      <div className="container mx-auto w-full h-full flex justify-between items-center text-black" >
        <a onClick={() => (window.location.href = '/')}>
          <h1 className="font-avenir text-2xl uppercase font-semibold tracking-[2px]">Dielle</h1>
        </a>
        <ul className="flex space-x-4">
          {links.map((key) => (
            <li>
              <a
                key={key}
                className="text-lg text-semibold hover:text-dielle focus:text-dielle"
                onClick={() => scrollTo(key)}>
                {t(`header:sections.${key}`)}
              </a>
            </li>
          ))}
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
        className="w-full h-20">
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