import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

type Props = {
  title: string;
};
const LineTitle = ({ title }: Props) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".slideLeft", {
        scaleX: 0,
      });
      gsap.set(".proccessItemTitle", {
        bottom: -16,
        opacity: 0,
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(".slideLeft", {
          scaleX: 1,
          duration: 1.5,
          ease: Expo.easeOut,
        }),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(".proccessItemTitle", {
          bottom: -2,
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-[30%] hidden md:flex flex-col justify-center items-center relative overflow-hidden"
      ref={container}
    >
      <span className="relative text-sm text-main proccessItemTitle">
        {title}
      </span>
      <div className="w-full h-[1px] bg-main slideLeft origin-left" />
    </div>
  );
};

export default LineTitle;
