import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LineTitle from "../../../customElements/lineTitle";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
type Props = {
  index: number;
};

const Item = ({ index }: Props) => {
  const container = useRef(null);
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-between w-full md:flex-row gap-100"
      ref={container}
    >
      <div className="processesContainer w-[70%]">
        <h3 className="text-main text-[20px] block md:hidden">
          {t(`about.processes.${index}.title`)}
        </h3>
        <p className="w-full text-white md:w-full">
          {t(`about.processes.${index}.description`)}
        </p>
      </div>

      <LineTitle title={t(`about.processes.${index}.title`)} />
    </div>
  );
};

export default Item;
