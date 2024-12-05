import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import image11 from "../assets/image11.jpeg";
import image10 from "../assets/image10.jpeg";
import image20 from "../assets/image20.jpeg";
import image1 from "../assets/image1.jpeg";
import Autoplay from "embla-carousel-autoplay"



const CarouselPage = () => {
  return (
    <>
    <div className="">
    <Carousel
       plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}>
        <CarouselContent>
          <CarouselItem><img src={image11} alt="image1" className="w-full h-[400px] object-cover"/></CarouselItem>
          <CarouselItem><img src={image10} alt="image3" className="w-full h-[400px] object-cover"/></CarouselItem>
          <CarouselItem><img src={image1} alt="image4" className="w-full h-[400px] object-cover"/></CarouselItem>
          <CarouselItem><img src={image20} alt="image2" className="w-full h-[400px] object-cover"/></CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
      
    </>
  );
};

export default CarouselPage;
