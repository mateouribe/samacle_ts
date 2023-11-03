type Props = {
  title: string;
  text: string;
};

const Card = ({ title, text }: Props) => {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10">
      <h5 className="text-black font-medium text-[25px] lg:text-[40px]">
        {title}
      </h5>
      <p className="text-black" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default Card;
