import { useLayoutEffect, useRef } from "react";
import Button from "../../../customElements/button";
import LineTitle from "../../../customElements/lineTitle";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  text: string;
  hasButton?: boolean;
  pageUrl?: string;
};

const Item = ({ title, text, hasButton = false, pageUrl }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".contextContainer",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
            onComplete: () => {
              gsap.to(".contextContainer", {
                clearProps: "all",
              });
            },
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full h-full py-tablet border-b-[1px] border-lightGray flex justify-end"
      ref={container}
    >
      <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-20 md:gap-50">
        <div className="w-full md:w-[70%] flex flex-col gap-50 contextContainer">
          <span className="text-sm text-main md:hidden">{title}</span>
          <p className="text-black w-full md:w-[90%] text-left">{text}</p>
          {hasButton && (
            <Button
              icon="eye"
              onClick={() => {
                window.open(pageUrl, "_blank");
              }}
            >
              {t("button.visitSite")}
            </Button>
          )}
        </div>
        <LineTitle title={title} />
      </div>
    </div>
  );
};

export default Item;
