import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { colors } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
// import Transition from "../components/Transition";
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import WhyUs from "../../components/home/whyUs";
import Services from "../../components/home/services";
import Projects from "../../components/home/projects";
import Contact from "../../components/home/contact";
import SectionTitle from "../../components/customElements/sectionTitle";
// import WhyUs from "../components/home/whyUs/WhyUs";
// import Services from "../components/home/services/Services";
// import Projects from "../components/home/projects/Projects";
// import Contact from "../components/home/Contact";
// import SectionTitle from "../components/customElements/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText(".whyUs", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText(".whyUs", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const body = document.querySelector("body");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".whyUsTrigger",
        start: "top 85%",
        end: "bottom 85%",
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
      gsap.to(body, {
        backgroundColor: colors.white,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const { t } = useTranslation();

  const text = t("home.whyUs.title");

  return (
    <main ref={container}>
      <Helmet>
        <title>{t("seo.home.title")}</title>
        <meta name="description" content={t("seo.home.metaDescription")} />
        <link rel="canonical" href="/" />
      </Helmet>

      <Hero />
      <About />
      <div className="px-mobile md:px-tablet lg:px-desktop pb-tablet md:ob-0 whyUsTrigger">
        <SectionTitle className="whyUs text-main" text={text} />
      </div>
      <WhyUs />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
