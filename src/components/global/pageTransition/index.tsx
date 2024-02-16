import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  bg?: string;
}

export default function PageTransition({ children }: Props) {
  return (
    <>
      {children}
      <motion.div
      //    className="z-[9999] fixed top-0 left-0 w-full h-view bg-black"
      //    initial={{ scaleY: 0, transformOrigin: "top" }}
      //    animate={{
      //      scaleY: [0, 1, 1, 0],
      //      transformOrigin: ["top", "bottom"],
      //    }}
      //    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* <motion.div
        className="slide-out z-[9999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      /> */}
    </>
  );
}
