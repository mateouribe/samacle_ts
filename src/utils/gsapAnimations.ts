import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MutableRefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

const changeBgColorAnimation = ({
  trigger,
  position = { start: "top 50%", end: "bottom 50%" },
  colors = {
    enter: "",
    exit: "",
    menuEnter: "",
    menuExit: "",
  },
  markers = false,
  toggleActions = "",
}: {
  trigger: MutableRefObject<HTMLElement | null> | string;
  position?: {
    start: string;
    end: string;
  };
  colors: {
    enter: string;
    exit: string;
    menuEnter: string;
    menuExit: string;
  };
  markers?: boolean;
  toggleActions?: string;
}) => {
  const dependsOnBgColor = document.querySelectorAll(".dependsOnBgColor");
  const dependsOnBgColor_text = document.querySelectorAll(
    ".dependsOnBgColor_text"
  );
  const linesBurger = document.querySelectorAll(".lineBurger");
  const circleBurger = document.querySelectorAll(".burgerCircle");

  ScrollTrigger.create({
    trigger: typeof trigger === "string" ? trigger : trigger.current,
    start: position.start,
    end: position.end,
    markers: markers,
    toggleActions: toggleActions,
    onToggle: (self) => {
      // whenever we enter a section from either direction (scrolling up or down), animate to its color
      if (self.isActive) {
        gsap.to(["body", dependsOnBgColor], {
          backgroundColor: colors.enter,
          overwrite: "auto",
        });
        gsap.to(dependsOnBgColor_text, {
          color: colors.exit,
          overwrite: "auto",
        });
      } else {
        gsap.to(["body", dependsOnBgColor], {
          backgroundColor: colors.exit,
          overwrite: "auto",
        });
        gsap.to(dependsOnBgColor_text, {
          color: colors.enter,
          overwrite: "auto",
        });
      }
    },
  });

  ScrollTrigger.create({
    trigger: typeof trigger === "string" ? trigger : trigger.current,
    start: position.start,
    end: position.end,
    onToggle: (self) => {
      // whenever we enter a section from either direction (scrolling up or down), animate to its color
      if (self.isActive) {
        gsap.to(linesBurger, {
          backgroundColor: colors.menuEnter,
          overwrite: "auto",
        });
      } else {
        gsap.to(linesBurger, {
          backgroundColor: colors.menuExit,
          overwrite: "auto",
        });
      }
    },
  });

  ScrollTrigger.create({
    trigger: typeof trigger === "string" ? trigger : trigger.current,
    start: position.start,
    end: position.end,
    onToggle: (self) => {
      // whenever we enter a section from either direction (scrolling up or down), animate to its color
      if (self.isActive) {
        gsap.to(circleBurger, {
          borderColor: colors.menuEnter,
          overwrite: "auto",
        });
      } else {
        gsap.to(circleBurger, {
          borderColor: colors.menuExit,
          overwrite: "auto",
        });
      }
    },
  });
};

export { changeBgColorAnimation };
