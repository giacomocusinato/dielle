import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Url } from 'url';

export const Link: React.FC<Omit<LinkProps, 'href'> & { children: React.ReactNode, href?: Url }> = ({ children, ...rest }) => {
  const router = useRouter()
  const locale = rest.locale || (router.query.locale as string) || '';

  const href = rest.href
    ? `/${locale}${rest.href}`
    : router.pathname.replace('[locale]', locale);

  return (
    <>
      <NextLink {...rest} href={href}>
        {children}
      </NextLink>
    </>
  )
};