import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Services,
  Projects,
  StudyCase,
  About,
  Contact,
} from "./screens/index";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";
import AnimatedCursor from "react-animated-cursor";
import { useStatesContext } from "./context/StatesProvider";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const App: React.FC = () => {
  const location = useLocation();
  const { isDesktop } = useStatesContext();
  const lenis = useLenis(() => {
    // called every scroll
  });

  return (
    <>
      <Navbar />
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          duration: 2,
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-projects" element={<Projects />} />
          <Route
            path="/our-projects/study-case/:link"
            element={<StudyCase />}
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </ReactLenis>

      {isDesktop && (
        <AnimatedCursor
          innerSize={12}
          outerSize={20}
          color="58, 58, 58"
          outerAlpha={0.2}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            {
              target: ".link",
              color: "239, 78, 38",
            },
            {
              target: ".link",
              color: "239, 78, 38",
            },
          ]}
        />
      )}
      <Footer />
    </>
  );
};

export default App;
