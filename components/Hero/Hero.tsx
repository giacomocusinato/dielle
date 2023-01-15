import React, { useEffect } from 'react';
import { HeroLogo } from '../HeroLogo';
import { BrandTrans } from '../BrandTrans/BrandTrans';
import { FadeInContent } from '../FadeInContent';

export const Hero = () => {
  useEffect(() => {
    const el = document.querySelector('video');
    if (el) {
      el.playbackRate = 0.8;
    }
  }, [])

  return (
    <>
      <section id="hero" className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden -z-50 bg-black">
        <video className="absolute min-w-full min-h-full object-cover -z-50 brightness-[0.7] grayscale-[0.2] blur-sm" autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute min-w-full min-h-full bg-dielle/10 -z-40"></div>
        <HeroLogo />
      </section>

      <FadeInContent>
        <section className="container mx-auto py-10 sm:py-20 px-8 xl:px-40">
          <p className="text-xl sm:text-2xl lg:text-4xl">
            <BrandTrans i18nKey="home:hero" />
          </p>
          {/* {showMore ? <p className="mt-8">
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
        </a>} */}
        </section>
      </FadeInContent>
    </>
  );
}