import React from 'react'
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

type SolutionItemProps = {
  title: string;
  description: string;
};

export const SolutionItem: React.FC<SolutionItemProps> = (props: SolutionItemProps) => {
  return (
    <div className="text-black">
      <div className="flex">
        <div className="mt-1 mr-2 w-5 h-5 border-2 border-dielle flex-shrink-0"></div>
        <h3 className="text-xl font-semibold">{props.title}</h3>
      </div>
      <p className="mt-1 text-sm">{props.description}</p>
    </div>
  )
};

export const Solutions = () => {
  const { t } = useTranslation(['home']);

  return (
    <section className="relative" >
      <img src="/cables.jpg" className={classNames(
        'absolute -z-10 w-full',
        'hidden sm:block',
        'sm:translate-y-[664px] md:translate-y-[614px] lg:translate-y-[484px] xl:translate-y-[444px] 2xl:translate-y-[384px]'
      )} />
      <div className="container pt-20">
        <h2 className="mb-16 text-4xl text-medium sm:text-center">
          <span className="text-dielle">{t('home:services.title1')}</span> {t('services.title2')}
        </h2>
        <div className="mt-8 z-10 grid gap-6 2xl:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4">
          <SolutionItem
            title={t('home:services.design')}
            description={t('home:services.designDesc')} />
          <SolutionItem
            title={t('home:services.panels')}
            description={t('home:services.panelsDesc')} />
          <SolutionItem
            title={t('home:services.software')}
            description={t('home:services.softwareDesc')} />
          <SolutionItem
            title={t('home:services.onboard')}
            description={t('home:services.onboardDesc')} />
          <SolutionItem
            title={t('home:services.robotic')}
            description={t('home:services.roboticDesc')} />
        </div>
      </div>
      <img src="/cables.jpg" className="w-full mt-4 sm:hidden " />
    </section>
  )
};
