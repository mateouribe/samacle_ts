import { useLayoutEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import Image from "../../customElements/image";
import Section from "../../customElements/section";
import services_main from "../../../assets/images/services_main.jpg";
import SplitType from "split-type";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleTop = new SplitType("#servicesTextTop", {
      types: ["words", "chars"],
      charClass: "blackWords",
      wordClass: "wordsParent",
    });
    const splitTitleBottom = new SplitType("#servicesTextBottom", {
      types: ["words", "chars"],
      charClass: "",
      wordClass: "wordsParent",
    });

    const ctx = gsap.context(() => {
      gsap.set(".servicesMainImg", {
        scale: 0.9,
      });
      const tl = gsap.timeline({});
      tl.fromTo(
        [splitTitleTop.chars, splitTitleBottom.chars],
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
      ScrollTrigger.create({
        trigger: ".imgTriggerS",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 1.5,
        animation: gsap.to(".servicesMainImg", {
          scale: 1,
        }),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Section>
        <h2
          className="text-black font-black text-[30px] md:text-[50px] lg:text-[70px] px-mobile md:px-tablet lg:px-desktop leading-[99.2%] mt-50"
          id="servicesTextTop"
        >
          {t("services.welcomeMessage.top")}
        </h2>
        <h2
          className="text-black font-black text-[30px] md:text-[50px] lg:text-[70px] px-mobile md:px-tablet lg:px-desktop leading-[99.2%] mb-50"
          id="servicesTextBottom"
        >
          {t("services.welcomeMessage.bottom")}
        </h2>
        <div className="w-full h-[80vh] imgTriggerS">
          <div className="relative w-full h-full servicesMainImg">
            <Image image={services_main} onLoad noHover />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
