import { useTranslation } from "react-i18next";

type Props = {
  index: number;
};

const Card = ({ index }: Props) => {
  const { t } = useTranslation();
  const item = `services.options.service${index + 1}`;

  return (
    <div
      className="item-service w-full grid grid-cols-2 border-b-[1px] border-white py-tablet gap-20 lg:pl-tablet opacity-70 hover:opacity-100 "
      style={{
        transition: "0.5s",
      }}
    >
      <div className="w-full h-full">
        <h3
          className="text-white text-[20px]"
          dangerouslySetInnerHTML={{ __html: t(`${item}.title`) }}
        ></h3>

        {t(`${item}.subtitle`) !== "" && (
          <span className="text-white text-xsm">{t(`${item}.subtitle`)}</span>
        )}
      </div>
      <div className="w-full h-full">
        <p
          className="text-white text-text"
          dangerouslySetInnerHTML={{ __html: t(`${item}.shortDescription`) }}
        ></p>
      </div>
    </div>
  );
};

export default Card;
