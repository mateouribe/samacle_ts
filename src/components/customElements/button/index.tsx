import React, { useLayoutEffect, useRef } from "react";
import { colors } from "../../../utils/constants";
import { gsap } from "gsap";
import { useNavigate } from "react-router";
import { navigateToPage } from "../../../utils/navigateToPage";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  navigateTo?: string;
  type?: "button" | "submit" | "reset";
  blackColor?: boolean;
};

const Button = ({
  children,
  className,
  onClick,
  navigateTo,
  type = "button",
  blackColor,
}: Props) => {
  const navigate = useNavigate();
  const container = useRef(null);
  const tl = useRef(null || gsap.timeline());
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".icon", {
        y: -2,
        x: 2,
        duration: 0.5,
      });
      tl.current.to(
        container.current,
        {
          scale: 1.01,
        },
        "-=0.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <button
      className={`max-w-fit pl-20 pr-[70px] py-[15px] flex text-left gap-10 rounded-10 cursor-none ${className} text-sm uppercase font-light cursorBig`}
      style={{
        backgroundColor: blackColor ? colors.black : colors.main,
        color: blackColor ? colors.main : colors.black,
      }}
      onClick={() => {
        onClick && onClick();
        navigateTo && navigateToPage(navigate, navigateTo);
      }}
      ref={container}
      onMouseEnter={() => {
        tl.current.play();
      }}
      onMouseLeave={() => {
        tl.current.reverse();
      }}
      type={type}
    >
      {children}
      <div className="relative w-[20px] h-[20px] overflow-hidden">
        <div className="absolute top-0 w-full h-full icon">
          <span className="material-symbols-outlined text-[20px]">
            north_east
          </span>
        </div>
      </div>
    </button>
  );
};

export default Button;
