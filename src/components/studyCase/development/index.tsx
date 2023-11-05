import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../../customElements/sectionTitle";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import Item from "./item";

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
      const splitTitleParent = new (window as any).SplitText(
        ".developmentTitle",
        {
          type: "words, chars",
          chars: "chars",
          charsClass: "wordsParent",
        }
      );

      const splitTitle = new (window as any).SplitText(".developmentTitle", {
        type: "words, chars",
        charsClass: "orangeWords",
      });

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          animation: gsap.fromTo(
            splitTitle.chars,
            {
              y: 45,
            },
            {
              y: 0,
              duration: 1,
              stagger: 0.02,
              ease: Expo.easeOut,
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
            className="text-black pl-mobile md:pl-tablet lg:pl-desktop developmentTitle"
            text={t("studyCases.text.development.title")}
          ></SectionTitle>
          <div className="flex flex-col w-full gap-100 md:gap-0">
            {project.studyCase.development.map((element, index) => (
              <Item
                index={index}
                item={item}
                key={index}
                image={element.image}
              />
            ))}
            <span className="text-black px-mobile md:px-tablet lg:px-desktop py-desktop text-[25px]">
              {t(`${item}.studyCase.challenges`)}
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export default Development;
