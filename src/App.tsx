import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import FooterWithSocialLinks from "./components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <FooterWithSocialLinks/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
