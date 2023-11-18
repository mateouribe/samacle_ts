import { useLayoutEffect, useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../../components/customElements/section";
import SectionTitle from "../../components/customElements/sectionTitle";
import ATag from "../../components/customElements/aTag";
import SocialMedia from "../../components/global/socialMedia";
import Input from "../../components/customElements/input";
import Button from "../../components/customElements/button";
import { Expo, gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { colors } from "../../utils/constants";
import Alert from "../../components/customElements/alert";
import { useStatesContext } from "../../context/StatesProvider";
import SplitType from "split-type";

const Contact = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const { setShowMessage } = useStatesContext();
  const [typeAlert, setTypeAlert] = useState<"success" | "error">("success");

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

  const form = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_m9fncgb",
          "template_1vhitae",
          form.current,
          "cUNHhLO-5dUz6GaiH"
        )
        .then(
          () => {
            setMessage("We've got it from here! Mesage sent.");
            setTypeAlert("success");
            setShowMessage(true);
          },
          () => {
            setMessage("Something went wrong, please try again.");
            setTypeAlert("error");
            setShowMessage(true);
          }
        );
    }
  };

  return (
    <main ref={container} className="relative">
      <Helmet>
        <title>{t("seo.contact.title")}</title>
        <meta name="description" content={t("seo.contact.metaDescription")} />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <Section
        hasPadding
        className="flex min-h-[100vh] flex-col justify-between md:flex-row md:h-view gap-50 py-desktop contactContainer"
      >
        <div className="w-full md:w-[30%] md:h-full flex flex-row md:flex-col items-start justify-between">
          <SectionTitle
            className="text-black leading-[39px] contactTitle"
            noMaxHeight
            text={t("contact.welcomeMessage")}
          ></SectionTitle>

          <div className="flex flex-col gap-20">
            <ul className="text-black">
              <li className="socialMediaItem wordsParent">
                <ATag
                  href="mailto:team@samacle.com"
                  colorHover="#9E9E9E"
                  className="socialMediaItem"
                >
                  team@samacle.com
                </ATag>
              </li>
              <li className="socialMediaItem wordsParent">
                <ATag
                  href="tel:=14375186019"
                  colorHover="#9E9E9E"
                  className="socialMediaItem"
                >
                  +1 (437) 518-6019
                </ATag>
              </li>
              <li className="socialMediaItem wordsParent">
                <ATag
                  href="tel:=14374730048"
                  colorHover="#9E9E9E"
                  className="socialMediaItem"
                >
                  +1 (437) 473-0048
                </ATag>
              </li>
              <li className="socialMediaItem wordsParent">
                <ATag href="/" colorHover="#9E9E9E" className="socialMediaItem">
                  Waterloo, ON, Canada.
                </ATag>
              </li>
            </ul>
            <ul className="flex gap-5">
              <SocialMedia color={colors.gray} bgColor="#ECECEC" />
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-center gap-30 frmContainer">
          <h4 className="text-black text-text md:text-subtitleTablet">
            {t("contact.formTitle")}
          </h4>
          <form
            className="flex flex-col w-full gap-10"
            onSubmit={sendEmail}
            ref={form}
          >
            <Input
              name="user_name"
              type="text"
              label="Name"
              placeholder={t("contact.placeholder.name")}
              required
            />
            <Input
              name="user_email"
              type="email"
              label="Email"
              placeholder={t("contact.placeholder.email")}
              required
            />
            <Input
              name="message"
              type="text"
              label="Message"
              placeholder={t("contact.placeholder.message")}
              textarea
              required
            />
            <Button className="mt-20" type="submit" icon="plane">
              {t("button.send")}
            </Button>
          </form>
        </div>
      </Section>

      <Alert type={typeAlert} message={message} />
    </main>
  );
};

export default Contact;
