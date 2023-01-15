import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useCookies } from './CookiesContext';

export const CookiesRootConsumer: React.FC = () => {
  const ctx = useCookies();

  useEffect(() => {
    if (ctx?.allowCookies === null) {
      ctx?.setShowBanner(true);
    }
    if (ctx?.allowCookies && !ReactGA.isInitialized) {
      ReactGA.initialize("G-58S61RB7YE");
    }
    if ((ctx && !ctx.allowCookies) && ReactGA.isInitialized) {
      ReactGA.reset();
    }
  }, [ctx])

  if (!ctx) {
    return null;
  }

  return <></>
};
