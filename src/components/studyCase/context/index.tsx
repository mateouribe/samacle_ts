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
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".ctxTitle",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
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
        className="text-black ctxTitle"
        noMaxHeight
        text={t("studyCases.text.context.title")}
      ></SectionTitle>
      <div className="flex flex-col w-full h-full">
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
