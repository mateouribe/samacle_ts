import { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../customElements/sectionTitle";
import Item from "./item";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: string;
};

const Context = ({ project }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText(".ctxTitle", {
      type: "words, lines",
      linesClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText(".ctxTitle", {
      type: "words, lines",
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          splitTitle.words,
          {
            y: 32,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
          }
        ),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".items-container",
          {
            opacity: 0,
            yPercent: 5,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: Expo.easeInOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-desktop px-mobile md:px-tablet lg:px-desktop"
      ref={container}
    >
      <SectionTitle
        className="text-black ctxTitle leading-[32px]"
        noMaxHeight
        text={t("studyCases.text.context.title")}
      ></SectionTitle>
      <div className="flex flex-col w-full h-full items-container">
        <Item
          title={t("studyCases.text.context.team")}
          text={t(`${project}.studyCase.meet`)}
          hasButton
        />
        <Item
          title={t("studyCases.text.context.background")}
          text={t(`${project}.studyCase.background`)}
        />
      </div>
    </section>
  );
};

export default Context;
