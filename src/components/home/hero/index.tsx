import { useLayoutEffect, useRef } from "react";
import Section from "../../customElements/section";
import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { colors } from "../../../utils/constants";
import { Expo, gsap } from "gsap";
import { useTranslation } from "react-i18next";
import hero from "../../../assets/images/orange_process.png";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText("#heroText", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText("#heroText", {
      type: "words, chars",
      charsClass: "wordsBlack swearFont",
    });

    gsap.set(".followGroup", {
      opacity: 0,
    });
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.fromTo(
        splitTitle.chars,
        {
          y: "120px",
        },
        {
          y: 0,
          duration: 2,
          ease: Expo.easeInOut,
          stagger: 0.03,
        }
      );
      tl.to(
        ".slideOut",
        {
          scaleY: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.from(
        ".coverImage",
        {
          scale: 1.3,
          duration: 2,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.fromTo(
        ".followGroup",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        "-=1.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={container}>
      <Section
        className="pt-[100px] md:pt-[200px] lg:pt-[55px] overflow-hidden relative"
        fullHeightNav
        hasPadding
      >
        <h2
          className="text-black font-swearDisplay text-[80px] md:text-[100px] lg:text-[120px] xl:text-[130px] leading-[99%] text-left overflow-hidden z-[100] relative"
          id="heroText"
          dangerouslySetInnerHTML={{ __html: t("home.welcomeMessage") }}
        ></h2>

        <figure className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] lg:w-[40%] lg:h-[50%] h-[50%] origin-bottom z-[10]">
          <div className="relative w-full h-full">
            <div className="w-[calc(100%+20px)] h-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-white z-[9] origin-top slideOut overflow-hidden" />
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="w-full h-full absolute top-0 left-0 z-[5] coverImage"
                style={{
                  backgroundImage: `url(${hero})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </figure>

        <div className="absolute right-[10px] md:right-[20px] lg.right-[30px] bottom-[50px] lg:bottom-[100px] flex flex-col justify-center items-center gap-10 followGroup">
          <span
            className="text-[10px] text-main"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              whiteSpace: "nowrap",
            }}
          >
            FOLLOW US
          </span>
          <div className="w-[1px] h-[30px] bg-main" />
          <div className="flex flex-col gap-5">
            <AiOutlineInstagram size={15} color={colors.main} />
            <AiOutlineBehance size={15} color={colors.main} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
