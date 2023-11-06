import { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

type Props = {
  project: Project;
  index: number;
};

const Item = ({ project, index }: Props) => {
  const container = useRef(null);
  const tl = useRef(null || gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (index !== 0) {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 85%",
          end: "bottom 85%",
          animation: gsap.fromTo(
            ".projectContainer",
            {
              opacity: 0,
              yPercent: 100,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1.5,
              ease: Expo.easeOut,
            }
          ),
        });
      }

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".projectContainer", {
        scale: 0.99,
        duration: 2,
        ease: Expo.easeOut,
      });
    }, container);

    return () => ctx.revert();
  }, [index]);

  return (
    <figure
      key={index}
      onMouseEnter={() => {
        if (project.completed) {
          tl.current.play();
          tl.current.duration(2);
        }
      }}
      onMouseLeave={() => {
        if (project.completed) {
          tl.current.reverse();
          tl.current.duration(0.8);
        }
      }}
    >
      <Link
        className={`w-full h-[80vh] flex flex-col gap-10 hoverMouse ${
          index === 0 && "animateFirstProject"
        }`}
        ref={container}
        to={
          project.completed
            ? `/our-projects/study-case/${project.info.link}`
            : "#"
        }
      >
        <div className="relative flex w-full h-full gap-20 projectContainer">
          {/* image left */}
          <div
            className="w-full h-full md:w-1/2"
            style={{
              backgroundImage: `url(${project.mockupImages.big})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* images right */}
          <div className="flex-col hidden w-1/2 h-full gap-20 md:flex">
            <div
              className={`w-full h-[60%] ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
              style={{
                backgroundImage: `url(${project.mockupImages.mid})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className={`w-full h-[40%] ${
                index % 2 === 0 ? "order-1" : "order-2"
              }`}
              style={{
                backgroundImage: `url(${project.mockupImages.sm})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          {!project.completed && (
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/80">
              <span className="text-[20px] md:text-[30px] text-gray">
                Coming soon...
              </span>
            </div>
          )}
        </div>
        <figcaption className="flex justify-between">
          <h5 className="text-black textProject">
            {project.info.title} - {project.info.place}
          </h5>
          <div className="flex flex-col">
            {project.info.tags.map((tag, index) => (
              <span className="text-xsm text-gray textProject" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default Item;
