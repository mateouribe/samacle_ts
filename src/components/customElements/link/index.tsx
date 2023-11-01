import React, { useLayoutEffect, useRef } from "react";
import { navigateToPage } from "../../../utils/navigateToPage";
import { useNavigate } from "react-router-dom";
import { Expo, gsap } from "gsap";
import { colors } from "../../../utils/constants";

type Props = {
  children: React.ReactNode;
  className?: string;
  image?: string;
  route: string;
  onClick?: () => void;
};

const Link = ({ children, className = "", image, route, onClick }: Props) => {
  const navigate = useNavigate();
  const tl = useRef(null || gsap.timeline());
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      tl.current = gsap.timeline({ paused: true });
      if (typeof image !== "undefined") {
        mm.add("(min-width: 1024px)", () => {
          gsap.set(".link", {
            opacity: 0,
          });

          tl.current.to(".link", {
            opacity: 1,
            duration: 0,
          });
          tl.current.to(".screenshot", {
            scaleY: 0,
            duration: 1,
            ease: Expo.easeOut,
          });
        });
      }

      tl.current.to(
        container.current,
        {
          color: colors.main,
          duration: 0,
        },
        image ? "-=1" : ""
      );
    }, container);

    return () => ctx.revert();
  }, [image]);

  const onMouseEnterItem = () => {
    tl.current.play();
  };

  const onMouseLeaveItem = () => {
    tl.current.reverse();
  };

  return (
    <li
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
      className={`${className} relative hoverMouse        
         `}
      ref={container}
      onMouseEnter={onMouseEnterItem}
      onMouseLeave={onMouseLeaveItem}
    >
      {children}
      {image && (
        <>
          <img
            src={image}
            alt="A small preview of a small section of Samacle - Web Agency in Canada web page in the navigation menu."
            className="absolute min-w-[70px] left-1/2 transform -translate-x-1/2 top-full link pointer-events-none"
            loading="lazy"
          />
          <div className="absolute w-[70px] h-[45.5px] bg-white left-1/2 transform -translate-x-1/2 top-full screenshot origin-bottom pointer-events-none" />
        </>
      )}
    </li>
  );
};

export default Link;
