import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '../../components/Button';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const inputClasses = 'py-3 px-4 w-full outline outline-1 outline-gray-300 focus:outline-dielle rounded-sm';

const Home: NextPage = () => {
  const { t } = useTranslation(['common', 'contact']);
  const router = useRouter();

  return (
    <PageLayout>
      <Head>
        <title>{`${t('companyName')} - ${t('companyMotto')}`}</title>
      </Head>

      <PageHeader imgSrc="/contact.jpg" imgPosition={60} />

      <section className="-mt-60 sm:-mt-40 px-6">
        <div className="mx-auto p-6 sm:p-12 max-w-[750px] bg-white border border-gray-300 rounded-sm">
          <h1 className="font-medium text-dielle">{t('contact:title1')}</h1>
          <h2 className="mt-2 text-3xl sm:text-4xl">{t('contact:title2')}</h2>
          <p className="mt-4 font-light">
            {t('contact:desc')}
          </p>

          <div className="mt-8 flex items-center hover:opacity-80">
            <MailIcon className="w-6 p-1 text-white bg-dielle rounded-sm" />
            <a
              className="ml-4 text-dielle font-medium"
              href={`mailto:${t('companyEmail')}`}>
              {t('companyEmail')}
            </a>
          </div>
          <div className="mt-4 flex items-center">
            <LocationMarkerIcon className="w-6 p-1 text-white bg-dielle rounded-sm" />
            <div className="ml-4 text-dielle font-medium">
              Galileo Galilei 1, 35015 Galliera Veneta, Padova, Italy
            </div>
          </div>

          <form className="mt-10 w-full space-y-4 sm:space-y-5">
            <div className="sm:flex w-full space-y-4 sm:space-x-5 sm:space-y-0">
              <input className={inputClasses} type="text" placeholder={t('contact:form:firstName')} />
              <input className={inputClasses} type="text" placeholder={t('contact:form:lastName')} />
            </div>
            <div className="sm:flex w-full space-y-4 sm:space-x-5 sm:space-y-0">
              <input className={inputClasses} type="text" placeholder={t('contact:form:email')} />
              <input className={inputClasses} type="text" placeholder={t('contact:form:phoneNumber')} />
            </div>
            <textarea rows={5} className={inputClasses} placeholder={t('contact:form:text')}></textarea>

            <div className="flex space-x-2">
              <input type="checkbox" className="accent-dielle cursor-pointer"></input>
              <p className="font-light text-sm">
                {t('contact:form:privacy1')}{' '}
                <Link href={`/${router.query.locale}/privacy`}>
                  <a target="_blank" className="text-dielle font-medium">{t('contact:form:privacy2')}</a>
                </Link>.
              </p>
            </div>

            <Button size="lg" className="!w-full">Submit</Button>
          </form>
        </div>
      </section>
    </PageLayout>
  )
}

export default Home;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'contact',]);
export { getStaticPaths, getStaticProps };

