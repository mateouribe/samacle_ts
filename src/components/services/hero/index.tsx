import { useLayoutEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import Image from "../../customElements/image";
import Section from "../../customElements/section";
import rocker_services from "../../../assets/images/rocket_services.png";
import SplitType from "split-type";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitle = new SplitType("#servicesText", {
      types: ["words", "chars"],
      charClass: "blackWords swearFont ",
      wordClass: "wordsParent",
    });

    const ctx = gsap.context(() => {
      gsap.set(".servicesMainImg", {
        scale: 0.9,
      });
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
      <Section
        fullHeightNav
        className="flex flex-col items-end py-desktop md:pb-tablet md:pt-[100px] "
      >
        <h4
          className="text-[20px] lg:text-[30px] font-swearDisplay leading-[95%] text-black text-right w-[80%] md:w-1/2 px-mobile md:px-tablet lg:px-desktop"
          id="servicesText"
        >
          {t("services.welcomeMessage")}
        </h4>
        <div className="w-full h-[80vh] imgTriggerS">
          <div className="relative w-full h-full servicesMainImg">
            <Image image={rocker_services} onLoad noHover />
          </div>
        </div>
      </Section>{" "}
    </div>
  );
};

export default Hero;
