import { useState } from 'react';
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LocationMarkerIcon, MailIcon, CheckIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { Head } from '../../components/Head';
import { PageLayout } from '../../components/PageLayout';
import { PageHeader } from '../../components/PageHeader';
import { Button } from '../../components/Button';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import classNames from 'classnames';
import { Spinner } from '../../components/Spinner';

const inputClasses = 'py-3 px-4 w-full outline outline-1 outline-gray-300 focus:outline-dielle rounded-sm';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
  privacy: boolean;
};

const Contact: NextPage = () => {
  const { t } = useTranslation(['common', 'contact']);
  const router = useRouter();

  const { register, handleSubmit, formState: { isValid, isSubmitted, errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState<null | 'success' | 'error'>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);
      await fetch("/cgi-bin/mailer.php", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setShowPopup('success');
    } catch {
      setShowPopup('error')
    } finally {
      setIsLoading(false)
      setTimeout(() => setShowPopup(null), 4000);
    }
  }

  return (
    <PageLayout>
      <Head>
        <title>{`${t('contact:title1')} - ${t('companyName')}`}</title>
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

          <form className="mt-10 w-full space-y-4 sm:space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:flex w-full space-y-4 sm:space-x-5 sm:space-y-0">
              <input
                className={classNames(inputClasses, { '!outline-red-500': errors.firstName })}
                type="text"
                placeholder={t('contact:form:firstName')}
                {...register('firstName', { required: true })}
              />
              <input
                className={classNames(inputClasses, { '!outline-red-500': errors.lastName })}
                type="text"
                placeholder={t('contact:form:lastName')}
                {...register('lastName', { required: true })}
              />
            </div>
            <div className="sm:flex w-full space-y-4 sm:space-x-5 sm:space-y-0">
              <input
                className={classNames(inputClasses, { '!outline-red-500': errors.email })}
                type="text"
                placeholder={t('contact:form:email')}
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                  }
                })}
              />
              <input
                className={inputClasses}
                type="text"
                placeholder={t('contact:form:phoneNumber')}
                {...register('phoneNumber')}
              />
            </div>
            <textarea
              rows={5}
              className={classNames(inputClasses, { '!outline-red-500': errors.message })}
              placeholder={t('contact:form:text')}
              {...register('message', { required: true })}
            ></textarea>

            <div className="flex space-x-2">
              <input
                type="checkbox"
                className="accent-dielle cursor-pointer "
                {...register('privacy', { required: true })}
              ></input>
              <p className="font-light text-sm relative">
                {t('contact:form:privacy1')}{' '}
                <Link href={`/${router.query.locale}/privacy`}>
                  <a target="_blank" className="text-dielle font-medium">{t('contact:form:privacy2')}</a>
                </Link>
                {errors.privacy && <span className="absolute text-lg text-red-500 -right-4 -top-1">*</span>}
              </p>
            </div>

            <div className="text-sm text-center text-red-600 h-6 mt-3">
              {!isValid && isSubmitted && t('contact:form:error')}
            </div>

            <Button size="lg" className="!w-full" type="submit">
              {isLoading ? <Spinner /> : t('contact:form:submit')}
            </Button>
          </form>

          {showPopup &&
            <div className={classNames('fixed right-8 bottom-8 px-5 py-3 text-white rounded-sm shadow-sm flip-in', {
              'bg-dielle': showPopup == 'success',
              'bg-red-800': showPopup == 'error',
            })}>
              <h4 className="flex items-center mb-1">
                {showPopup === 'success'
                  ? <CheckIcon className="w-5 h-5 mr-2" />
                  : <ExclamationCircleIcon className="w-5 h-5 mr-2" />}
                {showPopup === 'success' ? t(`contact:successTitle`) : t(`contact:errorTitle`)}
              </h4>
              <p className="text-sm font-light">
                {showPopup === 'success' ? t(`contact:successMessage`) : t(`contact:errorMessage`)}
              </p>
            </div>}
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact;

const getStaticProps = makeStaticProps(['common', 'head', 'header', 'footer', 'cookies', 'contact',]);
export { getStaticPaths, getStaticProps };

