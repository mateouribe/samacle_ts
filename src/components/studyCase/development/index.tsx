import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../../customElements/sectionTitle";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import Item from "./item";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: Project | null;
  item: string;
};

const Development = ({ project, item }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (project !== undefined && project !== null) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      const splitTitle = new SplitType(".developmentTitle", {
        types: ["words", "chars"],
        charClass: "blackWords",
        wordClass: "wordsParent",
      });

      //TODO: Check if inline works
      const splitChallenges = new SplitType(".developmentTitle", {
        types: ["words", "lines"],
        lineClass: "wordsParent",
      });

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          animation: gsap.fromTo(
            splitTitle.chars,
            {
              y: 39,
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
          trigger: ".challenge-container",
          start: "top 80%",
          end: "bottom 80%",
          animation: gsap.fromTo(
            splitChallenges.words,
            {
              y: 100,
            },
            {
              y: 0,
              duration: 1.2,
              stagger: 0.007,
              ease: Expo.easeInOut,
            }
          ),
        });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section className="flex flex-col py-tablet gap-50" ref={container}>
      {isLoaded && (
        <>
          <SectionTitle
            className="text-black pl-mobile md:pl-tablet lg:pl-desktop developmentTitle leading-[39px]"
            text={t("studyCases.text.development.title")}
          ></SectionTitle>
          <div className="flex flex-col w-full gap-100 md:gap-0">
            {project?.studyCase.development.map((element, index) => (
              <Item
                index={index}
                item={item}
                key={index}
                image={element.image}
              />
            ))}
            <div className="challenge-container px-mobile md:px-tablet lg:px-desktop py-desktop">
              <span className="text-black  text-[25px] leading-[40px] challenge_text">
                {t(`${item}.studyCase.challenges`)}
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Development;
