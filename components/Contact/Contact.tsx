import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '../Button';

export const Contact = () => {
  const { t } = useTranslation(['common']);

  return (
    <section id="contats">
      <div className="container py-10 sm:py-20 sm:flex sm:justify-between">
        <div className="max-w-[600px]">
          <div className="text-4xl">Restiamo in <span className="text-dielle">contatto</span></div>
          <p className="my-4 sm:my-8">
            Non esitare a contattarci se desideri ricevere ulteriori informazioni sui nostri servizi.
            Il nostro personale qualificato risponderà ad ogni vostra domanda e vi indicherà la soluzione più adeguata al vostro bisogno.
          </p>
          <Button size="lg" href="/contact">Contattaci</Button>
        </div>

        <div className="max-w-[600px] mt-12 sm:mt-0 text-right">
          <div className="text-4xl"><span className="text-dielle">Lavora</span> con noi</div>
          <p className="my-4 sm:my-8">
            Non esitare a contattarci se desideri ricevere ulteriori informazioni sui nostri servizi.
            Il nostro personale qualificato risponderà ad ogni vostra domanda e vi indicherà la soluzione più adeguata al vostro bisogno.
          </p>
          <div className="float-right">
            <Button size="lg">Vedi offerte</Button>
          </div>
        </div>
      </div>
    </section>
  );
}