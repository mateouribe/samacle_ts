import { useLayoutEffect, useRef } from "react";
import Section from "../../customElements/section";
import SectionTitle from "../../customElements/sectionTitle";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { colors, projects } from "../../../utils/constants";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
// import SplitText from "../../../utils/Split3.min.js";
import Item from "./item";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const leading = 39;

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText(".projectTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText(".projectTitle", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const ctx = gsap.context(() => {
      changeBgColorAnimation({
        trigger: ".projects-bg-trigger",
        colors: {
          enter: colors.white,
          exit: colors.white,
          menuEnter: colors.black,
          menuExit: colors.black,
        },
        position: {
          start: "top 30%",
          end: "bottom 30%",
        },
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: leading,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
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
        className="flex flex-col gap-50 min-h-[100vh] projects-bg-trigger"
      >
        <SectionTitle
          className={`projectTitle text-main leading-[${leading}px]`}
          text={t("home.projects.title")}
        ></SectionTitle>
        <div className="grid w-full h-full grid-cols-1 gap-100 md:gap-50 md:grid-cols-12 ">
          {projects.map((project, index) =>
            index === 0 ? (
              <Item
                key={project.id + "-" + index}
                project={project}
                alignLeft
                isFirstOne
              />
            ) : index % 2 === 0 ? (
              <Item
                key={project.id + "-" + index}
                project={project}
                alignLeft
              />
            ) : (
              <Item key={project.id + "-" + index} project={project} />
            )
          )}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
