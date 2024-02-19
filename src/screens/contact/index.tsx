import { useLayoutEffect, useRef, useEffect } from "react";
import { Expo, gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/constants";
import SplitType from "split-type";
import { useLenis } from "@studio-freight/react-lenis";
import ContactTemplate from "../../components/contactTemplate";

const Contact = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  const lenis = useLenis(() => {
    // called every scroll
  });

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis]);

  useLayoutEffect(() => {
    const splitTitle = new SplitType(".contactTitle", {
      types: ["words", "lines"],
      lineClass: "wordsParent",
    });

    const socialMediaItems = document.getElementsByClassName(
      "socialMediaItem"
    ) as HTMLCollectionOf<HTMLElement>;

    const splitSocialMediaItems: HTMLElement[][] = [];

    Array.from(socialMediaItems).forEach((item: HTMLElement) => {
      const split = new SplitType(item, {
        types: "lines",
      });

      // Push the split.words to the splitMobileItems array
      if (
        split.lines !== null &&
        split.lines !== undefined &&
        split.lines.length > 0
      ) {
        splitSocialMediaItems.push(split.lines);
      }
    });

    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".frmContainer",
        {
          opacity: 0,
          yPercent: 10,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: Expo.easeInOut,
        }
      );
      tl.fromTo(
        splitTitle.words,
        {
          y: 39,
        },
        {
          y: 0,
          duration: 1.2,
          stagger: 0.01,
          ease: Expo.easeInOut,
        },
        "-=1"
      );
      tl.fromTo(
        splitSocialMediaItems,
        {
          y: 32,
        },
        {
          y: 0,
          duration: 1.2,
          stagger: 0.01,
          ease: Expo.easeInOut,
        },
        "-=1.2"
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
    <main ref={container} className="relative">
      <Helmet>
        <title>{t("seo.contact.title")}</title>
        <meta name="description" content={t("seo.contact.metaDescription")} />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <ContactTemplate />
    </main>
  );
};

export default Contact;
