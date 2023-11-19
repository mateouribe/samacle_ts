import { useLayoutEffect, useRef } from "react";
import Image from "../../../customElements/image";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  project: Project;
  alignLeft?: boolean;
  isFirstOne?: boolean;
};

const Item = ({ project, alignLeft = false, isFirstOne = false }: Props) => {
  const positions = isFirstOne
    ? { start: "top 62.5%", end: "bottom 62.5%" }
    : { start: "top 70%", end: "bottom 70%" };

  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: positions.start,
        end: positions.end,
        animation: gsap.fromTo(
          ".projectInfo",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.5,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, [positions.end, positions.start]);

  return (
    <div
      className={`w-full h-[70vh] md:h-[80vh] lg:col-span-12 flex ${
        alignLeft ? "justify-start" : "justify-end"
      }`}
      ref={container}
    >
      <figure className="w-[100%] md:w-[45%] h-[70vh] md:h-[80vh] flex flex-col gap-10">
        <Link
          className="h-full projectItemScroll"
          to={
            project.completed
              ? `/our-projects/study-case/${project.info.link}`
              : "#"
          }
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              image={project.image}
              position={positions}
              onLoad={!project.completed && true}
              noHover={!project.completed && true}
            />
            {!project.completed && (
              <div className="w-full h-full absolute left-0 top-0 bg-black/80 flex justify-center items-center z-[20]">
                <span className="text-[20px] md:text-[30px] text-gray">
                  Coming soon...
                </span>
              </div>
            )}
          </div>
          <figcaption className="flex items-start justify-between projectInfo">
            <h3 className="text-black">
              {project.info.title} - {project.info.place}
            </h3>
            <div className="flex flex-col">
              {project.info.tags.map((tag, i) => (
                <span className="text-xsm text-gray" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

export default Item;
