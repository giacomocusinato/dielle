import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Footer = () => {
  const { t } = useTranslation(['common', 'footer']);
  const router = useRouter();

  return (
    <footer className="bg-gray-100 border-t mt-10 sm:mt-20">
      <div className="container py-10 sm:py-20">
        <div className="grid grid-rows-2 grid-cols-2 gap-y-6 md:flex md:justify-between">
          <img
            className="max-w-[120px] sm:max-w-[150px] opacity-80"
            src="/logo-black.svg"
            alt={`${t('companyName')} - ${t('companyMotto')}`}
          />

          <div>
            <h3>{t('companyLegalName')}</h3>
            <p className="font-light text-sm md:text-base">
              Galileo Galilei 1, <br />
              Galliera Veneta, PD <br />
              35015, Italy
            </p>
            <h3 className="mt-2">{t('footer:vatNumber')}</h3>
            <p className="font-light text-sm md:text-base">02474770282</p>
          </div>

          <div>
            <h3>{t('footer:aboutUs')}</h3>
            <ul className="font-light text-sm md:text-base">
              <li>
                <Link href={`/${router.query.locale}`}>
                  <a
                    className="hover:text-dielle focus:text-dielle">
                    {t('header:links.home')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/${router.query.locale}/jobs`}>
                  <a

                    className="hover:text-dielle focus:text-dielle">
                    {t('header:links.solutions')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/${router.query.locale}/jobs`}>
                  <a
                    className="hover:text-dielle focus:text-dielle flex items-center">
                    {t('header:links.jobs')}
                    <span className="bg-dielle p-1 ml-1 h-fit text-[10px] leading-[10px] uppercase text-white rounded-sm">
                      Hiring
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/${router.query.locale}/contact`}>
                  <a
                    className="hover:text-dielle focus:text-dielle">
                    {t('header:links.contacts')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3>{t('footer:contacts')}</h3>
            <ul className="font-light text-sm md:text-base">
              <li>
                Email: <a className="underline hover:text-dielle font-light" href={`mailto:${t('companyEmail')}`}>{t('companyEmail')}</a>
              </li>
              <li>
                Tel: <a className="underline hover:text-dielle font-light" href={`tel:${t('companyPhone')}`}>{t('companyPhone')}</a>
              </li>
              <li>
                Fax: <a className="underline hover:text-dielle font-light" href={`fax:${t('companyFax')}`}>{t('companyFax')}</a>
              </li>
            </ul>

            <p></p>
          </div>

        </div>

        <hr className="block my-5" />

        <div className="flex items-center justify-between text-sm font-light">
          <div>&#169; {t('companyLegalName')} {new Date().getFullYear()}. All Rights Reserved.</div>

          <div>
            <Link href="/privacy">
              <a className="underline hover:text-dielle">Privacy policy</a>
            </Link>
            {' | '}
            <Link href="/cookie">
              <a className="underline hover:text-dielle">Cookie policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}