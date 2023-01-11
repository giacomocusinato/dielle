import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const Privacy: NextPage = () => {
  const { t } = useTranslation(['common', 'head', 'header']);

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <div className="absolute bg-dielle opacity-20 w-full h-[450px] -z-10"></div>

      <section className="py-20 px-6">
        <div className="mx-auto p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
          <h1 className="font-medium">Privacy policy</h1>
          <h2 className="mt-2 text-4xl">Have a question for us? We&apos;ll get back to you as soon as possible.</h2>
          <p className="mt-4 font-light">
            If you need a quote, you just want to lean more about our solutions or for any question
            please compile the form below, our team of expert will take care of you.
          </p>

        </div>
      </section>

    </PageLayout>
  )
}

export default Privacy;

const getStaticProps = makeStaticProps(['common', 'head', 'header']);
export { getStaticPaths, getStaticProps };

