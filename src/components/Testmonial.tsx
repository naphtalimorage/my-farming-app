import Nappier from "../assets/download1.jpeg";
import Lucerne from "../assets/download.jpeg";
import Hay from "../assets/download1.jpeg";
import Desmodium from "../assets/download.jpeg";
import { Quote } from "lucide-react";

const cardDetails = [
  {
    photo: (
      <img
        src={Nappier}
        alt="image1"
        className="rounded-full w-44 h-44 object-cover"
      />
    ),
    name: "Atlas F1- Farmer ",
    message:
      "Harvest time round one, 10 tones (atlas Butternut) Royal Seed the Best.",
  },
  {
    photo: (
      <img
        src={Lucerne}
        alt="image2"
        className="rounded-full  w-44 h-44 object-cover"
      />
    ),
    name: "Snow Horizon - Farmer",
    message:
      "Sweet Horizon- The Best of all Variety. Harvesting for 3-4 months & very sweet.  Most of the exporters like it because they say it's  sweet in the outside countries.",
  },
  {
    photo: (
      <img
        src={Hay}
        alt="image3"
        className="rounded-full w-44 h-44 object-cover"
      />
    ),
    name: "Red Pinoy - Farmer",
    message:
      "You have excellent seed,  your red pinot is the best onion variety, I've ever planted and recommend ed,  your buffalo F1 Capsicum is the best in the market. The fruit weight and bearing ability.Top Notch! Keep it Up",
  },
  {
    photo: (
      <img
        src={Desmodium}
        alt="image4"
        className="rounded-full  w-44 h-44 object-cover"
      />
    ),
    name: "Royal 705 F1 - Farmer",
    message:
      "Mbegu za Nyanya za Royal 705 F1 kutoka Royal Seed ziliboresha sana bustani yangu ya nyanya. Rangi yenye kuvutia, ladha nzito, na upinzani dhidi ya magonjwa hufanya ziwe lazima kwa mpenzi yeyote wa nyanya. Royal Seed hutoa ubora kila wakati",
  },
];

const Testmonial = () => {
  return (
    <>
      <div className="mt-12 mb-10">
        <h1 className="text-4xl text-black flex justify-center">Testmonials</h1>
        <p className="flex justify-center mt-5 text-lg text-black">
          this is what our customer say about our seeds{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 px-16 mt-10">
          {cardDetails &&
            cardDetails.map((details) => (
              <div key={details.name} className=" w-72 px-8 relative">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center absolute top-36 right-16 ">
                    <Quote size={20} color="white" />
                </div>
                <div className="flex justify-center mt-6">{details.photo}</div>
                <div className="flex justify-center mt-5 font-bold ">
                  {details.name}
                </div>
                <div className="flex justify-center mt-3">
                  {details.message}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Testmonial;
