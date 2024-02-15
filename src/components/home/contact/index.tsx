import { FormEvent, useLayoutEffect, useRef, useState } from "react";
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
import Alert from "../../customElements/alert";
import { useStatesContext } from "../../../context/StatesProvider";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const contactTitle = t("home.contact.title");
  const [message, setMessage] = useState("");
  const { setShowMessage } = useStatesContext();
  const [typeAlert, setTypeAlert] = useState<"success" | "error">("success");
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
            setShowMessage(true);
            setTypeAlert("success");
          },
          () => {
            setMessage("Something went wrong, please try again.");
            setShowMessage(true);
            setTypeAlert("error");
          }
        );
    }
  };

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

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
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
        ),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          splitTitle.words,
          {
            y: 39,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
          }
        ),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          splitSocialMediaItems,
          {
            y: 32,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative">
      <Section
        hasPadding
        className="flex min-h-[100vh] flex-col justify-between md:flex-row md:h-view gap-50 py-desktop contactContainer"
      >
        <div className="w-full md:w-[30%] md:h-full flex flex-row md:flex-col items-start justify-between">
          <SectionTitle
            className="text-black leading-[39px] contactTitle"
            noMaxHeight
            text={contactTitle}
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
                <ATag
                  href="tel:=15488812390"
                  colorHover="#9E9E9E"
                  className="socialMediaItem"
                >
                  +1 (548) 881-2390
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
            <Button className="mt-20" type="submit" icon="plane">
              {t("button.send")}
            </Button>
          </form>
        </div>
      </Section>
      <Alert message={message} type={typeAlert} />
    </div>
  );
};

export default Contact;
