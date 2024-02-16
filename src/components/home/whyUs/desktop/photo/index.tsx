type Props = {
  image: string;
  color: string;
};

const Photo = ({ image, color }: Props) => {
  return (
    <div
      className="desktopPhoto absolute w-full lg:w-[80%] h-full right-0 rounded-20"
      style={{
        background: `linear-gradient(180deg, ${color.split(" ")[0]} 0%, ${
          color.split(" ")[1]
        } 100%)`,
      }}
    >
      <div className="w-full h-full relative px-[30px] py-[50px]">
        <div
          className="absolute w-[calc(100%-60px)] h-[calc(100%-100px)] lg:w-[calc(100%-100px)] lg:h-[calc(100%-200px)] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[15px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: `0px 20px 42px 5px ${color.split(" ")[2]}`,
          }}
        />
      </div>
    </div>
  );
};

export default Photo;
