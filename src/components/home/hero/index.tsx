import { useLayoutEffect, useRef } from "react";
import Section from "../../customElements/section";
import { Expo, gsap } from "gsap";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
import Image from "../../customElements/image";
import homeHeroImage from "../../../assets/images/homeHeroImg.png";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitle = new SplitType("#heroText", {
      types: ["words", "chars"],
      charClass: "blackWords ",
      wordClass: "wordsParent",
    });

    gsap.set(".followGroup", {
      opacity: 0,
    });
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.fromTo(
        splitTitle.chars,
        {
          y: "120px",
        },
        {
          y: 0,
          duration: 2,
          ease: Expo.easeInOut,
          stagger: 0.02,
        }
      );
      tl.to(
        ".slideOut",
        {
          scaleY: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.from(
        ".coverImage",
        {
          scale: 1.3,
          duration: 2,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.fromTo(
        ".followGroup",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        "-=1.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={container}>
      <Section
        className="pt-[100px] md:pt-[200px] lg:pt-[55px] overflow-hidden relative"
        fullHeightNav
      >
        <h2
          className="text-black text-[56px] md:text-[76px] lg:text-[96px] leading-[100%] text-left overflow-hidden z-[100] relative font-extrabold px-mobile md:px-tablet lg:px-desktop "
          id="heroText"
        >
          {t("home.welcomeMessage.firstLine")}
          <br />
          {t("home.welcomeMessage.secondLine")}
        </h2>
        <div className="w-full h-full bg-red-100">
          <Image image={homeHeroImage} onLoad noHover />
        </div>
      </Section>
    </div>
  );
};

export default Hero;
