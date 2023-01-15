import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from 'next/link';
import { useRouter } from 'next/router';
import matter from 'gray-matter';
import fs from 'fs';
import { Head } from '../../../components/Head';
import { PageHeader } from '../../../components/PageHeader';
import { PageLayout } from '../../../components/PageLayout';
import { Button } from '../../../components/Button';
import { getI18nProps, getStaticPaths } from '../../../lib/getStatic'

const Jobs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ jobs }) => {
  const { t } = useTranslation(['common', 'home', 'jobs']);
  const router = useRouter();

  return (
    <PageLayout>
      <Head>
        <title>{`${t('jobs:title1')} - ${t('companyName')}`}</title>
      </Head>

      <PageHeader imgSrc="/jobs.jpg" imgPosition={20} />

      <section className="-mt-60 sm:-mt-40 px-6">
        <div className="mx-auto p-6 sm:p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
          <h1 className="font-medium text-dielle">{t('jobs:title1')}</h1>
          <h2 className="mt-2 text-3xl sm:text-4xl">{t('jobs:title2')}</h2>
          <p className="mt-4 mb-0 font-light">
            {t('jobs:desc')}
          </p>

          <div className="flex flex-col space-y-4 my-8">
            {jobs.map(({ slug, data }: any) => (
              <Link href={`/${router.query.locale}/jobs/${slug}`} key={slug}>
                <a>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <h3 className="text-dielle text-xl">{data.title}</h3>
                    <ArrowRightIcon className="w-4 text-dielle ml-2" />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <h2 className="mt-2 text-2xl">{t('jobs:application')}</h2>
          <p className="mt-4 mb-0 font-light">
            {t('jobs:applicationDesc')}
          </p>
          <Button className="!w-full mt-8" size="lg" href={`mailto:${t('companyEmail')}`}>{t('jobs:sendCV')}</Button>
        </div>
      </section>
    </PageLayout>
  )
}

export default Jobs;

const getStaticProps: GetStaticProps = async (ctx) => {
  const files = fs.readdirSync('jobs');

  const jobs = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const file = fs.readFileSync(`jobs/${fileName}`, 'utf-8');
    const { data, content } = matter(file);
    return { slug, data, content };
  });

  const translateProps = await getI18nProps(ctx, ['common', 'head', 'header', 'footer', 'cookies', 'jobs']);

  return {
    props: {
      jobs,
      ...translateProps,
    },
  };
}

export { getStaticPaths, getStaticProps };
