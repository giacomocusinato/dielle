import React from 'react';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const { t } = useTranslation(['common']);

  return (
    <footer className="bg-gray-100 mt-10 sm:mt-20">
      <div className="container py-10 sm:py-20">
        <div className="grid grid-rows-2 grid-cols-2 gap-y-6 sm:flex sm:justify-between">
          <img
            className="max-w-[120px] sm:max-w-[150px] opacity-90"
            src="/logo-black.svg"
            alt={`${t('companyName')} - ${t('companyMotto')}`}
          />

          <div>
            <h3 className="font-medium">{t('companyLegalName')}</h3>
            <p>
              Galileo Galilei 1, <br />
              Galliera Veneta, PD <br />
              35015, Italy
            </p>
            <h3 className="mt-2 font-medium">Partita IVA</h3>
            <p>02474770282</p>
          </div>

          <div>
            <h3 className="font-medium">Azienda</h3>
            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-dielle focus:text-dielle">
                  {t('header:links.home')}
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-dielle focus:text-dielle">
                  {t('header:links.solutions')}
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="hover:text-dielle focus:text-dielle">
                  {t('header:links.industries')}
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="hover:text-dielle focus:text-dielle flex items-center">
                  {t('header:links.jobs')}
                  <span className="bg-dielle p-1 ml-1 h-fit text-[10px] leading-[10px] uppercase text-white rounded-sm">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="hover:text-dielle focus:text-dielle">
                  {t('header:links.contacts')}
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-medium">Contatti</h3>
            <ul>
              <li>Email: <a className="underline hover:text-dielle font-light" href={`mailto:${t('companyEmail')}`}>{t('companyEmail')}</a></li>
              <li>Tel: <a className="underline hover:text-dielle font-light" href={`tel:${t('companyPhone')}`}>{t('companyPhone')}</a></li>
              <li>Fax: <a className="underline hover:text-dielle font-light" href={`fax:${t('companyFax')}`}>{t('companyFax')}</a></li>
            </ul>

            <p></p>
          </div>

        </div>

        <hr className="block my-5" />

        <div>
          &#169; {t('companyLegalName')} {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}