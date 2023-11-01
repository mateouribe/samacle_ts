import React from "react";

type Props = {
  fullHeight?: boolean;
  fullHeightNav?: boolean;
  hasPadding?: boolean;
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};

const Section = ({
  fullHeight = false,
  fullHeightNav = false,
  hasPadding = false,
  className,
  children,
  ref,
}: Props) => {
  return (
    <section
      className={`w-full 
  ${fullHeightNav ? "h-view lg:h-[calc(100vh-66px)]" : "h-full"}
  ${hasPadding ? "p-mobile md:p-tablet lg:p-desktop" : ""} 
  ${fullHeight ? "h-view" : "h-auto"}
  ${className} 
}`}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
