import React from 'react'
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Button } from '../Button';
import { withFadeInContent } from '../FadeInContent';

type SolutionItemProps = {
  title: string;
  description: string;
  img: string;
};

const SolutionItem: React.FC<SolutionItemProps> = (props: SolutionItemProps) => {
  return (
    <div>
      <img className="rounded" src={props.img} alt={props.title} />
      <h3 className="text-lg font-medium mt-[6px]">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
};

const _Solutions = () => {
  const { t } = useTranslation(['home']);

  return (
    <section id="solutions" className="relative" >
      <div className="py-10 sm:py-20">
        <h2 className="mb-10 sm:mb-16 text-4xl text-medium text-center">
          <span className="text-dielle">{t('home:services.title1')}</span> {t('services.title2')}
        </h2>

        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <SolutionItem
              img="/solutions/panels.jpg"
              title={t('home:services.panels')}
              description={t('home:services.panelsDesc')} />
            <SolutionItem
              img="/solutions/software.jpg"
              title={t('home:services.software')}
              description={t('home:services.softwareDesc')} />
            <SolutionItem
              img="/solutions/onboard.jpg"
              title={t('home:services.onboard')}
              description={t('home:services.onboardDesc')} />
            <SolutionItem
              img="/solutions/robotic.jpg"
              title={t('home:services.robotic')}
              description={t('home:services.roboticDesc')} />
          </div>
          <Button className="mt-10" rounded stroked size="md" href="/contact">
            Scopri di più
            <ArrowRightIcon className="w-5 ml-4" />
          </Button>
        </div>
      </div>
    </section>
  )
};

export const Solutions = withFadeInContent(_Solutions);
