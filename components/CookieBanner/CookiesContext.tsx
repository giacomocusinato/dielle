import React, { useEffect, useState } from 'react';
import { CookiesBanner } from './CookiesBanner';

export type CookiesContextType = {
  showBanner: boolean;
  setShowBanner: (isOpen: boolean) => void;
  allowCookies: boolean | null;
  setAllowCookies: (allowCookies: boolean | null) => void;
};

export const getStoredAllowCookies: () => null | boolean = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const storedValue = localStorage.getItem('allowCookies');
  return storedValue === null ? null : JSON.parse(storedValue) as boolean;
}

export const CookiesContext = React.createContext<CookiesContextType | null>(null);

export const useCookies = () => {
  const context = React.useContext(CookiesContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookiesProvider');
  }

  return context;
}

export const CookiesProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [showBanner, setShowBanner] = useState(false);
  const [allowCookies, setAllowCookies] = useState(getStoredAllowCookies());

  useEffect(() => {
    const storedAllowCookie = getStoredAllowCookies();
    if (allowCookies !== storedAllowCookie) {
      if (allowCookies === null) {
        localStorage.removeItem('allowCookies')
      } else {
        localStorage.setItem('allowCookies', JSON.stringify(allowCookies));
      }
    }
  }, [allowCookies])

  return (
    <CookiesContext.Provider value={{ showBanner, setShowBanner, allowCookies, setAllowCookies }}>
      {props.children}
      {showBanner && <CookiesBanner />}
    </CookiesContext.Provider>
  )
}

