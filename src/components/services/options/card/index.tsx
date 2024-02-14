import { useTranslation } from "react-i18next";

type Props = {
  serviceImage: string;
  index: number;
  isVideo: boolean;
};

const Card = ({ serviceImage, isVideo = false, index }: Props) => {
  const { t } = useTranslation();
  const item = `services.options.service${index + 1}`;
  return (
    <div
      className="bg-white px-20 py-30 rounded-[20px] flex flex-col gap-20 w-full self-end md:w-[90%] link"
      style={{
        boxShadow:
          "2px 4px 12px 0px rgba(0, 0, 0, 0.08), 2px -4px 12px 0px rgba(49, 49, 49, 0.04) inset",
      }}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-medium text-black text-[40px] w-[60%] leading-[100%]">
          {t(`${item}.title`)}
        </h3>
        <div className="w-[40px] h-[40px] bg-lightGray rounded-full flex items-center justify-center">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.92643 13.8226L14.8481 3.7224M14.8481 3.7224L13.9738 14.2929M14.8481 3.7224L4.2776 2.8481"
              stroke="#282828"
              strokeWidth="4.23528"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <p className="text-black">{t(`${item}.shortDescription`)}</p>
      {isVideo ? (
        <video
          className="w-full min-h-[50vh] max-h-[50vh] rounded-10 object-fill"
          src={serviceImage}
          autoPlay
          loop
          muted
        />
      ) : (
        <img
          className="w-full min-h-[50vh] max-h-[50vh] rounded-10 object-fill"
          src={serviceImage}
        />
      )}
    </div>
  );
};

export default Card;
