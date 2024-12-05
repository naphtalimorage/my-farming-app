import Nappier from "../assets/image5.jpeg";
import Vision from "./Vision";
import Desmodium from "../assets/Des.jpg";
import AboutTestmonials from "./AboutTestmonials";

const About = () => {
  return (
    <>
      <div>
        <img src={Desmodium} alt="" className="w-full h-96 object-cover" />
      </div>

      <div className="flex flex-row justify-between bg-green-800 h-[700px]">
        <div className="ml-20 mt-20">
          <h1 className="text-6xl font-bold font-sans text-white">About Us</h1>
          <p className="text-white w-[600px] text-lg mt-10">
            TopFarm aims to be the leader in
            promoting sustainable farming in Africa. To enable us realize this
            vision we have established a Center of Excellence in Athi River to
            enable us share knowledge and be practices with our farmers. By so
            doing, we believe that we will contribute to meeting society's food
            needs in the present without compromising the ability of future
            generations to continue farming. A qualified professional team
            comprising of Executive Directors, Finance & IT Professionals,
            Agronomists, and a fully-fledged Sales & Marketing Team runs the
            business.
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
