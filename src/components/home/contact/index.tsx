import { FormEvent, useLayoutEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Input from "../../customElements/input";
import ATag from "../../customElements/aTag";
import { useTranslation } from "react-i18next";
import Section from "../../customElements/section";
import SocialMedia from "../../global/socialMedia";
import SectionTitle from "../../customElements/sectionTitle";
import Button from "../../customElements/button";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const contactTitle = t("home.contact.title");

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
          (result) => {
            //TODO: show success message
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 90%",
        end: "bottom 90%",

        animation: gsap.fromTo(
          ".contactContainer",
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Section
        hasPadding
        className="flex min-h-[100vh] flex-col justify-between md:flex-row md:h-view gap-50 py-desktop contactContainer"
      >
        <div className="w-full md:w-[30%] md:h-full flex flex-row md:flex-col items-start justify-between">
          <SectionTitle
            className="text-black leading-[90%]"
            noMaxHeight
            text={contactTitle}
          ></SectionTitle>

          <div className="flex flex-col gap-20">
            <ul className="text-black">
              <li>
                <ATag href="mailto:team@samacle.com" colorHover="#9E9E9E">
                  team@samacle.com
                </ATag>
              </li>
              <li>
                <ATag href="tel:=14375186019" colorHover="#9E9E9E">
                  +1 (437) 518-6019
                </ATag>
              </li>
              <li>
                <ATag href="tel:=14374730048" colorHover="#9E9E9E">
                  +1 (437) 473-0048
                </ATag>
              </li>
              <li>
                <ATag href="/" colorHover="#9E9E9E">
                  Waterloo, ON, Canada.
                </ATag>
              </li>
            </ul>
            <ul className="flex gap-5">
              <SocialMedia color={colors.gray} bgColor="#ECECEC" />
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-center gap-30">
          <h3 className="text-black text-text md:text-subtitleTablet">
            {t("home.contact.formTitle")}
          </h3>
          <form
            className="flex flex-col w-full gap-10"
            onSubmit={sendEmail}
            ref={form}
          >
            <Input
              name="user_name"
              type="text"
              label="Name"
              placeholder="Type your name"
              required
            />
            <Input
              name="user_email"
              type="email"
              label="Email"
              placeholder="Type your email"
              required
            />
            <Input
              name="message"
              type="text"
              label="Message"
              placeholder="What's on your mind?"
              textarea
              required
            />
            <Button className="mt-20" type="submit">
              {t("button.send")}
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
