import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import OurServices from "./pages/OurServices";
import Branches from "./pages/Branches";
import Franchise from "./pages/Franchise";
import ContactUs from "./pages/ContactUs";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<WhoWeAre />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}
