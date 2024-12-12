import Nappier from "../assets/download.jpeg";
import Vision from "./Vision";
import Desmodium from "../assets/download1.jpeg";
import AboutTestmonials from "./AboutTestmonials";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        className="relative w-full h-[320px] lg:h-[460px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Desmodium})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10  text-white text-center ">
          <div className="flex flex-row px-24 py-64">
            <div className="border-l-4 sm:border-l-6  lg:border-l-8 border-white absolute top-[220px] lg:top-[275px] left-8 lg:left-24 h-16 lg:h-32 "></div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl absolute top-56 lg:top-72 left-10 lg:left-28">
              Overview
            </h1>
          </div>
          <div className=" absolute lg:bottom-32 lg:right-20 hidden lg:block">
            <div className="flex felx-row lg:flex-row">
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
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between bg-green-800 lg:h-[700px] px-4 sm:px-8 lg:px-0">
        <div className="lg:ml-20 mt-8 lg:mt-10">
          <h1 className="text-xl lg:text-2xl font-bold font-sans text-white">
            Who we are
          </h1>
          <p className="text-white max-w-[600px] lg:text-lg mt-4 lg:mt-8">
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
        <div className="mt-10 mb-5 lg:mb-0 lg:mt-20">
          <img src={Nappier} alt="" className="w-full lg:w-96 max-h-[500px] object-cover" />
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
