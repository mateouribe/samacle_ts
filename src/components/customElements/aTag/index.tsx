import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { colors } from "../../../utils/constants";

type Props = {
  href: string | undefined;
  children: React.ReactNode;
  className?: string;
  colorHover?: string;
  onClick?: () => void;
};

const ATag = ({
  href,
  children,
  className = "",
  colorHover,
  onClick,
}: Props) => {
  const container = useRef(null);
  const tl = useRef(null || gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".bottomLine", {
        scaleX: 0,
      });
      gsap.set(container.current, {
        color: colors.black,
      });
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".bottomLine", {
        scaleX: 1,
        duration: 0.7,
        ease: Expo.easeOut,
      });
      tl.current.to(
        container.current,
        {
          color: colorHover,
          duration: 0.7,
        },
        "-=0.7"
      );
    }, container);

    return () => ctx.revert();
  }, [colorHover]);

  return (
    <a
      href={href}
      onMouseEnter={() => {
        colorHover && tl.current.play();
      }}
      onMouseLeave={() => {
        colorHover && tl.current.reverse();
      }}
      onClick={onClick}
      ref={container}
      className={`relative ${className} text-black`}
    >
      {children}
      <div className="w-full h-[1px] bg-black absolute left-0 bottom-0 bottomLine origin-left" />
    </a>
  );
};

export default ATag;
