import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";

type Props = {
  color: string;
  bgColor: string;
};

const SocialMedia = ({ color, bgColor }: Props) => {
  return (
    <>
      <li
        className="p-5 rounded-full"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <a href="https://www.instagram.com/samacle.inc/?hl=es" target="_blank">
          <AiOutlineInstagram color={color} size={20} />
        </a>
      </li>
      <li
        className="p-5 rounded-full"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <a href="https://www.behance.net/samacle" target="_blank">
          <AiOutlineBehance color={color} size={20} />
        </a>
      </li>
    </>
  );
};

export default SocialMedia;
