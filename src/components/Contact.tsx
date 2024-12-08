import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Man from "../assets/Man.jpeg";
const Contact = () => {
  return (
    <>
      <div
        className="relative w-full h-[460px] bg-cover bg-center  "
        style={{ backgroundImage: `url(${Man})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white ">
          <div className=" border-l-8 border-white absolute top-[275px] left-24 h-32 ">  
          </div>
          <div className="relative flex flex-row justify-between">
            <div>
              <h1 className="text-5xl absolute top-72 left-28">Contact-Us</h1>
            </div>
            <div className="absolute top-[310px] right-10">
              <p className="w-400px">
                Experience the ultimate customer care at TopFarm,
                <br /> where flexibility meets dedication.
              </p>
              <div className="flex flex-row mt-5">
                <Link to="/" className="text-base text-gray-400 hover:text-gray-200">
                  Home
                </Link>
                <div className="h-4 mt-1 border-l-2 border-gray-400 mx-2"></div>
                <h1 className=" text-gray-300">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between px-20 mb-10">
        <div className="w-[500px]">
          <p className="mt-9">
            We’d be delighted to host you at our office for a conversation. We
            look forward to welcoming you
          </p>
          <div className="flex flex-row  mt-8">
            <MapPin size={16} className="mt-[4px]" />
            <p className="ml-6">
              Nakuru , Transview Avenue Off Nairobi - Namanga Road
            </p>
          </div>
          <div className="flex flex-row mt-5">
            <div>
              <Phone size={16} className="mt-[4px]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold ml-5">TEL:</h1>
              <p className="ml-10 text-red-600 underline">
                +254 722 000 000 <br />
                +254 725 549 997 <br />
                +254 734 257 635 <br />
                +254 793 248 085 <br />
                +254 793 248 086
                <br />
                <h1 className="text-black font-semibold underline">
                  WhatsApp No.
                </h1>
                +254 780 884 087
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-5">
            <Mail size={18} className="" />
            <Link to="naphtalimorage56@gmail">
              <p className="ml-6 text-red-600 underline">
                naphtalimorage56@gmail.com
              </p>
            </Link>
          </div>
          <div className="flex flex-row mt-5">
            <Clock size={18} className="" />
            <p className="ml-6">
              Mon - Friday: 8:00 AM to 5:00 PM, Sat, Sunday & Public Holidays:
              Closed
            </p>
          </div>
        </div>
        <div className="w-[500px] mt-9">
          <form className="flex flex-col gap-4">
            <p>
              If you’d prefer not to use our contact form, feel free to send us
              an email directly or give us a call. We’d love to hear from you!
              Here’s our direct email and phone number.
            </p>
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="border w-full py-2 rounded-sm px-2 "
            />
            <label htmlFor="email" className="m-0">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="border w-full py-2 rounded-sm px-2"
            />
            <label htmlFor="text">Message</label>
            <textarea
              name="textare"
              id="text"
              rows={5}
              className="border w-full rounded-sm px-2 py-2"
              placeholder=" Write your message here..."
            ></textarea>
            <Button
              type="submit"
              className="px-10 py-6 bg-red-600  hover:bg-red-500 text-base"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
