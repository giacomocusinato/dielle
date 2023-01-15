import React from 'react'
import { useRouter } from 'next/router'
import { Trans, useTranslation } from 'next-i18next'
import { Button } from '../Button'
import { useCookies } from './CookiesContext'

export const CookiesBanner: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation(['cookies']);
  const ctx = useCookies();

  return (
    <div className="fixed bottom-0 shadow-lg w-full py-4 border-gray-300 bg-gray-200 border-t z-50">
      <div className="container flex items-center">

        <div className="flex-1 mr-2 md:mr-4">
          <h3 className="font-medium text-lg flex items-center">
            <img src="/cookie.svg" alt="Cookie" className="w-5 h-5 mr-2" />
            {t('cookies:title')}
          </h3>
          <p className="text-gray-800 text-sm md:text-md whitespace-pre-line">
            <Trans
              i18nKey="cookies:message"
              components={{
                h: <a
                  className="underline hover:text-dielle focus:text-dielle"
                  target="_blank"
                  rel="noreferrer"
                  href={`/${router.query.locale}/cookie`}
                />
              }}
            />
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center">
          <Button
            className="h-fit"
            onClick={() => { ctx?.setAllowCookies(true); ctx?.setShowBanner(false); }}
          >
            {t('cookies:yesBtn')}
          </Button>
          <a
            role="button"
            className="block mt-2 md:mt-0 md:mr-4 text-center"
            onClick={() => { ctx?.setAllowCookies(false); ctx?.setShowBanner(false) }}
          >
            {t('cookies:noBtn')}
          </a>
        </div>
      </div>
    </div>
  )
}
