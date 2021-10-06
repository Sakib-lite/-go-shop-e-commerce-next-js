import { Fragment, useContext } from "react";
import StateContext from "../context/State";

export default function Dropdown() {
  const ctx = useContext(StateContext);

  return (
    <Fragment>
      <button type="button" onClick={ctx.toggleDropdownHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </button>
    </Fragment>
  );
}
