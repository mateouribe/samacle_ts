import React from "react";
import { motion } from "framer-motion";
import { useStatesContext } from "../../../context/StatesProvider";

// // Extend the Window interface to include the isDesktop property
// interface CustomWindow extends Window {
//   isDesktop?: boolean;
// }

type Props = {
  component: () => JSX.Element;
};

const Transition = ({ component }: Props) => {
  const { isDesktop } = useStatesContext();

  return (
    <>
      {component()}

      {isDesktop ? (
        <>
          <motion.div
            className="slide-in z-[9999]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="slide-out z-[9999]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      ) : null}
    </>
  );
};

export default Transition;
