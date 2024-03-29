import Button from "../../../customElements/button";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  text: string;
  image: string;
  color: string;
};

const Mobile = ({ title, text, image, color }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full gap-30">
      <div
        className="mobilePhoto w-full h-[90vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 "
        style={{
          background: `linear-gradient(180deg, ${color.split(" ")[0]} 0%, ${
            color.split(" ")[1]
          } 100%)`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: `0px 10px 22px 2px ${color.split(" ")[2]}`,
          }}
        />
        <div className="flex flex-col gap-20">
          <h3 className="text-black text-[30px] font-medium leading-[90%]">
            {title}
          </h3>
          <p className="text-black">{text}</p>
          <Button navigateTo="/contact-us" blackColor className="mt-50">
            {t("button.becomeClient")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
