import { useTranslation } from "react-i18next";
import { useStatesContext } from "../../../../context/StatesProvider";

type Props = {
  index: number;
};

const Card = ({ index }: Props) => {
  const { t } = useTranslation();
  const item = `services.options.service${index + 1}`;
  const { isDesktop } = useStatesContext();

  return (
    <div
      className="item-service w-full grid gird-cols-1 md:grid-cols-2 border-b-[1px] border-white py-tablet gap-50 md:gap-20 lg:pl-tablet opacity-70 hover:opacity-100"
      style={{
        transition: "0.5s",
      }}
    >
      {isDesktop ? (
        <>
          <div className="w-full h-full">
            <h3
              className="text-white text-[20px]"
              dangerouslySetInnerHTML={{ __html: t(`${item}.title`) }}
            ></h3>

            <span className="text-white text-xsm">{t(`${item}.subtitle`)}</span>
          </div>
          <div className="w-full h-full">
            <p
              className="text-white text-text"
              dangerouslySetInnerHTML={{
                __html: t(`${item}.shortDescription`),
              }}
            ></p>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-20">
          <h3
            className="text-white text-[20px]"
            dangerouslySetInnerHTML={{ __html: t(`${item}.title`) }}
          ></h3>
          <span className="text-white text-xsm">{t(`${item}.subtitle`)}</span>
          <p
            className="text-white text-text"
            dangerouslySetInnerHTML={{
              __html: t(`${item}.shortDescription`),
            }}
          ></p>
        </div>
      )}
    </div>
  );
};

export default Card;
