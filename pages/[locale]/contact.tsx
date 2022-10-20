import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { Button } from '../../components/Button';

const inputClasses = 'py-3 px-4 w-full outline outline-1 outline-gray-300 focus:outline-dielle rounded-sm';

const Home: NextPage = () => {
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
          <h1 className="font-medium">Contact us</h1>
          <h2 className="mt-2 text-4xl">Have a question for us? We&apos;ll get back to you as soon as possible.</h2>
          <p className="mt-4 font-light">
            If you need a quote, you just want to lean more about our solutions or for any question
            please compile the form below, our team of expert will take care of you.
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
              <input className={inputClasses} type="text" placeholder='First name' />
              <input className={inputClasses} type="text" placeholder='Last name' />
            </div>
            <div className="sm:flex w-full space-y-4 sm:space-x-5 sm:space-y-0">
              <input className={inputClasses} type="text" placeholder='Email' />
              <input className={inputClasses} type="text" placeholder='Phone number (optional)' />
            </div>
            <textarea rows={5} className={inputClasses} placeholder="What are you looking for?"></textarea>

            <div className="flex space-x-2">
              <input type="checkbox" className="accent-dielle cursor-pointer"></input>
              <p className="font-light text-sm">I accept the privacy policy</p>
            </div>

            <Button size="lg" className="!w-full">Submit</Button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'home',]);
export { getStaticPaths, getStaticProps };

