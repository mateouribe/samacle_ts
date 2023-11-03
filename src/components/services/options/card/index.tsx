import Image from "../../../customElements/image";
import Button from "../../../customElements/button";
import { useTranslation } from "react-i18next";
type Props = {
  serviceImage: string;
  index: number;
};

const Card = ({ serviceImage, index }: Props) => {
  const { t } = useTranslation();
  const item = `services.options.service${index + 1}`;
  return (
    <div className="flex flex-col w-full h-full gap-20" key={index}>
      <div className="w-full h-full flex items-center gap-20 leading-[100%]">
        <span className="text-[25px] lg:text-[60px] text-beige font-medium">
          0{index + 1}
        </span>
        <h4 className="text-xl text-black">{t(`${item}.title`)}</h4>
      </div>
      <div className="flex flex-col items-stretch justify-between w-full md:flex-row gap-30">
        <div className="w-full md:w-[50%] lg:w-[35%] h-[300px] md:h-auto">
          <Image image={serviceImage} onLoad noHover />
        </div>
        <div className="w-full md:w-[50%] lg:w-[65%] flex flex-col gap-20 md:py-mobile">
          <p
            className="text-black"
            dangerouslySetInnerHTML={{ __html: t(`${item}.description`) }}
          ></p>
          <Button navigateTo="/contact-us">{t("button.becomeClient")}</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
