import React from 'react';
import { useTranslation } from 'next-i18next';
import { withFadeInContent } from '../FadeInContent';
import { BrandTrans } from '../BrandTrans/BrandTrans';

const _Traits = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="traits" className="relative">
      <div className="container py-10 sm:py-20 lg:px-40 xl:px-60">
        <h2 className="mb-10 sm:mb-16 text-4xl text-medium text-center">
          <BrandTrans i18nKey="home:traits:title" />
        </h2>

        <div className="space-y-12">
          <div className="flex">
            <img src="/usa.svg" alt={t('home:traits:cert')} className="w-20 flex-shrink-0 self-start" />
            <div className="ml-8">
              <h3 className="mb-1 text-xl font-semibold">{t('home:traits:cert')}</h3>
              <p className="whitespace-pre-line">
                {t('home:traits:certDesc')}
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/client-support.svg" alt={t('home:traits:support')} className="w-20 flex-shrink-0 self-start" />
            <div className="ml-8">
              <h3 className="mb-1 text-xl font-semibold">{t('home:traits:support')}</h3>
              <p className="whitespace-pre-line">
                {t('home:traits:supportDesc')}
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/industry-4.svg" alt={t('home:traits:industry4')} className="w-20 flex-shrink-0 self-start" />
            <div className="ml-8">
              <h3 className="mb-1 text-xl font-semibold">{t('home:traits:industry4')}</h3>
              <p className="whitespace-pre-line">
                {t('home:traits:industry4Desc')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export const Traits = withFadeInContent(_Traits);