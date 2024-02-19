import React from "react";
import Section from "../../components/customElements/section";
import { useNavigate } from "react-router";
import { navigateToPage } from "../../utils/navigateToPage";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Section
      fullHeightNav
      className="relative flex flex-col items-center justify-center"
    >
      <h2 className="text-[500px] font-bold text-lightGray absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
        404
      </h2>
      <h1 className="text-[100px] font-medium leading-[99%] text-black text-center relative z-[2]">
        Opaaa!, it's not here.
      </h1>
      <br />
      <p
        onClick={() => {
          navigateToPage(navigate, "/");
        }}
        className="z-[2] relative"
      >
        Go back home
      </p>
    </Section>
  );
};

export default NotFound;
