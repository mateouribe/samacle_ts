import { useEffect, useLayoutEffect } from "react";
import { colors } from "../../utils/constants";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../../components/services/hero";
import Statistics from "../../components/services/stadistics";
import Options from "../../components/services/options";
import gsap from "gsap";
import Section from "../../components/customElements/section";
import Projects from "../../components/home/projects";
import { useLenis } from "@studio-freight/react-lenis";
import PageTransition from "../../components/global/pageTransition";

const Services = () => {
  const { t } = useTranslation();
  const lenis = useLenis(() => {
    // called every scroll
  });

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis]);

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    gsap.to(body, {
      backgroundColor: colors.white,
    });
    //scroll to top right before it mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageTransition>
      <main>
        <Helmet>
          <title>{t("seo.services.title")}</title>
          <meta
            name="description"
            content={t("seo.services.metaDescription")}
          />
          <link rel="canonical" href="/our-services" />
        </Helmet>
        <Hero />
        <Statistics />
        <Options />
        <Section className="flex flex-col bg-white pb-100 gap-50" hasPadding>
          <h4 className="text-[64px] text-black w-[80%] leading-[99%]">
            We live and breathe design, innovation, and the thrill of helping
            businesses grow.
          </h4>
          <Projects hasTitle={false} />
        </Section>
      </main>
    </PageTransition>
  );
};

export default Services;
