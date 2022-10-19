import React from "react";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation(['common']);

  return (
    <footer>
      <div className="container py-20">
        <hr />
        <div className="py-5 flex justify-between">
          <img
            className="max-w-[150px] opacity-90"
            src="/logo-black.svg"
            alt={`${t('companyName')} - ${t('companyMotto')}`}
          />

          <div>
            <h3 className="font-medium">Azienda</h3>
            <ul>
              <li><a className="hover:underline" href="#">Soluzioni</a></li>
              <li><a className="hover:underline" href="#">Su di noi</a></li>
              <li><a className="hover:underline" href="#">Settori</a></li>
              <li><a className="hover:underline" href="#">Parters</a></li>
              <li><a className="hover:underline" href="#">Contattaci</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium">{t('companyLegalName')}</h3>
            <p>
              Via Galileo Galilei 1, <br />
              Galliera Veneta, PD <br />
              35015, Italia
            </p>
            <h3 className="mt-2 font-medium">Partita IVA</h3>
            <p>02474770282</p>
          </div>

          <div>
            <h3 className="font-medium">Contatti</h3>
            <ul>
              <li>Email: <a className="underline font-light" href={`mailto:${t('companyEmail')}`}>{t('companyEmail')}</a></li>
              <li>Tel: <a className="underline font-light" href={`tel:${t('companyPhone')}`}>{t('companyPhone')}</a></li>
              <li>Fax: <a className="underline font-light" href={`fax:${t('companyFax')}`}>{t('companyFax')}</a></li>
            </ul>

            <h3 className="mt-2 font-medium">Lavora con noi</h3>
            <p></p>
          </div>

        </div>
        <hr />
        <div className="py-5 font-medium">
          &#169; {t('companyLegalName')} {new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}