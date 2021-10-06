import Image from "next/image";
// import Link from "next/link";
import { useContext } from "react";
import Catagories from "./Catagories/Catagories";
import Search from "./Search";
import StateContext from "../context/State";
import Dropdown from "./Dropdown";
import Link from "../Link";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../store/form-slice";

export default function Nav() {
  const ctx = useContext(StateContext);
  const loggedIn = useSelector((state) => state.form.loggedIn);
  const dispatch = useDispatch();

  const dropdownClass = !ctx.showDropdown ? "hidden" : "";
  return (
    <div className=" relative">
      <nav className=" bg-gray-100  items-center  lg:h-26 ">
        <div className="lg:flex py-4 h-26 items-center">
          <div className="flex items-center lg:w-7/12 ">
            <div className=" h-10 w-16 md:h-auto md:w-auto ml-6 ">
              <Image
                src="/../public/vector/default-monochrome.svg"
                alt="logo"
                width={120}
                height={60}
              />
            </div>
            <div className="mx-auto  ">
              <Cart />
            </div>
            <div className="mx-auto  ml-4">
              <Search />
            </div>

            <div className="lg:hidden sm:mr-2 ml-auto mr-4">
              <Dropdown />
            </div>
          </div>

          <div
            className={`${dropdownClass} absolute lg:static inset-y-0 right-0  lg:bg-transparent bg-gray-300  translate-x-0   lg:block  transition-transform duration-700 ease-in-out sm:px-6 md:w-64 md:px-8 lg:px-0 lg:w-auto lg:ml-auto `}
          >
            <div className="flex mt-2 mr-3 sm:w-56 sm:h-20 lg:hidden">
              <Image
                src="/../public/happy-cover.png"
                alt="logo"
                width={150}
                height={55}
                className="rounded-lg"
              />
              <button
                className="ml-auto mr-2"
                type="button"
                onClick={ctx.toggleDropdownHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" lg:bg-gray-100 bg-gray-300 relative z-50 sm:-ml-6 sm:-mr-4 md:-ml-8 md:-mr-8 lg:ml-0 lg:mr-0 rounded-lg">
              <ul className="lg:space-x-4 lg:ml-auto lg:mr-4 block  lg:space-y-0 space-y-2 ml-6  sm:space-y-4 lg:flex lg:pb-0 pb-10 lg:pt-0 pt-4">
                <li className="">
                  <Link href="/" activeClassName="text-santas-gray-400 ">
                    <a className="text-gray-700 font-serif  hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Catagories />
                </li>

                <li className="">
                  <Link href="/orders" activeClassName="text-santas-gray-400 ">
                    <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                      Orders
                    </a>
                  </Link>
                </li>
                {!loggedIn && (
                  <li className="">
                    <Link href="/login" activeClassName="text-santas-gray-400 ">
                      <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl ">
                        Log In
                      </a>
                    </Link>
                  </li>
                )}
                {loggedIn && (
                  <li className="">
                    <button
                      className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl  "
                      onClick={() => dispatch(formActions.logOut())}
                    >
                      Log Out
                    </button>
                  </li>
                )}
                {!loggedIn && (
                  <li className="">
                    <Link
                      href="/signup"
                      activeClassName="text-santas-gray-400 "
                    >
                      <a className="text-gray-700 font-serif hover:text-gray-800 lg:text-lg text-lg sm:text-xl  ">
                        Sign Up
                      </a>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
