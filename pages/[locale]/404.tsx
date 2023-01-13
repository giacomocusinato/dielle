import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { Button } from '../../components/Button';
import { BrandTrans } from '../../components/BrandTrans/BrandTrans';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const NotFound: NextPage = () => {
  const { t } = useTranslation(['common', '404']);
  const router = useRouter();

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <hr />

      <section className="flex-1 flex flex-col items-center justify-center my-10">

        <img src="/cables3.jpg" className="w-[650px]" />
        <h2 className="text-4xl text-medium text-center">
          <BrandTrans i18nKey="404:message"></BrandTrans>
        </h2>

        <Button href={`/${router.query.locale}/`} size="lg" className="mt-10">{t('404:backHome')}</Button>
      </section>
    </PageLayout >
  )
}

export default NotFound;

const getStaticProps = makeStaticProps(['common', 'head', 'header', '404',]);
export { getStaticPaths, getStaticProps };

