import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import ContactTemplate from "../../contactTemplate";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const splitTitle = new SplitType(".contactTitle", {
      types: ["words", "lines"],
      lineClass: "wordsParent",
    });

    const socialMediaItems = document.getElementsByClassName(
      "socialMediaItem"
    ) as HTMLCollectionOf<HTMLElement>;

    const splitSocialMediaItems: HTMLElement[][] = [];

    Array.from(socialMediaItems).forEach((item: HTMLElement) => {
      const split = new SplitType(item, {
        types: "lines",
      });

      // Push the split.words to the splitMobileItems array
      if (
        split.lines !== null &&
        split.lines !== undefined &&
        split.lines.length > 0
      ) {
        splitSocialMediaItems.push(split.lines);
      }
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          ".frmContainer",
          {
            opacity: 0,
            yPercent: 10,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: Expo.easeInOut,
          }
        ),
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          splitTitle.words,
          {
            y: 39,
          },
          {
            y: 0,
            duration: 1.2,
            stagger: 0.01,
            ease: Expo.easeInOut,
          }
        ),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 60%",
        end: "bottom 60%",
        animation: gsap.fromTo(
          splitSocialMediaItems,
          {
            y: 32,
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
  }, []);

  return (
    <div ref={container} className="relative">
      <ContactTemplate />
    </div>
  );
};

export default Contact;
