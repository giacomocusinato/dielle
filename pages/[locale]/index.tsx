import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { Hero } from '../../components/Hero';
import { Solutions } from '../../components/Solutions';
import { Traits } from '../../components/Traits';
import { Industries } from '../../components/Industries';
import { Partners } from '../../components/Partners';
import { Contact } from '../../components/Contact';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} | ${t('companyMotto')}`}</title>
      </Head>

      <Hero />
      <Solutions />
      <img
        src="/cables.jpg"
        className="lg:max-h-[300px] w-full"
      />
      <Traits />
      <Industries />
      <Partners />
      <Contact />
    </PageLayout>
  )
}

export default Home;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'footer', 'cookies', 'home',]);
export { getStaticPaths, getStaticProps };

