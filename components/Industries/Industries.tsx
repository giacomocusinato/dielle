import React from 'react'
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Button } from '../Button';

type IndustryItemProps = {
  img: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export const IndustryItem: React.FC<IndustryItemProps> = (props: IndustryItemProps) => {
  return (
    <div>
      <img className="rounded" src={props.img} alt={props.title} />
      <h3 className="text-lg font-medium mt-1">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export const Industries = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="industries">
      <div className="py-10 sm:py-20">
        <h2 className="mb-10 sm:mb-16 text-4xl text-medium text-center">
          {t('industries.title1')} <span className="text-dielle">{t('home:industries.title2')}</span>
        </h2>

        <div className=" py-20">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              <IndustryItem
                img="/industries/pasta.jpg"
                title={t('home:industries.food')}
                description={t('home:industries.foodDesc')} />
              <IndustryItem
                reverse
                img="/industries/packaging.jpg"
                title={t('home:industries.packaging')}
                description={t('home:industries.packagingDesc')} />
              <IndustryItem
                img="/industries/boat-lifter.jpg"
                title={t('home:industries.boat')}
                description={t('home:industries.boatDesc')} />
              <IndustryItem
                reverse={true}
                img="/industries/marble.jpg"
                title={t('home:industries.marble')}
                description={t('home:industries.marbleDesc')} />
              <IndustryItem
                img="/industries/metal.jpg"
                title={t('home:industries.metal')}
                description={t('home:industries.metalDesc')} />
            </div>
            <Button className="mt-16" rounded stroked size="lg" href="/contact">
              Scopri di più
              <ArrowRightIcon className="w-5 ml-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
};
