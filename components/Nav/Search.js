import { Fragment } from "react";

export default function Search() {
  return (
    <Fragment>
      <div className="relative">
        <input
          className="placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm md:text-lg border border-blueGray-300 outline-none focus:outline-none focus:ring  lg:w-72 lg:h-14  w-8/12  h-8 sm:h-16 sm:w-56 md:w-60  "
          placeholder="Search Products "
        />
        <button className="absolute right-3 top-5 hidden sm:block md:top-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </Fragment>
  );
}
