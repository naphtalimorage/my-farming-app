import { Quote } from "lucide-react";

const Details = [
  {
    name: "Peter- Farmer ",
    message:
      "Royal Seed delivered an exceptional experience from start to finish! The ordering process was seamless, with a diverse selection of high-quality seeds. The carefully packaged seeds yielded a bumper harvest, showcasing their excellent germination rates and plant vigor. What truly stood out was their outstanding customer service – knowledgeable and responsive. I highly recommend Royal Seed for top-notch products and exceptional support. Thank you for making my gardening journey a success!",
  },
  {
    name: "Brenda- Farmer",
    message:
      "Good morning Royal Seed, am a very satisfied farmer.Have been doing your products for the last 3 years.The quality of products is unmatched especially the Red Pinoy.Good job.Keep up.",
  },
  {
    name: "JKalenko Farmer",
    message:
      "I'm a farmer based in makueni and I have been buying healthy and quality vegetable seedlings from royal seed and they have given me returns I've never experienced before.Keep it up Royal seed👌",
  },
];
const AboutTestmonials = () => {
  return (
    <>
      <div className="bg-gray-500 lg:h-[700px] py-6 lg:py-10">
        <h1 className="flex justify-center text-3xl  lg:text-4xl text-black ">
          Testmonials
        </h1>
        <p className="flex justify-center mt-2 lg:mt-5 text-base lg:text-lg text-black">
          this is what our customer say about our seeds{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:px-40 ">
          {Details.map((item) => (
            <div key={item.name} className="flex justify-center items-center lg:items-start">
              <div  className="px-8 lg:px-0 lg:w-72 mt-8 lg:mt-14 ">
                <div className="flex justify-center mb-8">
                  <Quote size={32} />
                </div>
                <h1 className="flex justify-center text-base">{item.name}</h1>
                <p className="flex justify-center w-full ">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutTestmonials;
