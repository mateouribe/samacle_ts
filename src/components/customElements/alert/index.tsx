import gsap, { Expo } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useStatesContext } from "../../../context/StatesProvider";

type Props = {
  message?: string;
  type: "success" | "error";
};

const Alert = ({ message = "", type }: Props) => {
  const container = useRef(null);
  const { showMessage, setShowMessage } = useStatesContext();
  const tl = useRef(null || gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".messageBox", { y: -95 });

      tl.current = gsap.timeline({
        paused: true,
        defaults: {},
      });

      tl.current.to(".messageBox", {
        y: 30,
        duration: 1,
        ease: Expo.easeOut,
      });

      tl.current.to(".messageBox", {
        y: -95,
        duration: 1,
        ease: Expo.easeOut,
        delay: 3,
        onComplete: () => {
          setShowMessage(false);
          tl.current.time(0);
          tl.current.pause();
        },
      });
    }, container);

    return () => ctx.revert();
  }, [setShowMessage]);

  useLayoutEffect(() => {
    if (showMessage) tl.current.play();
  }, [showMessage]);

  return (
    <div
      className={`w-full h-[5px] fixed top-0 left-0 z-[9999] ${
        showMessage ? "pointer-events-auto" : "pointer-events-none"
      }`}
      ref={container}
    >
      <div className="relative">
        <div
          className={`w-[70%] md:w-1/2 lg:w-[30%] rounded-button absolute left-1/2 transform -translate-x-1/2 flex items-center justify-between pr-10 pl-[40px] messageBox ${
            type === "success" ? "bg-green-300/30" : "bg-orange-300/30"
          }`}
          style={{
            background:
              type === "success"
                ? "rgba(36, 255, 0, 0.30)"
                : "rgba(255, 107, 0, 0.30);",
            backdropFilter: "blur(5px)",
          }}
        >
          <span className="py-20">{message}</span>

          <div className="perfectCircle rounded-full bg-white p-10 h-[52px] w-[52px] relative">
            <div
              className={`absolute left-1/2  transform -translate-x-1/2  ${
                type === "success"
                  ? "right-[2px] -top-[2px]"
                  : "right-0 top-[10px]"
              }`}
            >
              {type === "success" ? (
                <svg
                  width="32"
                  height="42"
                  viewBox="0 0 32 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6211 30.1936C10.6199 30.4413 10.6978 30.663 10.8132 30.8451C10.9875 31.202 11.337 31.4844 11.7851 31.5233C12.314 31.6083 12.592 31.8391 12.7327 32.0834C12.8828 32.3441 12.919 32.6946 12.8201 33.0689C12.6178 33.8352 11.9258 34.4764 11.0484 34.3939C10.1723 34.2954 9.59387 33.9307 9.23828 33.4631C8.87595 32.9866 8.71286 32.3604 8.75523 31.6972C8.82848 30.5504 9.50305 29.4003 10.6266 28.8812L10.6211 30.1936ZM10.6211 30.1936L11.1211 30.196L10.6211 30.1939L10.6211 30.1936ZM30.2418 6.24793L30.2419 6.24768C30.6838 5.47632 30.8033 4.57728 30.5779 3.7166C30.4137 2.93741 29.9375 2.37845 29.4096 1.956C28.9662 1.60111 28.448 1.31444 28.0057 1.06978C27.9319 1.02894 27.8602 0.98928 27.7913 0.950665C26.2433 0.0118228 24.0972 0.595087 23.2257 2.18318L21.6314 4.96359L21.527 5.14569L21.5269 5.14567L21.2768 5.58186L13.6646 18.8535C8.8743 18.4259 4.59212 21.1998 2.29616 25.0082C-0.0576411 28.9125 -0.379811 34.0038 3.04031 37.9784L3.04201 37.9804C4.83449 40.0418 7.31908 41.28 10.0355 41.4636C13.5133 41.8059 16.5388 39.7012 18.0225 36.9227C19.4244 34.2973 19.4945 30.9789 17.2232 28.4454C17.3237 28.3852 17.433 28.3146 17.5304 28.2367C17.6212 28.1641 17.7501 28.0478 17.8305 27.8875L20.2429 23.6815C23.736 26.2047 25.9008 30.4261 25.5952 35.0511L25.5951 35.0511L25.5947 35.0586C25.576 35.4255 25.7009 35.7454 25.928 35.9759C26.1472 36.1984 26.437 36.3134 26.7192 36.3334C27.0014 36.3534 27.3055 36.2804 27.5541 36.0884C27.8116 35.8895 27.977 35.5875 28.0074 35.2203L28.0075 35.2203L28.0081 35.212C28.3774 29.6307 25.718 24.5439 21.4553 21.5666L28.2897 9.65084L28.3942 9.46869L28.5371 9.21958L28.6444 9.03254L30.2418 6.24793ZM4.25171 26.4455C5.90935 23.5735 8.91502 21.4308 12.2775 21.2769C12.2444 21.3332 12.2099 21.3916 12.1743 21.4519C12.0083 21.7333 11.8191 22.054 11.6337 22.3733C11.3803 22.8097 11.1288 23.2521 10.9483 23.5974C10.859 23.7682 10.7809 23.9268 10.7286 24.0535C10.7035 24.1143 10.6763 24.1867 10.6594 24.2582C10.6513 24.2925 10.6399 24.3494 10.6403 24.4162C10.6404 24.4325 10.641 24.4607 10.6464 24.4963L10.6385 26.3048C7.97892 26.9657 6.47465 29.3075 6.34576 31.5893C6.27778 32.7929 6.58861 34.0098 7.33897 34.9775C8.09504 35.9526 9.26847 36.6368 10.8478 36.8133L10.8478 36.8134L10.8561 36.8142C12.7724 36.9959 14.312 35.7621 14.9564 34.2573C15.5221 32.9365 15.4313 31.3195 14.2708 30.1725L15.0676 29.7047C16.1007 30.6331 16.6761 32.0218 16.576 33.4189C16.2926 36.5157 14.3098 38.3369 11.9345 38.8621C9.5358 39.3924 6.73085 38.5989 4.86843 36.3897L4.86573 36.3865C2.29607 33.3892 2.4642 29.5426 4.25171 26.4455Z"
                    fill="#282828"
                    stroke="white"
                  />
                </svg>
              ) : (
                <svg
                  width="40"
                  height="34"
                  viewBox="0 0 40 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 8V8.5H1H33H33.5V8V3C33.5 1.62386 32.3761 0.5 31 0.5H3C1.62386 0.5 0.5 1.62386 0.5 3V8ZM25 27.5H25.5V27C25.5 22.8761 28.8761 19.5 33 19.5H33.5V19V10V9.5H33H1H0.5V10V25C0.5 26.3761 1.62386 27.5 3 27.5H25ZM21 5.5C20.8136 5.5 20.6972 5.44006 20.6286 5.37145C20.5599 5.30284 20.5 5.18638 20.5 5C20.5 4.81362 20.5599 4.69716 20.6286 4.62855C20.6972 4.55994 20.8136 4.5 21 4.5C21.1864 4.5 21.3028 4.55994 21.3714 4.62855C21.4401 4.69716 21.5 4.81362 21.5 5C21.5 5.18638 21.4401 5.30284 21.3714 5.37145C21.3028 5.44006 21.1864 5.5 21 5.5ZM25 5.5C24.8136 5.5 24.6972 5.44006 24.6286 5.37145C24.5599 5.30284 24.5 5.18638 24.5 5C24.5 4.81362 24.5599 4.69716 24.6286 4.62855C24.6972 4.55994 24.8136 4.5 25 4.5C25.1864 4.5 25.3028 4.55994 25.3714 4.62855C25.4401 4.69716 25.5 4.81362 25.5 5C25.5 5.18638 25.4401 5.30284 25.3714 5.37145C25.3028 5.44006 25.1864 5.5 25 5.5ZM29 5.5C28.8136 5.5 28.6972 5.44006 28.6286 5.37145C28.5599 5.30284 28.5 5.18638 28.5 5C28.5 4.81362 28.5599 4.69716 28.6286 4.62855C28.6972 4.55994 28.8136 4.5 29 4.5C29.1864 4.5 29.3028 4.55994 29.3714 4.62855C29.4401 4.69716 29.5 4.81362 29.5 5C29.5 5.18638 29.4401 5.30284 29.3714 5.37145C29.3028 5.44006 29.1864 5.5 29 5.5ZM33 20.5C29.4239 20.5 26.5 23.4239 26.5 27C26.5 30.5761 29.4239 33.5 33 33.5C36.5761 33.5 39.5 30.5761 39.5 27C39.5 23.4239 36.5761 20.5 33 20.5ZM33 30.5C32.8136 30.5 32.6972 30.4401 32.6286 30.3714C32.5599 30.3028 32.5 30.1864 32.5 30C32.5 29.8136 32.5599 29.6972 32.6286 29.6286C32.6972 29.5599 32.8136 29.5 33 29.5C33.1864 29.5 33.3028 29.5599 33.3714 29.6286C33.4401 29.6972 33.5 29.8136 33.5 30C33.5 30.1864 33.4401 30.3028 33.3714 30.3714C33.3028 30.4401 33.1864 30.5 33 30.5ZM33.5 27C33.5 27.1864 33.4401 27.3028 33.3714 27.3714C33.3028 27.4401 33.1864 27.5 33 27.5C32.8136 27.5 32.6972 27.4401 32.6286 27.3714C32.5599 27.3028 32.5 27.1864 32.5 27V24C32.5 23.8136 32.5599 23.6972 32.6286 23.6286C32.6972 23.5599 32.8136 23.5 33 23.5C33.1864 23.5 33.3028 23.5599 33.3714 23.6286C33.4401 23.6972 33.5 23.8136 33.5 24V27Z"
                    fill="#282828"
                    stroke="white"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
