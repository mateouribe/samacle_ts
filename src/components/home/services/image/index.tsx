type Props = {
  image: string;
};

const Image = ({ image }: Props) => {
  return (
    <div
      className="w-full h-full service-image rounded-20"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Image;
