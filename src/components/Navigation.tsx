import { NavLink } from "react-router-dom";
import Logo from "../assets/TopFarm.png";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu} from "lucide-react";
function NavList() {
  return (
    <ul className="py-2 flex flex-col gap-3 lg:flex-row lg:gap-6 lg:py-4">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-red-600 hover: " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-red-600" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-red-600" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

const Navigation = () => {
  return (
    <>
      <nav className="fixed bg-white top-0 z-40 w-full border">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 py-1 sm:py-1 lg:py-2 ">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex flex-row max-w-[180px] bg-white ">
              <img src={Logo} alt="" className="w-10 lg:w-16 object-cover" />
              <div className="flex flex-col  ">
                <h1 className="text-18 lg:text-[25px] font-semibold text-green-700">
                  TopFarm
                </h1>
                <p className="flex justify-center text-[10px] lg:text-xs text-green-700">
                  Seed Company
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                  </SheetHeader>
                  <NavList/>
                </SheetContent>
              </Sheet>{" "}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
