import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  image: string;
  index: number;
  className?: string;
};

const ScrollSection = ({ image, index, className }: Props) => {
  const container = useRef(null);

  return (
    <div
      className={`w-[100vw] h-view flex justify-center items-center ${
        className && className
      } p-tablet py-tablet ${index === 0 && "horizontalColor"}`}
      key={index}
      ref={container}
    >
      <div
        className="hub__wrapper w-[100vw] h-view overflow-hidden relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default ScrollSection;
