import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from "./scrollSection";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);
type Props = {
  project: Project | null;
};

const Design = ({ project }: Props) => {
  const container = useRef(null);
  const triggerRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (project !== undefined && project !== null) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1180px)", () => {
        const pin = gsap.fromTo(
          container.current,
          {
            translateX: 0,
          },
          {
            translateX:
              project?.studyCase.figmaDesigns !== undefined
                ? -window.innerWidth *
                  (project?.studyCase.figmaDesigns.length - 1)
                : 0,
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 0,
              pin: true,
              start: "top top",
              end:
                project?.studyCase.figmaDesigns !== undefined
                  ? `+=${project.studyCase.figmaDesigns.length - 1}00%`
                  : 0,
            },
          }
        );
        return () => pin.kill();
      });

      const ctx = gsap.context(() => {
        changeBgColorAnimation({
          trigger: ".design-bg-trigger",
          colors: {
            enter: colors.black,
            exit: colors.white,
            menuEnter: colors.white,
            menuExit: colors.black,
          },
          position: {
            start: "top 10%",
            end: "bottom 10%",
          },
        });
      }, triggerRef);

      return () => ctx.revert();
    }
  }, [isLoaded, project?.studyCase.figmaDesigns]);

  return (
    <section className="overflow-hidden">
      {isLoaded && (
        <div ref={triggerRef}>
          {/* Desktop */}
          <div
            className="w-[200vw] h-view lg:flex flex-row relative hidden bg-black design-bg-trigger"
            ref={container}
          >
            {project?.studyCase.figmaDesigns.map((design, index) => (
              <ScrollSection
                className="bg-black"
                image={design}
                index={index}
                key={index}
              />
            ))}
          </div>

          {/* Tablet */}
          <div className="flex flex-col w-full h-full bg-black gap-100 py-tablet lg:hidden">
            {project?.studyCase.figmaDesigns.map((design, index) => (
              <div
                className="w-full h-[80vh]"
                style={{
                  backgroundImage: `url(${design})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Design;
