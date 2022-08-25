import { useEffect, useState } from 'react';
import classNames from 'classnames';

const HeaderContent: React.FC<{ isSticky: boolean }> = () => (
  <>
    <div className="container mx-auto w-full h-full flex justify-between items-center text-black" >
      <h1 className="font-avenir text-2xl uppercase font-semibold tracking-[2px]">Dielle</h1>
      <ul className="flex space-x-4">
        <li><a href="" className="text-lg text-semibold">Servizi</a></li>
        <li><a href="" className="text-lg text-semibold">Settori</a></li>
        <li><a href="" className="text-lg text-semibold">Su di noi</a></li>
        <li><a href="" className="text-lg text-semibold">Partners</a></li>
      </ul>
      <select name="language">
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
    </div>
  </>
)

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
          !isSticky && '-translate-y-16',
        )}
        style={{ transition: 'transform 0.175s ease-out' }}>
        <HeaderContent isSticky={isSticky} />
      </nav>
    </>
  );
}