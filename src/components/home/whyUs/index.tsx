import { useLayoutEffect, useRef } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";
import Photo from "./desktop/photo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "react-i18next";
import blue from "../../../assets/images/blue.png";
import orange from "../../../assets/images/orange.png";
import pink from "../../../assets/images/pink.png";
import purple from "../../../assets/images/purple.png";
gsap.registerPlugin(ScrollTrigger);

const WhyUse = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const images = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const mm = gsap.matchMedia();
    gsap.set(images, { yPercent: 100 });

    const ctx = gsap.context(() => {
      const animation = gsap.to(images, {
        yPercent: 0,
        stagger: 0.5,
      });

      mm.add("(min-width: 900px)", () => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          animation: animation,
          scrub: 1.1,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <div className="relative flex justify-between w-full gallery">
        {/* Left side */}
        <div className="w-1/2 left outline-1">
          {/* Desktop content */}
          <div className="m-auto desktopContent px-desktop">
            <Desktop
              title={t("home.whyUs.reasonOneTitle")}
              text={t("home.whyUs.reasonOneDescription")}
              bgColor="#E3F9FC"
              backToWhite
            />
            <Desktop
              title={t("home.whyUs.reasonTwoTitle")}
              text={t("home.whyUs.reasonTwoDescription")}
              bgColor="#FFF3E5"
            />
            <Desktop
              title={t("home.whyUs.reasonThreeTitle")}
              text={t("home.whyUs.reasonThreeDescription")}
              bgColor="#FBE5EB"
            />
            <Desktop
              title={t("home.whyUs.reasonFourTitle")}
              text={t("home.whyUs.reasonFourDescription")}
              bgColor="#F0E9F8"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 right h-view px-mobile md:px-tablet lg:pl-0 lg:pr-desktop">
          {/* <!-- add mobile content here--> */}
          <div className="hidden w-full mobileContent mb-100 gap-50">
            <Mobile
              title={t("home.whyUs.reasonOneTitle")}
              text={t("home.whyUs.reasonOneDescription")}
              image={blue}
              color="#C5F8FF #8BF5FF #37AFC8"
            />
            <Mobile
              title={t("home.whyUs.reasonTwoTitle")}
              text={t("home.whyUs.reasonTwoDescription")}
              image={orange}
              color="#FFE2C2 #FF9F35 #CF7A1B"
            />
            <Mobile
              title={t("home.whyUs.reasonThreeTitle")}
              text={t("home.whyUs.reasonThreeDescription")}
              image={pink}
              color="#FEB6CC #DF3866 #AA2147"
            />
            <Mobile
              title={t("home.whyUs.reasonFourTitle")}
              text={t("home.whyUs.reasonFourDescription")}
              image={purple}
              color="#D8BBFC #8952CB #4D21AA"
            />
          </div>
          {/* <!-- desktop content --> */}
          <div className="photos w-full h-[40vw] relative overflow-hidden">
            <Photo image={blue} color="#94EFF9 #1BB7C8 #229AB2" />
            <Photo image={orange} color="#FFE2C2 #FF9F35 #CF7A1B" />
            <Photo image={pink} color="#FEB6CC #DF3866 #AA2147" />
            <Photo image={purple} color="#D8BBFC #8952CB #4D21AA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
