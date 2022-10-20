import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button } from '../Button';

export const Contact = () => {
  const { t } = useTranslation(['common']);

  return (
    <section id="contats">
      <div className="container flex justify-between py-20">
        <div className="max-w-[600px]">
          <div className="text-4xl">Restiamo in <span className="text-dielle">contatto</span></div>
          <p className="my-8">
            Non esitare a contattarci se desideri ricevere ulteriori informazioni sui nostri servizi.
            Il nostro personale qualificato risponderà ad ogni vostra domanda e vi indicherà la soluzione più adeguata al vostro bisogno.
          </p>
          <Button size="lg">Contattaci</Button>
        </div>

        <div className="max-w-[600px] text-right">
          <div className="text-4xl"><span className="text-dielle">Lavora</span> con noi</div>
          <p className="my-8">
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