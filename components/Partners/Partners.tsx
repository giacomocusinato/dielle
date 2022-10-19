import React, { useCallback, useEffect, useRef } from 'react'
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

const partners = [
  { name: 'ABB', src: '/partners/abb.svg', customClass: 'max-w-[150px]' },
  { name: 'asem', src: '/partners/asem.svg' },
  { name: 'danfoss', src: '/partners/danfoss.svg' },
  { name: 'italweber', src: '/partners/italweber.svg' },
  { name: 'rittal', src: '/partners/rittal.svg', customClass: 'max-w-[102px]' },
  { name: 'rockwell-automation', src: '/partners/rockwell-automation.svg' },
  { name: 'schneider-electric', src: '/partners/schneider-electric.svg' },
  { name: 'siemens', src: '/partners/siemens.svg' },
  { name: 'wöhner', src: '/partners/wöhner.svg' },
  { name: 'yaskawa', src: '/partners/yaskawa.svg' },
  { name: 'zanardo', src: '/partners/zanardo.svg' },
]

export const Partners = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="partners">
      <div className="container py-20">
        <h2 className="mb-16 text-4xl text-medium sm:text-center">
          {t('partners.title1')} <span className="text-dielle">{t('home:partners.title2')}</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center space-x-12 -my-6">
          {partners.map(({ name, src, customClass }) => (
            <img
              className={classNames('max-w-[200px] my-6', customClass)}
              key={src}
              src={src}
              alt={name}
            />)
          )}
        </div>
      </div>
    </section>
  )
};
