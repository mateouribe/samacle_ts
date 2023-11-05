import { useLayoutEffect, useRef } from "react";
import Button from "../../customElements/button";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import fingerPrint from "../../../assets/images/fingerPrint.png";

type Props = {
  project: string;
};

const ClientsReview = ({ project }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  //TODO: Create client review on locales
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".clientOpinion",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="py-desktop px-mobile md:px-tablet lg:px-desktop flex flex-col gap-100 min-h-[90vh] justify-center items-center relative"
      ref={container}
    >
      <div className="flex flex-col gap-5 clientOpinion z-[9999]">
        <p className="text-[22px] md:text-[32px] uppercase text-beige">
          <span className="text-[50px] leading-[0px]">"</span>
          {t(`${project}.studyCase.clientReview.text`)}
          <span className="text-[50px] leading-[0px]">"</span>
        </p>
        <span className="text-sm text-beige">
          {t(`${project}.studyCase.clientReview.client`)}
        </span>
      </div>
      <Button className="self-start clientOpinion" navigateTo="/contact-us">
        {t("button.becomeClient")}
      </Button>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none top-1/2 left-1/2">
        <img
          src={fingerPrint}
          alt="A grey fingerprint behind a portion of text in the Samacle - Our Projects web page section."
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ClientsReview;
