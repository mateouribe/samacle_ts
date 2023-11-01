import { useTranslation } from "react-i18next";
import heart from "../../../../assets/images/heart.svg";
import finger from "../../../../assets/images/finger.svg";

type Props = {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  subText: string;
};

const Letter = ({
  small = false,
  medium = false,
  large = false,
  subText,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center lg:block aboutBlock">
      <p
        className={`font-swearDisplay inline-block leading-[80%] lg:leading-[0] aboutWord relative z-[10] text-black turn-blue
    ${
      small
        ? "text-[100px]"
        : medium
        ? "text-[190px]"
        : "text-[230px] lg:text-[400px]"
    }`}
      >
        WE
      </p>
      <img
        src={large ? heart : finger}
        className={`absolute w-[80%] top-1/2 -translate-y-1/2 lg:-top-full lg:translate-y-0 left-1/2 transform -translate-x-1/2 2 z-[1] no-visible`}
        alt={
          large
            ? "A beige-colored inverted heart within the Samacle - About Us section, behind text."
            : "A beige-colored hand pointing to the right within the Samacle - About Us section, behind text."
        }
        loading="lazy"
      />
      <div className="w-full h-[1px] lg:h-[3px] block lg:absolute -bottom-20 left-0 bg-black z-[200]">
        <div className="relative w-full h-full">
          <span
            className={`text-xsm text-black absolute left-1/2  top-1/2 transform -translate-x-1/2  -translate-y-1/2 p-[3px] turn-blue 
      ${small ? "bg-white" : medium ? "bg-white" : "bg-beige turn-beige"}
      `}
          >
            ({subText})
          </span>
        </div>
      </div>
      {large && (
        <p className="text-black max-w-[466.41px] lg:hidden mt-[20px] block z-[200]">
          {t("home.ourMission")}
        </p>
      )}
    </div>
  );
};

export default Letter;
