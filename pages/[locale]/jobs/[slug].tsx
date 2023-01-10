import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { getI18nPaths, getI18nProps } from '../../../lib/getStatic'
import { Head } from '../../../components/Head';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import matter from 'gray-matter';
import md from 'markdown-it';
import fs from 'fs';

const Job: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ job }) => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <div className="flex flex-col h-screen">
        <Header />

        <div className="relative flex-1">

          <div className="absolute bg-dielle opacity-20 w-full h-[450px] -z-10"></div>

          <section className="py-10 sm:py-20 px-6">
            <div className="mx-auto p-6 sm:p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
              <h1 className="font-medium text-dielle">Work with us</h1>
              <h2 className="mt-2 text-4xl">{job.data.title}</h2>

              <div
                className="markdown font-light"
                dangerouslySetInnerHTML={{ __html: job.content }}
              />

              <Button className="!w-full mt-8" size="lg" href={`mailto:${t('companyEmail')}`}>Invia il CV</Button>

            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
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

    const translateProps = await getI18nProps(ctx, ['common', 'head', 'header']);

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

