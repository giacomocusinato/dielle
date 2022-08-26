
import React from "react";
import NextHead from "next/head";
import { useTranslation } from "next-i18next";

export const Head: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation(['head']);

  return (
    <NextHead>
      <meta name="description" content={t('description')} key="description" />
      {children}
    </NextHead>
  );
}