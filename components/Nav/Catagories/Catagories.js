/* eslint-disable react/no-unknown-property */
import { Fragment, useContext } from "react";
import StateContext from "../../context/State";
// import Link from 'next/link'

import NestedCatagories from "./NestedCatagories";

export default function Catagories() {
  const ctx = useContext(StateContext);

  return (
    <Fragment>
      <a
        className="text-gray-700 font-serif hover:text-gray-800  lg:text-lg flex cursor-pointer text-lg  "
        onClick={ctx.toggleCatagoriesHandler}
      >
        
        Catagories
        {ctx.showCatagories && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  mt-1 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {!ctx.showCatagories && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor "
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </a>

      {!ctx.showCatagories && (
        <div className="lg:h-0 ml-8 lg:ml-0  lg:w-0 h-26 lg:mt-4">
          <ul className="  space-y-2  lg:bg-gray-100 lg:w-40 lg:py-6 lg:rounded-lg">
            <NestedCatagories />
          </ul>
        </div>
      )}
    </Fragment>
  );
}
