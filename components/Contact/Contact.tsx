import React from 'react';
import { useTranslation } from 'next-i18next';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Button } from '../Button';
import { withFadeInContent } from '../FadeInContent';

export const _Contact = () => {
  const { t } = useTranslation(['common']);

  return (
    <section id="jobs">
      <div className="container py-10 sm:py-20">
        <h2 className="mb-10 sm:mb-16 text-4xl text-medium text-center">
          <span className="text-dielle">Lavora</span> con noi
        </h2>

        <div className="flex justify-center">
          <img src="cables2.jpg" className="w-[450px] mr-8" />
          <div className="max-w-[600px] mt-12 sm:mt-0 ">

            <p className="my-4">
              Siamo sempre alla ricerca di personale.
              <br />
              Vuoi far parte del nostro team? Consulta le posizione aperte ed inviaci il tuo CV.
            </p>
            <Button className="mt-6" rounded stroked size="md" href="/jobs">
              Vedi posizioni aperte
              <ArrowRightIcon className="w-5 ml-4" />
            </Button>


            <p className="mt-16">
              Qualche dubbio o richiesta specifica? Contattaci tramite la apposita form.
              Il nostro personale risponderà ad ogni vostra domanda e vi indicherà la soluzione più adeguata al vostro bisogno.
            </p>
            <Button className="mt-6" rounded stroked size="md" href="/contact">
              Contattaci
              <ArrowRightIcon className="w-5 ml-4" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

export const Contact = withFadeInContent(_Contact);