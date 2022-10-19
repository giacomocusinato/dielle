import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { PlusIcon } from "@heroicons/react/solid";
import { HeroLogo } from "../HeroLogo";

export const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <section id="hero" className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video className="absolute min-w-full min-h-full object-cover -z-50 brightness-50" autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <HeroLogo />
      </section>

      <section className="container mx-auto py-20 px-8 xl:px-40">
        <p className="text-4xl">
          <span className="text-dielle">Lorem Ipsum</span> dolor sit amet consectetur adipisicing elit.
          Ullam voluptatem ipsum repudiandae sint accusamus deserunt, vitae rem natus enim reprehenderit cumque dolores necessitatibus commodi soluta alias dicta tempore ipsa ab.
        </p>
        {showMore ? <p className="mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero numquam expedita, labore ipsam ratione minus eum cumque optio at inventore error fugiat provident commodi? Necessitatibus exercitationem laborum animi officia inventore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ipsum quam dolor, dolorum officia earum. Provident, assumenda architecto molestias, est quidem voluptate, incidunt iusto recusandae aliquam nesciunt ex voluptas doloremque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorum iste at ea, assumenda, nam consequatur odit nihil eum eius labore possimus. Harum accusamus, quaerat officia tempore quia temporibus soluta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, dolorum iste at ea, assumenda, nam consequatur odit nihil eum eius labore possimus. Harum accusamus, quaerat officia tempore quia temporibus soluta.
        </p> : <a
          className="mt-8 text-2xl text-dielle flex items-center"
          role="button"
          onClick={() => setShowMore(true)}>
          <PlusIcon className="w-5 h-5 mr-2" />
          {t("home:showMore")}
        </a>}
      </section>
    </>
  );
}