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

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={20}
        color="239, 78, 38"
        outerAlpha={0.2}
        // innerScale={0.7}
        // outerScale={5}
      />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-projects" element={<Projects />} />
        <Route path="/our-projects/study-case/:link" element={<StudyCase />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
