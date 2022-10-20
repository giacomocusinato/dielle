import React from 'react';
import { useTranslation } from 'next-i18next';

export const Traits = () => {
  const { t } = useTranslation(['common']);

  return (
    <section id="traits">
      <div className="container py-10 sm:py-20 lg:px-[180px] xl:px-[240px]">
        <h2 className="mb-10 sm:mb-16 text-4xl text-medium text-center">
          Su di <span className="text-dielle">noi</span>
        </h2>
        <div className="space-y-12">
          <div className="flex max-w-4xl">
            <img src="/ul-certification.svg" className="w-20 flex-shrink-0 self-start" />
            <div className="ml-8">
              <h3 className="mb-1 text-xl font-semibold">UL Certification</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, laborum. Dolor necessitatibus dolores doloribus maxime, minima laborum maiores hic vitae commodi at laboriosam, modi impedit dolorem neque eos labore. Quasi?</p>
            </div>
          </div>

          <div className="flex max-w-4xl ml-auto">
            <div className="mr-8 text-right">
              <h3 className="mb-1 text-xl font-semibold">Supporto cliente</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, laborum. Dolor necessitatibus dolores doloribus maxime, minima laborum maiores hic vitae commodi at laboriosam, modi impedit dolorem neque eos labore. Quasi?</p>
            </div>
            <img src="/client-support.svg" className="w-20 flex-shrink-0 self-start" />
          </div>

          <div className="flex max-w-4xl">
            <img src="/industry-4.svg" className="w-20 flex-shrink-0 self-start" />
            <div className="ml-8">
              <h3 className="mb-1 text-xl font-semibold">Industria 4.0</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, laborum. Dolor necessitatibus dolores doloribus maxime, minima laborum maiores hic vitae commodi at laboriosam, modi impedit dolorem neque eos labore. Quasi?</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}