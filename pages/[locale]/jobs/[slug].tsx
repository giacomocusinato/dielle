import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import matter from 'gray-matter';
import md from 'markdown-it';
import fs from 'fs';
import { Head } from '../../../components/Head';
import { PageLayout } from '../../../components/PageLayout';
import { PageHeader } from '../../../components/PageHeader';
import { Button } from '../../../components/Button';
import { getI18nPaths, getI18nProps } from '../../../lib/getStatic'

const Job: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ job }) => {
  const { t } = useTranslation(['common', 'jobs']);

  return (
    <PageLayout>
      <Head>
        <title>{`${job.data.title} - ${t('companyName')}`}</title>
      </Head>

      <PageHeader imgSrc="/jobs.jpg" imgPosition={20} />

      <section className="-mt-60 sm:-mt-40 px-6">
        <div className="mx-auto p-6 sm:p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
          <h1 className="font-medium text-dielle">{t('jobs:title1')}</h1>
          <h2 className="mt-2 text-3xl sm:text-4xl">{job.data.title}</h2>

          <div
            className="markdown font-light"
            dangerouslySetInnerHTML={{ __html: job.content }}
          />

          <Button className="!w-full mt-8" size="lg" href={`mailto:${t('companyEmail')}`}>Invia il CV</Button>

        </div>
      </section>
    </PageLayout>
  )
}

export default Job;

const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  try {
    const file = fs.readFileSync(`jobs/${slug}.md`);
    const { data, content } = matter(file);
    const html = md({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    }).render(content);
    const job = { slug, data, content: html };

    const translateProps = await getI18nProps(ctx, ['common', 'head', 'header', 'footer', 'jobs']);

    return {
      props: {
        job,
        ...translateProps,
      },
    };
  } catch {
    return { notFound: true };
  }
}

const getStaticPaths: GetStaticPaths = async () => {
  const slugs = fs.readdirSync('jobs')
    .map((fileName) => fileName.replace('.md', ''));
  const locales = getI18nPaths().map(({ params }) => params.locale);

  const paths = slugs.reduce((arr, slug) => arr.concat(
    locales.map((locale) => ({ params: { locale, slug } }))
  ), [] as Array<{ params: { slug: string, locale: string } }>)

  return {
    paths,
    fallback: false,
  };
}

export { getStaticPaths, getStaticProps };

