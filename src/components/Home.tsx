import { Link } from "react-router-dom";
import CarouselPage from "./Carousel";
import image1 from "../assets/download3.jpeg";
import about3 from "../assets/download1.jpeg";
import { Button } from "./ui/button";
import Testmonial from "./Testmonial";

const Home = () => {
  return (
    <>
      <div className="h-[280px] max-h-[400px]">
        <CarouselPage />
      </div>
      <div className="flex flex-col gap-10 mt-16 lg:flex-row lg:gap-20 lg:mt-52 px-4 lg:px-0">
        <div>
          <img src={about3} alt="" className="w-full lg:w-[600px] h-44 lg:h-80 object-cover" />
        </div>
        <div className="lg:w-[700px]">
          <h2 className="text-2xl mb-3 lg:mb-0 lg:text-4xl lg:mt-4">About TopFarm</h2>
          <p className="lg:mt-6 lg:text-base max-w-[620px]">
            TopFarm Is a brand name of Kenya Highland Seed Company Limited
            (KHSCL) which aims to be the leader in promoting sustainable farming
            in Africa. To enable us realize this vision we have established a
            Center of Excellence in Athi River, Kenya to enable us share
            knowledge and be practices with our farmers. By so doing, we believe
            that we will contribute to meeting society's food needs in the
            present without compromising the ability of future generations to
            continue farming.
          </p>
          <Link to="/about"> 
            <Button className="mt-4 lg:mt-12 lg:px-10 lg:py-6 bg-red-600 hover:bg-red-500 hover:underline lg:text-base">
              Learn More   
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-16 mt-6 lg:mt-10 gap-5 lg:gap-10 px-4  ">
        <div>
          <h2 className="font-bold text-2xl lg:text-4xl">OUR PRODUCTS</h2>
          <p className="max-w-96">
            At TopFarm, we take pride in offering a diverse range of
            high-quality seeds designed to meet the needs of modern farmers. Our
            flagship products include top-performing varieties that are the
            result of rigorous research and development. From vibrant vegetables
            to resilient grains, our seeds are engineered for optimal yield and
            superior quality. Trust Royal Seed for innovative solutions that
            drive agricultural success.
          </p>
          <Link to="/contact">
            <Button className="mt-4 lg:mt-10 lg:px-10 lg:py-6 bg-red-600 hover:bg-red-500 hover:underline text-base">
              Our Seeds
            </Button>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8">
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${about3})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${about3})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            <div
              className="relative h-40 w-full lg:h-[150px] lg:w-[250px] bg-cover bg-center "
              style={{ backgroundImage: `url(${about3})` }}
            >
              <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent via-black via-5% opacity-90"></div>
              <div className="relative z-10 ">
                <h1 className="text-red-600 text-xl  absolute top-28 left-6">DESMODIUM</h1>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Testmonial />
      </div>
    </>
  );
};

export default Home;