import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Man from "../assets/Man.jpeg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(1, { message: "email is required" }).email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Your message is required",
  }),
});
const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send("service_fjcg6al", "template_apf3wcs", values, "73quFXqH1ORfAlg9E")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div
        className="relative w-full h-[320px] lg:h-[460px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Man})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white ">
          <div className="border-l-4 sm:border-l-6  lg:border-l-8 border-white absolute top-[220px] lg:top-[275px] left-8 lg:left-24 h-16 lg:h-32 "></div>
          <div className="relative flex flex-col sm:flex-col lg:flex-row justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl absolute top-56 lg:top-72 left-10 lg:left-28">
                Contact-Us
              </h1>
            </div>
            <div className="absolute top-[200px] lg:top-[310px] lg:right-10 hidden lg:block">
              <p className="max-w-400px text-xs sm:text-sm lg:text-base">
                Experience the ultimate customer care at TopFarm,
                <br /> where flexibility meets dedication.
              </p>
              <div className="flex flex-row lg:mt-5 ">
                <Link
                  to="/"
                  className="text-sm lg:text-base text-gray-400 hover:text-gray-200"
                >
                  Home
                </Link>
                <div className="h-2 lg:h-4 mt-1 border-l-2 border-gray-400 mx-2"></div>
                <h1 className="text-sm lg:text-base text-gray-300">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-col justify-between px-4 sm:px-8 lg:px-20 lg:mb-10 items-center">
        <div className="w-full lg:w-[500px] lg:mb-20 mt-4">
          <p className="">
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
            <a href="mailto:farmtop953@gmail.com">
              <p className="ml-6 text-red-600 underline">
                farmtop953@gmail.com{" "}
              </p>
            </a>
          </div>
          <div className="flex flex-row mt-5">
            <Clock size={18} className="" />
            <p className="ml-6">
              Mon - Friday: 8:00 AM to 5:00 PM, Sat, Sunday & Public Holidays:
              Closed
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[500px] lg:mt-10 mb-4 mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <p>
                If you’d prefer not to use our contact form, feel free to send
                us an email directly or give us a call. We’d love to hear from
                you! Here’s our direct email and phone number.
              </p>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="px-10 py-6 w-full bg-red-600 hover:bg-red-500 text-base"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
