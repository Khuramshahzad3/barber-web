import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Contactus" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
