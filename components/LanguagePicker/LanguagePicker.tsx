import { useState } from 'react'
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Link } from '../Link/Link';
import languageDetector from '../../lib/languageDetector';
import nextI18nextConfig from '../../next-i18next.config';

const langs = [
  { locale: 'it', label: 'Italiano', flag: '/locales/it.svg' },
  { locale: 'en', label: 'English', flag: '/locales/en.svg' },
]

export const LanguagePicker = () => {
  const router = useRouter();
  const locale = router.query.locale as string || nextI18nextConfig.i18n.defaultLocale;
  const [selectedLang, setSelectedLang] = useState(langs.find((l) => l.locale === locale));

  return (
    <Listbox
      as="div"
      className="z-10"
      value={selectedLang?.locale}
      onChange={(locale: string) => {
        languageDetector.cache && languageDetector.cache(locale);
        setSelectedLang(langs.find((l) => l.locale === locale));
      }}>
      {({ open }) => (
        <div className="relative w-fit">
          <Listbox.Button className={classNames(
            'flex items-center justify-end p-2 box-border w-fit focus:outline focus:outline-1 focus:outline-gray-200',
            { 'outline outline-1 outline-gray-200 bg-white/80 backdrop-blur-[3px]': open }
          )}>
            <img src={selectedLang?.flag} className="mr-2 w-5 h-5" />
            <span className="font-medium text-xl uppercase w-[25px]">{selectedLang?.locale}</span>
            <ChevronDownIcon className="w-5 h-5 text-dielle text-xl uppercase" />
          </Listbox.Button>
          <Transition
            className="absolute w-full box-border bg-white/80 backdrop-blur-[3px]"
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options static className="outline outline-1 outline-gray-200 focus:outline focus:outline-1 focus:outline-gray-200">
              {langs.filter((l) => l.locale !== selectedLang?.locale).map((lang) => (
                <Listbox.Option key={lang.locale} value={lang.locale}>
                  {({ active, selected }) => (
                    <Link locale={lang.locale}>
                      <a>
                        <div className={`flex items-center p-2 cursor-pointer ${active || selected ? 'bg-gray-100' : ''}`}>
                          <img src={lang?.flag} className="mr-2 w-5 h-5" />
                          <span className="font-medium text-xl uppercase w-[25px]">{lang?.locale}</span>
                        </div>
                      </a>
                    </Link>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}