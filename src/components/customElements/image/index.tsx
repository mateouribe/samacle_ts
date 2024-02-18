import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: string | undefined;
  position?: { start: string; end: string };
  onLoad?: boolean;
  duration?: number;
  noHover?: boolean;
};

const Image = ({
  image,
  position = { start: "top 70%", end: "bottom 70%" },
  onLoad = false,
  duration = 1.5,
  noHover = false,
}: Props) => {
  const container = useRef(null);
  const tl = useRef(null || gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animationSlideout = gsap.to(".slideOut", {
        scaleY: 0,
        duration: duration,
        ease: Expo.easeInOut,
      });

      const animationCoverImage = gsap.from(".coverImage", {
        scale: 1.3,
        duration: 2,
        ease: Expo.easeInOut,
      });

      if (onLoad) {
        animationSlideout.play();
        animationCoverImage.play();
        animationSlideout.delay(0.5);
        animationCoverImage.delay(0.5);
      }
      //Reveal on scroll
      else {
        ScrollTrigger.create({
          trigger: container.current,
          start: position.start,
          end: position.end,
          animation: animationSlideout,
        });
        ScrollTrigger.create({
          trigger: container.current,
          start: position.start,
          end: position.end,
          animation: animationCoverImage,
        });
      }

      //Hover effect
      if (!noHover) {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(".coverImage", {
          scale: 1.08,
          duration: 2,
          ease: Expo.easeOut,
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative w-full h-full"
      ref={container}
      onMouseEnter={() => {
        if (!noHover) {
          tl.current.play();
          tl.current?.duration(2);
        }
      }}
      onMouseLeave={() => {
        if (!noHover) {
          tl.current.reverse();
          tl.current.duration(0.8);
        }
      }}
    >
      <div className="w-[calc(100%+4px)] h-full absolute top-0 left-1/2 transform -translate-x-1/2 z-[9] origin-top slideOut dependsOnBgColor bg-white" />
      <div className="relative w-full h-full overflow-hidden containerScale">
        <div
          className="w-full h-full absolute top-0 left-0 z-[5] coverImage"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Image;
