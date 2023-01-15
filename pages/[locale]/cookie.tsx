import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { PageHeader } from '../../components/PageHeader';
import { Button } from '../../components/Button';
import { useCookies } from '../../components/CookieBanner/CookiesContext';

const NotFound: NextPage = () => {
  const { t } = useTranslation(['common']);
  const ctx = useCookies();

  return (
    <PageLayout>
      <Head>
        <title>{`Cookie Policy - ${t('companyName')}`}</title>
      </Head>

      <PageHeader imgSrc="/policy.jpg" imgPosition={40} title="Cookie policy"></PageHeader>

      <section className="container mt-10">
        <p className="mb-2">
          This is the Cookie Policy for Dielle Impianti. If you wish to update your cookie preference click the button below.
        </p>
        <Button className="mb-6" onClick={() => ctx?.setShowBanner(true)}>Update cookie preference</Button>

        <p className="mt-3"><strong>What Are Cookies</strong></p>
        <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the sites functionality.</p>
        <p className="mt-3"><strong>How We Use Cookies</strong></p>
        <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
        <p className="mt-3"><strong>Disabling Cookies</strong></p>
        <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</p>
        <p className="mt-3"><strong>The Cookies We Set</strong></p>

        <ul>
          <li>
            <p>Forms related cookies</p>
            <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
          </li>
        </ul>
        <p className="mt-3"><strong>Third Party Cookies</strong></p>
        <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
        <ul>
          <li>
            <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
            <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
          </li>
        </ul>
        <p className="mt-3"><strong>More Information</strong></p>
        <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        <ul>
          <li>Email: <a href={`mailto:${t('companyEmail')}`} className="underline">{`${t('companyEmail')}`}</a></li>
        </ul>
      </section>
    </PageLayout>
  )
}

export default NotFound;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'cookies', 'footer',]);
export { getStaticPaths, getStaticProps };

