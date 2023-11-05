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
        className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 "
        style={{
          background: `linear-gradient(180deg, ${color.split(" ")[0]} 0%, ${
            color.split(" ")[1]
          } 100%)`,
        }}
      >
        <div
          className="w-full h-full rounded-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: `0px 10px 22px 2px ${color.split(" ")[2]}`,
          }}
        />{" "}
        <div className="flex flex-col gap-5">
          <h3 className="text-black text-[20px] font-medium">{title}</h3>
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
