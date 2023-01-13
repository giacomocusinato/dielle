import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { Url } from 'url';

export const Link: React.FC<Omit<LinkProps, 'href'> & { children: React.ReactNode, href?: Url }> = ({ children, ...rest }) => {
  const router = useRouter()
  const locale = rest.locale || (router.query.locale as string) || '';
  const { locale: l, ...query } = router.query;

  return (
    <>
      <NextLink
        {...rest}
        href={{ pathname: router.pathname, query: { ...query, locale } }}
        locale={locale}>
        {children}
      </NextLink>
    </>
  )
};