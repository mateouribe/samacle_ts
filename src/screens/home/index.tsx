import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { colors } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/home/hero";
import About from "../../components/home/about";
import WhyUs from "../../components/home/whyUs";
import Services from "../../components/home/services";
import Projects from "../../components/home/projects";
import Contact from "../../components/home/contact";
import SectionTitle from "../../components/customElements/sectionTitle";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const splitTitle = new SplitType(".whyUs", {
      types: ["words", "chars"],
      charClass: "blackWords",
      wordClass: "wordsParent",
    });

    const body = document.querySelector("body");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".whyUsTrigger",
        start: "top 90%",
        end: "bottom 90%",
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: 30,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
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
      <div className="px-mobile md:px-tablet lg:px-desktop pb-tablet whyUsTrigger ">
        <SectionTitle className="text-black whyUs leading-[30px]" text={text} />
      </div>
      <WhyUs />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
