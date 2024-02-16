import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { colors, projects } from "../../utils/constants";
import Header from "../../components/studyCase/header";
import Context from "../../components/studyCase/context";
import Image from "../../components/customElements/image";
import Development from "../../components/studyCase/development";
import Design from "../../components/studyCase/design";
import DesignSystem from "../../components/studyCase/designSystem";
import ClientsReview from "../../components/studyCase/clientsReview";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useLenis } from "@studio-freight/react-lenis";
import PageTransition from "../../components/global/pageTransition";

const StudyCase = () => {
  const { link } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  const { t } = useTranslation();
  const item = useRef(null || `studyCases.projects.project${project?.id}`);
  const lenis = useLenis(() => {
    // called every scroll
  });

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis]);

  useLayoutEffect(() => {
    const project = projects.find((project) => project.info.link === link);

    project && setProject(project);
    item.current = `studyCases.projects.project${project?.id}`;
    setIsLoaded(true);
  }, [link]);

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      gsap.to(body, {
        backgroundColor: colors.white,
      });

      //scroll to top right before it mounts
      window.scrollTo(0, 0);

      if (isLoaded) {
        gsap.set(".projectMainImg", {
          scale: 0.9,
        });
        ScrollTrigger.create({
          trigger: ".imgTrigger",
          start: "top 50%",
          end: "bottom 0%",
          scrub: 1.5,
          animation: gsap.to(".projectMainImg", {
            scale: 1,
          }),
        });
      }
    }, container);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <PageTransition>
      <main ref={container}>
        <Helmet>
          <title>Samacle - {t(`${item.current}.info.title`)}</title>
          <meta
            name="description"
            content={`Samacle - ${t(`${item.current}.info.title`)}: ${t(
              "seo.studyCases.metaDescription"
            )}`}
          />
          {/* <link rel="canonical" href="/our-projects/study-case/" /> */}
        </Helmet>
        {isLoaded && (
          <>
            <Header project={item.current} />
            <div className="w-full h-[80vh] imgTrigger">
              <div className="relative w-full h-full projectMainImg">
                <Image image={project?.studyCase.image} onLoad noHover />
              </div>
            </div>
            <Context project={item.current} />
            <Development project={project} item={item.current} />
            <Design project={project} />
            <DesignSystem project={project} />
            <ClientsReview project={item.current} />
          </>
        )}
      </main>
    </PageTransition>
  );
};

export default StudyCase;
