import classNames from 'classnames';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import Link from 'next/link';
import { Head } from '../../../components/Head';
import { PageHeader } from '../../../components/PageHeader';
import { PageLayout } from '../../../components/PageLayout';
import { getI18nPaths, getI18nProps } from '../../../lib/getStatic'

export const solutions = [
  { slug: 'electrical-panels', translateKey: 'panels' },
  { slug: 'onboard-installation', translateKey: 'onboard' },
  { slug: 'industrial-software', translateKey: 'software' },
  { slug: 'robotic', translateKey: 'robotic' },
];

const Job: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ slug, locale }) => {
  const { t } = useTranslation(['common', 'solutions']);

  const currKey = solutions.find((s) => s.slug === slug)?.translateKey || solutions[0].translateKey;

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <PageHeader imgSrc="/solutions.jpg" imgPosition={20} title={t('solutions:title')} />

      <section className="container my-8 sm:my-16">

        <div className="flex flex-col sm:flex-row">

          <div className="w-full sm:w-[220px] lg:w-[320px] sm:mr-[40px] lg:mr-[80px] flex-shrink-0 my-8 sm:mt-14">
            {solutions.map((item) => (
              <Link href={`/${locale}/solutions/${item.slug}`} key={item.translateKey}>
                <a className="block group py-3 sm:py-6 px-2 border-b border-b-gray-300 ">
                  <div className={classNames(
                    'text-lg lg:text-xl font-medium ',
                    'group-active:text-dielle group-hover:text-dielle',
                    item.slug === slug ? 'text-dielle' : 'text-gray-700',
                  )}>
                    {t(`solutions:${item.translateKey}`)}
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="flex-auto mt-8 sm:mt-0">
            <h2 className="text-2xl mb-6">{t(`solutions:${currKey}`)}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sed enim.
              Repellat ipsum aliquam suscipit nemo a, accusantium, laborum voluptatibus at tenetur harum consequuntur eos quasi facere quibusdam dolore dolorum.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea repellendus vitae modi sequi magni dolor numquam quasi error, saepe corrupti quibusdam incidunt mollitia dignissimos, ipsam voluptates. Natus non modi rerum?
            </p>

            <div className="mt-12 space-y-[6px]">
              <div className="flex space-x-[6px]">
                <img src="/solutions/panels.jpg" className="block flex-1 max-w-[calc(50%-3px)]" />
                <img src="/solutions/onboard.jpg" className="block flex-1 max-w-[calc(50%-3px)]" />
              </div>
              <img src="/solutions/software.jpg" className="w-full" />
            </div>


          </div>
        </div>
      </section>

    </PageLayout >

  )
}

export default Job;

const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string;

  const translateProps = await getI18nProps(ctx, ['common', 'head', 'header', 'solutions']);
  const locale = translateProps._nextI18Next.initialLocale;

  return {
    props: {
      slug,
      locale,
      ...translateProps,
    },
  };
}

const getStaticPaths: GetStaticPaths = async () => {
  const locales = getI18nPaths().map(({ params }) => params.locale);

  const paths = solutions.map((slug) => slug.slug).reduce((arr, slug) => arr.concat(
    locales.map((locale) => ({ params: { locale, slug } }))
  ), [] as Array<{ params: { slug: string, locale: string } }>)

  return {
    paths,
    fallback: false,
  };
}

export { getStaticPaths, getStaticProps };

