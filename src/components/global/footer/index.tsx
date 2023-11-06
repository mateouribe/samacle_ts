import { colors } from "../../../utils/constants";
import { navigateToPage } from "../../../utils/navigateToPage";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import SocialMedia from "../socialMedia";
import ATag from "../../customElements/aTag";
import icon from "../../../assets/images/icon.svg";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className="relative w-full min-h-[80vh] bg-lightGray px-mobile md:px-tablet lg:px-desktop pt-tablet flex flex-col rounded-t-[10%] overflow-hidden pb-100">
      <div className="flex flex-col justify-between w-full h-full md:flex-row gap-100 md:gap-0">
        <div className="w-full md:w-[20%] flex flex-col md:flex-col gap-50">
          <span className="text-sm text-gray">
            © 2023 Samacle. All right Reserved.
          </span>
          <div className="flex w-full gap-30">
            <ul>
              <li className="text-black">Menu</li>
              <li
                className="text-sm font-light text-black "
                onClick={() => {
                  navigateToPage(navigate, "/");
                }}
              >
                <ATag href={undefined} colorHover="#9E9E9E">
                  {t("nav.home")}
                </ATag>
              </li>
              <li
                className="text-sm font-light text-black "
                onClick={() => {
                  navigateToPage(navigate, "/our-services");
                }}
              >
                <ATag href={undefined} colorHover="#9E9E9E">
                  {t("nav.services")}
                </ATag>
              </li>
              <li
                className="text-sm font-light text-black "
                onClick={() => {
                  navigateToPage(navigate, "/our-projects");
                }}
              >
                <ATag href={undefined} colorHover="#9E9E9E">
                  {t("nav.projects")}
                </ATag>
              </li>
              <li
                className="text-sm font-light text-black "
                onClick={() => {
                  navigateToPage(navigate, "/about-us");
                }}
              >
                <ATag href={undefined} colorHover="#9E9E9E">
                  {t("nav.about")}
                </ATag>
              </li>
              <li
                className="text-sm font-light text-black "
                onClick={() => {
                  navigateToPage(navigate, "/contact-us");
                }}
              >
                <ATag href={undefined} colorHover="#9E9E9E">
                  {t("nav.contact")}
                </ATag>
              </li>
            </ul>
            <ul>
              <li className="text-black">{t("nav.contact")}</li>
              <li className="text-sm font-light text-black">
                <ATag href="mailto:team@samacle.com" colorHover="#9E9E9E">
                  team@samacle.com
                </ATag>
              </li>
              <li className="text-sm font-light text-black">
                <ATag href="tel:=14375186019" colorHover="#9E9E9E">
                  +1 (437) 518-6019
                </ATag>
              </li>
              <li className="text-sm font-light text-black">
                <ATag href="tel:=14374730048" colorHover="#9E9E9E">
                  +1 (437) 473-0048
                </ATag>
              </li>
              <li className="text-sm font-light text-black">
                <ATag href="/" colorHover="#9E9E9E">
                  Waterloo, ON, Canada.
                </ATag>
              </li>
            </ul>
          </div>
          <ul className="flex flex-row gap-5 max-w-fit">
            <SocialMedia color={colors.gray} bgColor="#ECECEC" />
          </ul>
        </div>
        <div className="w-full md:w-[50%] h-full">
          <label className="flex flex-col gap-10">
            <p className="text-[22px] md:text-[32px] text-black">
              {t("footer.promotionFooter")}
            </p>
            <input
              className="w-full px-20 py-20 bg-transparent border-[1px] border-gray text-gray placeholder:text-gray focus-visible:outline-none focus-visible:border-main"
              placeholder="hello@me.com"
            />
          </label>
        </div>
      </div>
      <img
        src={icon}
        alt="A Big icon representing Samacle - a web agency in Canada, positioned in the footer of the web page."
        loading="lazy"
        className="px-mobile md:px-tablet lg:px-desktop absolute -bottom-[5%] lg:-bottom-[20%] w-full left-1/2 transform -translate-x-1/2"
      />
    </footer>
  );
};

export default Footer;
