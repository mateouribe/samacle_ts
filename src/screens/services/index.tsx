import { useLayoutEffect } from "react";
import { colors } from "../../utils/constants";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Hero from "../../components/services/hero";
import Statistics from "../../components/services/stadistics";
import Options from "../../components/services/options";
import gsap from "gsap";

const Services = () => {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    gsap.to(body, {
      backgroundColor: colors.white,
    });
    //scroll to top right before it mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Helmet>
        <title>{t("seo.services.title")}</title>
        <meta name="description" content={t("seo.services.metaDescription")} />
        <link rel="canonical" href="/our-services" />
      </Helmet>
      <Hero />
      <Statistics />
      <Options />
    </main>
  );
};

export default Services;
