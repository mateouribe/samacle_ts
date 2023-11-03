import Card from "./card";
import { useTranslation } from "react-i18next";

const Stadistics = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full px-mobile pt-[5px] md:px-tablet lg:px-desktop grid grid-cols-1 md:grid-cols-3 gap-50">
      <Card title="97%" text={t("services.stats.statOne")} />
      <Card title="40%" text={t("services.stats.statTwo")} />
      <Card title="x3" text={t("services.stats.statThree")} />
    </div>
  );
};

export default Stadistics;
