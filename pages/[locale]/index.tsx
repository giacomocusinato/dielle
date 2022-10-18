import { useState } from 'react';
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/solid';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { HeroLogo } from '../../components/HeroLogo';
import { SectionServices } from '../../components/SectionServices';
import { SectionSectors } from '../../components/SectionSectors/SectionSectors';
import { Partners } from '../../components/Partners/Partners';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);

  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <Header />

      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video className="absolute min-w-full min-h-full object-cover -z-50 brightness-50" autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <HeroLogo />
      </section>

      <section className="container mx-auto py-20 px-8 xl:px-40">
        <p className="text-4xl">
          <span className="text-dielle">Lorem Ipsum</span> dolor sit amet consectetur adipisicing elit.
          Ullam voluptatem ipsum repudiandae sint accusamus deserunt, vitae rem natus enim reprehenderit cumque dolores necessitatibus commodi soluta alias dicta tempore ipsa ab.
        </p>
        {showMore ? <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam expedita, labore ipsam ratione minus eum cumque optio at inventore error fugiat provident commodi? Necessitatibus exercitationem laborum animi officia inventore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsum quam dolor, dolorum officia earum. Provident, assumenda architecto molestias, est quidem voluptate, incidunt iusto recusandae aliquam nesciunt ex voluptas doloremque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorum iste at ea, assumenda, nam consequatur odit nihil eum eius labore possimus. Harum accusamus, quaerat officia tempore quia temporibus soluta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorum iste at ea, assumenda, nam consequatur odit nihil eum eius labore possimus. Harum accusamus, quaerat officia tempore quia temporibus soluta.
        </p> : <a
          className="mt-8 text-2xl text-dielle flex items-center"
          role="button"
          onClick={() => setShowMore(true)}>
          <PlusIcon className="w-5 h-5 mr-2" />
          {t("home:showMore")}
        </a>}
      </section>

      <SectionServices />

      <section>
        <div className="container py-20 lg:px-[180px] xl:px-[240px]">
          <h2 className="mb-16 text-4xl text-medium sm:text-center">
            Su di <span className="text-dielle">noi</span>
          </h2>
          <div className="space-y-12">
            <div className="flex max-w-4xl">
              <img src="/ul-certification.svg" className="w-20 flex-shrink-0" />
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
              <img src="/client-support.svg" className="w-20 flex-shrink-0" />
            </div>

            <div className="flex max-w-4xl">
              <img src="/industry-4.svg" className="w-20 flex-shrink-0" />
              <div className="ml-8">
                <h3 className="mb-1 text-xl font-semibold">Industria 4.0</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, laborum. Dolor necessitatibus dolores doloribus maxime, minima laborum maiores hic vitae commodi at laboriosam, modi impedit dolorem neque eos labore. Quasi?</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SectionSectors />

      <Partners />
    </>
  )
}

export default Home;

const getStaticProps = makeStaticProps(['common', 'home']);
export { getStaticPaths, getStaticProps };

