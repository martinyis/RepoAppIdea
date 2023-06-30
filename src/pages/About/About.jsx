import { useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Main from "./components/Main";
const About = () => {
  return (
    <div className="flex flex-col min-h-screen px-6 max-w-[100%] mx-auto relative pb-[300px]">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default About;
