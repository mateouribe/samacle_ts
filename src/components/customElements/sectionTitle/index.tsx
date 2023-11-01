type Props = {
  text: string | JSX.Element;
  className?: string;
  noMaxHeight?: boolean;
};

const SectionTitle = ({ text, className = "", noMaxHeight = false }: Props) => {
  return (
    <h2
      className={`text-titleMobile md:text-titleTablet ${className} ${
        noMaxHeight ? "" : "max-h-[42px] md:max-h-[62px] sectionTitle"
      }`}
      dangerouslySetInnerHTML={{ __html: text }}
    ></h2>
  );
};

export default SectionTitle;
