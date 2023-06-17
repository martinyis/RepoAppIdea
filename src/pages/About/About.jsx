import { useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Main from "./components/Main";
const About = () => {
  return (
    <div className="flex flex-col min-h-screen px-6 max-w-[1440px] mx-auto">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default About;
