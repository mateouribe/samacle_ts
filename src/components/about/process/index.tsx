import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors, processes } from "../../../utils/constants";
import { useTranslation } from "react-i18next";
import Item from "./item";
import SectionTitle from "../../customElements/sectionTitle";
import Section from "../../customElements/section";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { t } = useTranslation();
  const container = useRef(null);

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText(".processTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText(".processTitle", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const ctx = gsap.context(() => {
      changeBgColorAnimation({
        trigger: ".about_proceess-bg-trigger",
        // markers: true,
        colors: {
          enter: colors.black,
          exit: colors.white,
          menuEnter: colors.white,
          menuExit: colors.black,
        },
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        // markers: true,
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: 45,
          },
          {
            y: 0,
            duration: 1.5,
            stagger: 0.02,
            ease: Expo.easeOut,
          }
        ),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.fromTo(
          ".processesContainer",
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
            onComplete: () => {
              gsap.to(".processesContainer", {
                clearProps: "all",
              });
            },
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Section
        hasPadding
        className="w-full min-h-[100vh] md:h-view flex flex-col gap-50 about_proceess-bg-trigger"
      >
        <SectionTitle
          className="text-main processTitle"
          text={t("about.title")}
        ></SectionTitle>
        <div className="flex justify-end w-full h-full">
          <div className="w-full md:w-[80%] lg:w-[70%] h-full flex flex-col gap-50 justify-center">
            {processes.map((el, index) => (
              <Item key={index} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Process;
