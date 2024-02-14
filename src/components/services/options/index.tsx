import Section from "../../customElements/section";
import { services } from "../../../utils/constants";
import Card from "./card";
import { useEffect, useRef } from "react";
import gsap, { Expo } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

const Options = () => {
  const container = useRef(null);
  const tl = useRef(null || gsap.timeline());

  useEffect(() => {
    const splitTitle = new SplitType(".stickyText", {
      types: ["words", "chars"],
      charClass: "blackWords",
      wordClass: "wordsParent",
    });

    const animation = gsap.fromTo(
      splitTitle.chars,
      {
        y: "100px",
      },
      {
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: 0.008,
      }
    );

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        paused: true,
      });

      tl.current = timeline;

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 92%",
        end: "bottom 92%",
        animation: animation,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Section className="bg-lightGray py-50 px-mobile md:px-tablet lg:px-desktop">
        <div className="grid justify-between w-full h-full grid-cols-1 md:grid-cols-2 gap-50 md:gap-0">
          <div className="flex items-start self-stretch justify-start w-full h-full">
            <h2 className="w-[70%] text-[67px] leading-[99%] text-black font-medium sticky top-[100px] stickyText">
              What we do well.
            </h2>
          </div>
          <div className="flex flex-col self-end h-full gap-50">
            {services.map((service, index) => (
              <Card
                // key={index}
                serviceImage={service.image}
                index={index}
                isVideo={service.title === "Marketing & SEO"}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
export default Options;
