import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Solutions } from '../../components/Solutions';
import { Traits } from '../../components/Traits';
import { Industries } from '../../components/Industries';
import { Partners } from '../../components/Partners';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>
      <Header />
      <Hero />
      <Solutions />
      <Traits />
      <Industries />
      <Partners />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'home',]);
export { getStaticPaths, getStaticProps };

