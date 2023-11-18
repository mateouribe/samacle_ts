import { useLayoutEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import { useTranslation } from "react-i18next";
import SplitType from "split-type";
type Props = {
  project: string;
};

const Header = ({ project }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitle = new SplitType(".projectTitle", {
      types: ["words", "chars"],
      charClass: "blackWords ",
      wordClass: "wordsParent",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});
      tl.fromTo(
        splitTitle.chars,
        {
          y: "150px",
        },
        {
          y: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
          stagger: 0.025,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full min-h-[50vh] pt-desktop pb-mobile px-mobile md:px-tabler lg:px-desktop relative"
      ref={container}
    >
      <h5 className="text-[65px] md:text-[80px] lg:text-[90px] text-black font-medium uppercase w-full projectTitle leading-[90%]">
        {t(`${project}.info.title`)} <br /> ©{t(`${project}.info.date`)}
      </h5>
    </div>
  );
};

export default Header;
