import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function CartItem({ id, totalPrice, title, quantity }) {
  const dispatch = useDispatch();

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItemfromCart(id));
  };

  return (
    <Fragment>
      <li className="border-gray-400 flex  mb-1 w-52 sm:w-64">
        <div className="shadow border   bg-white 0 rounded-md  items-center md:p-1  flex p-1">
          <div className="">
            <div className="">
              <p className="font-medium text-xs sm:text-sm line-clamp-1 lg:text-lg ">
                {title}
              </p>
            </div>
            <div className="mt-5 flex">
              <p className="text-sm">${totalPrice.toFixed(2)}</p>
              <p className="ml-auto text-sm">x{quantity}</p>
            </div>
          </div>
          <div className="ml-auto">
            <button className="" onClick={removeCartItemHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
    </Fragment>
  );
}
