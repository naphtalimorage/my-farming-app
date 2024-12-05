import { Link } from "react-router-dom";
import CarouselPage from "./Carousel";
import about1 from "../assets/about1.jpg";
import about3 from "../assets/about3.jpg";
import { Button } from "./ui/button";
import Testmonial from "./Testmonial";

const Home = () => {
  return (
    <>
      <div className="h-[400px]">
        <CarouselPage />
      </div>
      <div className="flex flex-row gap-20 mt-10 ">
        <div>
          <img src={about3} alt="" className="w-[600px] h-80 object-cover" />
        </div>
        <div className="w-[700px]">
          <h2 className="text-4xl mt-4">About TopFarm</h2>
          <p className="mt-6 text-base w-[620px]">
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
            <Button className="mt-12 px-10 py-6 bg-red-600 hover:bg-red-500 hover:underline text-base">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex  flex-row px-16 mt-10 gap-10 ">
        <div>
          <h2 className="font-bold text-4xl">OUR PRODUCTS</h2>
          <p className="w-96">
            At TopFarm, we take pride in offering a diverse range of
            high-quality seeds designed to meet the needs of modern farmers. Our
            flagship products include top-performing varieties that are the
            result of rigorous research and development. From vibrant vegetables
            to resilient grains, our seeds are engineered for optimal yield and
            superior quality. Trust Royal Seed for innovative solutions that
            drive agricultural success.
          </p>
          <Link to="/contact">
            <Button className="mt-10 px-10 py-6 bg-red-600 hover:bg-red-500 hover:underline text-base">
              Our Seeds
            </Button>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
            <img
              src={about1}
              alt=""
              className="w-[350px] h-[150px] object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <Testmonial/>
      </div>
  
    </>
  );
};

export default Home;
