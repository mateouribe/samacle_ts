import Section from "../../customElements/section";
import { services } from "../../../utils/constants";
import Card from "./card";

const Options = () => {
  return (
    <Section hasPadding className="flex flex-col h-full gap-100 pt-desktop">
      {services.map((service, index) => (
        <Card serviceImage={service.image} index={index} key={index} />
      ))}
    </Section>
  );
};
export default Options;
