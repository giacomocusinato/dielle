import { Trans } from 'next-i18next';
import React from 'react';

export const BrandTrans: React.FC<any> = (props: any) => {
  return (
    <Trans {...props} components={{ h: <span className="text-dielle" /> }}></Trans>
  )
};