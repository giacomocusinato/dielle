import React from 'react';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Button } from '../Button';
import { withFadeInContent } from '../FadeInContent';
import { BrandTrans } from '../BrandTrans/BrandTrans';

export const _Contact = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="jobs">
      <div className="container py-10 md:py-20">
        <h2 className="mb-10 md:mb-16 text-4xl text-medium text-center">
          <BrandTrans i18nKey="home:contact:title" />
        </h2>

        <div className="flex justify-center">
          <img src="cables2.jpg" alt="electrical cables" className="hidden md:block w-[450px] mr-8" />
          <div className="max-w-[600px] ">

            <p className="my-4 whitespace-pre-line">
              {t('home:contact:work')}
            </p>
            <Button className="mt-6" rounded stroked size="md" href="/jobs">
              {t('home:contact:workBtn')}
              <ArrowRightIcon className="w-5 ml-4" />
            </Button>


            <p className="mt-16">
              {t('home:contact:contact')}
            </p>
            <Button className="mt-6" rounded stroked size="md" href="/contact">
              {t('home:contact:contactBtn')}
              <ArrowRightIcon className="w-5 ml-4" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

export const Contact = withFadeInContent(_Contact);