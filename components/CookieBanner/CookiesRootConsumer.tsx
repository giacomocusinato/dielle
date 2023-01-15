import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useCookies } from './CookiesContext';

export const CookiesRootConsumer: React.FC = () => {
  const ctx = useCookies();
  if (!ctx) {
    return null;
  }

  const { allowCookies, setShowBanner } = ctx;

  useEffect(() => {
    if (allowCookies === null) {
      setShowBanner(true);
    }
    if (allowCookies && !ReactGA.isInitialized) {
      ReactGA.initialize("G-58S61RB7YE");
    }
    if (!allowCookies && ReactGA.isInitialized) {
      ReactGA.reset();
    }
  }, [allowCookies])

  return <></>
};
