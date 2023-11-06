import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useStatesContext } from "../../../context/StatesProvider";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants.js";
import { services } from "../../../utils/constants";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Card from "./card";
import Image from "./image";
import SectionTitle from "../../customElements/sectionTitle";
import Section from "../../customElements/section/index.js";
import website from "../../../assets/images/website.png";
import seo from "../../../assets/images/seo.png";
import mail from "../../../assets/images/mail.png";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);
  const { t } = useTranslation();
  const { isDesktop } = useStatesContext();

  useLayoutEffect(() => {
    const splitTitleParent = new (window as any).SplitText(".servicesTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new (window as any).SplitText(".servicesTitle", {
      type: "words, chars",
      charsClass: "beigeWords",
    });

    const elementsWorks: Array<HTMLDivElement> =
      gsap.utils.toArray(".item-service");
    const slidePicWorks = gsap.utils.toArray("#gallery-services");
    const slidePicsWorks = gsap.utils.toArray("#services-images");

    gsap.set(slidePicWorks, { autoAlpha: 0 });

    const ctx = gsap.context(() => {
      // Animations for mouse over
      elementsWorks.forEach((element, index) => {
        element.addEventListener("mouseenter", function () {
          gsap.to(slidePicsWorks, {
            marginTop: `-${280 * index}px`,
            duration: 0.1,
            ease: "power1",
          });
        });

        element.addEventListener("mouseleave", function () {
          gsap.to(element, { color: "initial", duration: 10, ease: "power1" });
        });
      });

      window.addEventListener("mousemove", function (e) {
        gsap.to(slidePicWorks, {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
          xPercent: -20,
          yPercent: -45,
          duration: 0.2,
          ease: "power1",
        });
      });

      const itemsService = document.querySelector(".items-service");
      //On enter container show image

      if (itemsService) {
        itemsService.addEventListener("mouseenter", function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 1,
            duration: 0,
            ease: Expo.easeInOut,
          });
          gsap.fromTo(
            slidePicWorks,
            {
              scale: 2,
              clipPath: "circle(10px at 50% 50%)",
            },
            {
              scale: 1,
              clipPath: "circle(100% at 50% 50%)",
            }
          );
        });

        itemsService.addEventListener("mouseleave", function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 0,
            duration: 0,
            clipPath: "circle(10px at 50% 50%)",
            ease: Expo.easeInOut,
          });
        });
      }

      //On leave container hide image

      // Animations for scroll

      changeBgColorAnimation({
        trigger: ".sevices-bg-trigger",
        colors: {
          enter: colors.black,
          exit: !isDesktop ? colors.white : "#FAEEFF",
          menuEnter: colors.white,
          menuExit: colors.black,
        },
        position: {
          start: "top 60%",
          end: "bottom 30.5%",
        },
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: 30,
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
  }, [isDesktop]);

  return (
    <div ref={container}>
      <Section
        hasPadding
        className="flex flex-col gap-50 min-h-[100vh] sevices-bg-trigger"
      >
        <SectionTitle
          className="servicesTitle text-beige leading-[30px]"
          text={t("home.services.title")}
        ></SectionTitle>
        <section className="relative flex flex-col services">
          <div className="w-full m-auto container-services">
            <div className="flex flex-col w-full h-full content-services">
              {/* header */}
              <div className="w-full grid grid-cols-2 pb-10 border-b-[1px] border-white gap-20 ">
                <div className="w-full h-full">
                  <span className="text-white text-xsm">
                    ({t("home.services.tableHeaderOne")})
                  </span>
                </div>
                <div className="w-full h-full">
                  <span className="text-white text-xsm">
                    ({t("home.services.tableHeaderTwo")})
                  </span>
                </div>
              </div>

              {/* gallery */}
              <div
                id="gallery-services"
                className="flex fixed w-[385px] h-[280px] transform z-[999] overflow-hidden pointer-events-none"
                style={{
                  transform: "translateY(-50%, 50%)",
                  transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
                }}
              >
                <div
                  id="services-images"
                  className="w-full h-[calc(280px*3)] flex flex-col"
                  style={{
                    transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
                  }}
                >
                  <Image image={website} />
                  <Image image={seo} />
                  <Image image={mail} />
                </div>
              </div>

              {/* items */}
              <div className="flex flex-col w-full h-full items-service">
                {services.map((service, index) => (
                  <Card index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default Services;
