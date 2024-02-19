import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Section from "../customElements/section";
import SectionTitle from "../customElements/sectionTitle";
import ATag from "../customElements/aTag";
import SocialMedia from "../global/socialMedia";
import { colors } from "../../utils/constants";
import Input from "../customElements/input";
import Button from "../customElements/button";
import { useStatesContext } from "../../context/StatesProvider";
import Alert from "../customElements/alert";

const ContactTemplate = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const { setShowMessage } = useStatesContext();
  const [typeAlert, setTypeAlert] = useState<"success" | "error">("success");
  const [isFormLoading, setIsFormLoading] = useState(false);

  const form = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormLoading(true);
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
            setIsFormLoading(false);
            setMessage("We've got it from here! Mesage sent.");
            setShowMessage(true);
            setTypeAlert("success");
          },
          () => {
            setIsFormLoading(false);
            setMessage("Something went wrong, please try again.");
            setShowMessage(true);
            setTypeAlert("error");
          }
        );
    }
  };

  return (
    <>
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
                  colorHover="#FF000"
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
            <Button
              className="mt-20"
              type="submit"
              icon="plane"
              loading={isFormLoading}
            >
              {t("button.send")}
            </Button>
          </form>
        </div>
      </Section>
      <Alert message={message} type={typeAlert} />
    </>
  );
};

export default ContactTemplate;
