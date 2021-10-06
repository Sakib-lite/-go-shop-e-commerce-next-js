import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function CartButton() {
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const number = totalItems > 9 ? "ml-1 mt-1 sm:text-lg" : "";
  return (
    <Fragment>
      <button
        onClick={cartHandler}
        type="button"
        className="items-center  sm:mx-2 "
      >
        <div className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
          <span className="sm:px-4 px-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <span className="pl-1 sm:py-2 sm:px-4    pr-2 py-1 text-gray-300 font-medium text-sm sm:text-2xl">
            Cart
          </span>
        </div>
      </button>
      <div className="absolute -right-2 -top-4  sm:-top-6 text-xs sm:text-xl cursor-text items-center text-red-700 font-bold ">
        <p className="">{totalItems}</p>
      </div>
    </Fragment>
  );
}
