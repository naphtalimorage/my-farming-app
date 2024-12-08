import Nappier from "../assets/image5.jpeg";
import Vision from "./Vision";
import Desmodium from "../assets/download1.jpeg";
import AboutTestmonials from "./AboutTestmonials";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="relative w-full h-96 bg-cover bg-center bg-fixed "
        style={{ backgroundImage: `url(${Desmodium})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10  text-white text-center ">
          <div className="flex flex-row px-24 py-44">
            <div className="h-32 border-l-8 border-white"></div>
            <h1 className="text-5xl mx-4 mt-3">Overview</h1>
          </div>
          <div className="flex felx-row absolute bottom-40 right-10">
            <Link
              to="/"
              className="text-base text-gray-400 hover:text-gray-200"
            >
              Home
            </Link>
            <div className="h-4 mt-1 border-l-2 border-gray-400 mx-2"></div>
            <h1 className=" text-gray-300">Overview</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between bg-green-800 h-[700px]">
        <div className="ml-20 mt-20">
          <h1 className="text-2xl font-bold font-sans text-white">Who we are</h1>
          <p className="text-white w-[600px] text-lg mt-8">
            TopFarm aims to be the leader in promoting sustainable farming in
            Africa. To enable us realize this vision we have established a
            Center of Excellence in Athi River to enable us share knowledge and
            be practices with our farmers. By so doing, we believe that we will
            contribute to meeting society's food needs in the present without
            compromising the ability of future generations to continue farming.
            A qualified professional team comprising of Executive Directors,
            Finance & IT Professionals, Agronomists, and a fully-fledged Sales &
            Marketing Team runs the business.
          </p>
        </div>
        <div className=" mt-20">
          <img src={Nappier} alt="" className=" w-96 h-[500px] object-cover" />
        </div>
      </div>
      <div>
        <Vision />
      </div>
      <div>
        <AboutTestmonials />
      </div>
    </>
  );
};

export default About;
