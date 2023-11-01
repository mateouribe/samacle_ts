import { useLayoutEffect, useRef } from "react";
import { colors } from "../../../../utils/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../../../customElements/button";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  text: string;
  bgColor: string;
  backToWhite?: boolean;
  className?: string;
};

const Desktop = ({ title, text, bgColor, backToWhite, className }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    gsap.to(body, {
      overwrite: "auto",
    });
    const noVisible = document.querySelectorAll(".no-visible");
    const turnBlue = document.querySelectorAll(".turn-blue");
    const turnBeige = document.querySelectorAll(".turn-beige");

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "bottom 80%",
        onToggle: (self) => {
          // whenever we enter a section from either direction (scrolling up or down), animate to its color
          if (self.isActive) {
            gsap.to("body", {
              backgroundColor: bgColor,
              overwrite: "auto",
            });
            gsap.to(noVisible, {
              opacity: 0.1,
            });
            gsap.to(turnBlue, {
              backgroundColor: "#E3F9FC",
            });
          } else if (backToWhite) {
            gsap.to("body", {
              backgroundColor: colors.white,
              overwrite: "auto",
            });
            gsap.to(noVisible, {
              opacity: 1,
            });
            gsap.to(turnBlue, {
              backgroundColor: colors.white,
            });
            gsap.to(turnBeige, {
              backgroundColor: colors.beige,
            });
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [backToWhite, bgColor]);

  return (
    <div
      className={`desktopContentSection h-view flex flex-col justify-center gap-50 ${className}`}
      ref={container}
      data-color={bgColor}
    >
      <div className="flex flex-col gap-5">
        <h3 className="font-medium text-black text-subtitleTablet">{title}</h3>
        <p className="text-black">{text}</p>
      </div>
      <Button navigateTo="/contact-us">{t("button.becomeClient")}</Button>
    </div>
  );
};

export default Desktop;
