import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import Section from "../../customElements/section";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  useLayoutEffect(() => {
    const splitTitle = new SplitType("#aboutTitle", {
      types: ["words", "chars"],
      charClass: "wordsBlack swearFont ",
      wordClass: "wordsParent",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});
      tl.fromTo(
        splitTitle.chars,
        {
          y: "150px",
        },
        {
          y: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
          stagger: 0.008,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Section hasPadding className="py-desktop md:py-desktop lg:py-tablet">
        <h1
          className="text-[45px] md:text-[55px] lg:text-[65px] xl:text-[75px] font-swearDisplay leading-[95%] w-full lg:w-[90%] text-black "
          id="aboutTitle"
        >
          {t("about.welcomeMessage")}
        </h1>
      </Section>
    </div>
  );
};

export default Hero;
