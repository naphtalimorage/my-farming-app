import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Desmodium from "../assets/Des.jpg";
const Contact = () => {
  return (
    <>
      <div>
        <img
          src={Desmodium}
          alt="desmodium"
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="flex lg:flex-row sm:flex-col justify-between px-20 mb-10">
        <div className="w-[500px]">
          <h1 className="text-6xl mt-10">Contact Us</h1>
          <p className="mt-8">
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
        <div className="w-[500px] mt-16">
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
            <label htmlFor="email" className="m-0">E-mail</label>
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
