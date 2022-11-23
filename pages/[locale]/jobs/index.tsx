import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from 'next/link';
import { Head } from '../../../components/Head';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import { getI18nProps, getStaticPaths } from '../../../lib/getStatic'
import matter from 'gray-matter';
import fs from 'fs';

const Jobs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ jobs }) => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>
      <Header />

      <div className="absolute bg-dielle opacity-20 w-full h-[450px] -z-10"></div>

      <section className="py-10 sm:py-20 px-6">
        <div className="mx-auto p-6 sm:p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
          <h1 className="font-medium text-dielle">Work with us</h1>
          <h2 className="mt-2 text-4xl">Scopri tutti le offerte di lavoro disponibili</h2>
          <p className="mt-4 mb-0 font-light">
            Siamo sempre alla ricerca di nuovo personale, non esitare a inviarci il tuo curriculumn
            anche se la tua figura non è elencata tra le posizioni aperte!
          </p>

          <div className="flex flex-col space-y-4 my-8">
            {jobs.map(({ slug, data }: any) => (
              <Link href={`/jobs/${slug}`} key={slug}>
                <a>
                  <div className="flex items-center justify-between border border-gray-200 p-3">
                    <h3 className="text-dielle font-semibold">{data.title}</h3>
                    <ArrowRightIcon className="w-5 text-gray-300" />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <h2 className="mt-2 text-2xl">Candidatura libera</h2>
          <p className="mt-4 mb-0 font-light">
            Non c'è la posizione che fa per te? Inviaci una candidatura libera tramite il pulsante qui sotto.
            Siamo sempre alla ricerca di personale di ogni esperienza...
          </p>
          <Button className="!w-full mt-8" size="lg" href={`mailto:${t('companyEmail')}`}>Invia il CV</Button>
        </div>
      </section>

      <Footer />
    </>
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

  const translateProps = await getI18nProps(ctx, ['common', 'head', 'header']);

  return {
    props: {
      jobs,
      ...translateProps,
    },
  };
}

export { getStaticPaths, getStaticProps };
