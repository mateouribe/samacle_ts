import { useLayoutEffect, useRef } from "react";
import Button from "../../../customElements/button";
import Image from "../../../customElements/image";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: string;
  item: string;
  index: number;
};

const Item = ({ image, item, index }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: index === 0 ? "top 120%" : "top 120%",
        end: index === 0 ? "bottom 120%" : "bottom 120%",
        animation: gsap.fromTo(
          ".itemText",
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            delay: 0.8,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      className="flex flex-col w-full gap-20 md:flex-row md:gap-0"
      key={index}
      ref={container}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 h-[80vh] bg-lightGray ${
          index % 2 !== 0 ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <Image
          image={image}
          position={
            index === 0
              ? {
                  start: "top 120%",
                  end: "bottom 120%",
                }
              : {
                  start: "top 120%",
                  end: "bottom 120%",
                }
          }
          duration={2}
          noHover
        />
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-1/2 py-0 md:py-50 px-mobile md:px-tablet lg:px-desktop flex flex-col gap-50 itemText ${
          index % 2 !== 0 ? "order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="flex flex-col gap-20">
          <h5 className="text-[20px] text-black">
            {t(`${item}.studyCase.development.${index}.title`)}
          </h5>
          <p className="text-black">
            {t(`${item}.studyCase.development.${index}.description`)}
          </p>
        </div>

        <Button navigateTo="/contact-us">{t("button.becomeClient")}</Button>
      </div>
    </div>
  );
};

export default Item;
