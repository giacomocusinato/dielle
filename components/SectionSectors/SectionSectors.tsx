import React, { useCallback, useEffect, useRef } from 'react'
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

type SectorCardProps = {
  img: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export const SectorItem: React.FC<SectorCardProps> = (props: SectorCardProps) => {
  return (
    <div className={classNames(
      'flex items-end', { 'flex-row-reverse text-right': props.reverse })
    }>
      <img
        className="w-[300px] h-[200px] rounded-md shadow-md"
        src={props.img}
        alt={props.title} />
      <div className={classNames('max-w-2xl', { 'mr-8': props.reverse, 'ml-8': !props.reverse, })}>
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <p className="mt-1 text-sm">{props.description}</p>
      </div>
    </div>
  )
};

export const SectionSectors = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="industries">
      <div className="container py-20">
        <h2 className="mb-16 text-4xl text-medium sm:text-center">
          {t('industries.title1')} <span className="text-dielle">{t('home:industries.title2')}</span>
        </h2>
        <div className="mt-8 space-y-8 relative">
          <div className="absolute top-20 left-20 bottom-32 right-20 border border-dielle -z-10" aria-hidden="true"></div>
          <SectorItem
            img="/pasta.jpg"
            title={t('home:industries.food')}
            description={t('home:industries.foodDesc')} />
          <SectorItem
            reverse
            img="/packaging.jpg"
            title={t('home:industries.packaging')}
            description={t('home:industries.packagingDesc')} />
          <SectorItem
            img="/boat-lifter.jpg"
            title={t('home:industries.boat')}
            description={t('home:industries.boatDesc')} />
          <SectorItem
            reverse={true}
            img="/marble.jpg"
            title={t('home:industries.marble')}
            description={t('home:industries.marbleDesc')} />
          <SectorItem
            img="/metal.jpg"
            title={t('home:industries.metal')}
            description={t('home:industries.metalDesc')} />
        </div>
      </div>
      <img src="/cables.jpg" className="w-full mt-4 sm:hidden " />
    </section>
  )
};
