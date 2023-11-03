import { useLayoutEffect, useRef } from "react";
import Section from "../../components/customElements/section";
import SectionTitle from "../../components/customElements/sectionTitle";
import { colors, projects } from "../../utils/constants";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Item from "../../components/projects/item";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const itemsTitle: string[][] = [];

    // Split title
    gsap.utils.toArray(".projectsPageTitle").forEach((el) => {
      const splitTitleParent = new (window as any).SplitText(el, {
        type: "words",
        wordsClass: "wordsParent",
      });

      const splitTitle = new (window as any).SplitText(el, {
        type: "words",
        wordsClass: "wordsBlack",
      });

      itemsTitle.push(splitTitle.words);
    });

    //Split text
    const splitTextParent = new (window as any).SplitText(".projectPageText", {
      type: "words",
      wordsClass: "wordsParent",
    });

    const splitText = new (window as any).SplitText(".projectPageText", {
      type: "words",
      wordsClass: "wordsBlack",
    });

    const body = document.querySelector("body");

    const ctx = gsap.context(() => {
      gsap.set(".animateFirstProject", {
        opacity: 0,
        yPercent: 100,
      });

      const tl = gsap.timeline({});

      tl.fromTo(
        itemsTitle,
        {
          y: 48,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: Expo.easeOut,
        }
      );
      tl.fromTo(
        splitText.words,
        {
          y: 48,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.01,
          ease: Expo.easeOut,
        },
        "-=1.7"
      );
      tl.to(
        ".animateFirstProject",
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.5,
          ease: Expo.easeOut,
        },
        "-=1.5"
      );

      gsap.to(body, {
        backgroundColor: colors.white,
      });
      //scroll to top right before it mounts
      window.scrollTo(0, 0);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={container}>
      <Helmet>
        <title>{t("seo.projects.title")}</title>
        <meta name="description" content={t("seo.projects.metaDescription")} />
        <link rel="canonical" href="/our-projects" />
      </Helmet>
      <Section
        hasPadding
        className="flex flex-col py-desktop md:py-desktop gap-100"
      >
        <div className="flex items-center justify-between w-full">
          <div>
            <SectionTitle
              className="text-black italic leading-[100%] projectsPageTitle"
              text={t("projects.welcomeMessage.one")}
            ></SectionTitle>
            <SectionTitle
              className="text-black italic leading-[100%] projectsPageTitle"
              text={t("projects.welcomeMessage.two")}
            ></SectionTitle>
            <SectionTitle
              className="text-black italic leading-[100%] projectsPageTitle"
              text={t("projects.welcomeMessage.three")}
            ></SectionTitle>
          </div>
          <p className="w-[70%] md:w-[50%] lg:w-[30%] text-black projectPageText leading-[90%]">
            {t("projects.welcomeMessage.text")}
          </p>
        </div>
        {projects.map((project, index) => (
          <Item project={project} index={index} key={index} />
        ))}
      </Section>
    </main>
  );
};

export default Projects;
