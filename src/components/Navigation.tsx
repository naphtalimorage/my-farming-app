import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="">
        <nav className=" flex justify-between px-6 py-4">
          <h1 className="text-green-600 text-2xl font-bold font-serif">
            TopFarm
          </h1>
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
                to="/about"
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
        </nav>
      </div>
    </>
  );
};

export default Navigation;
