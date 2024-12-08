import { NavLink } from "react-router-dom";
import Logo from "../assets/TopFarm.png";

const Navigation = () => {
  return (
    <>
      <div className="">
        <nav className="flex flex-row justify-between px-6 ">
          <div className="flex flex-row w-[180px] bg-white">
            <img src={Logo} alt="" className="w-16 object-cover" />
            <div className="flex flex-col  ">
              <h1 className="text-[25px] font-semibold text-green-700">
                TopFarm
              </h1>
              <p className="flex justify-center text-xs text-green-700">
                Seed Company
              </p>
            </div>
          </div>
          <div className="py-4">
            <ul className="list-none flex space-x-10 mr-32">
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
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
