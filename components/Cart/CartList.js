import { Fragment, useEffect } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const emptyCart = useSelector((state) => state.ui.emptyCart);

  useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(uiActions.setEmptycartFalse());
    } else {
      dispatch(uiActions.setEmptycartTrue());
    }
  }, [dispatch, cartItems.length]);

  return (
    <Fragment>
      <div className="">
        <div className=" flex flex-row  ">
          <ul className="flex flex-col h-auto ">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                totalPrice={item.totalPrice}
                title={item.title}
                quantity={item.quantity}
              />
            ))}
            {emptyCart && (
              <li className="border-gray-400 flex  mb-1 w-52 sm:w-64 ">
                <div className="shadow border   bg-white 0 rounded-md  items-center md:p-4  flex p-1">
                  <p className="font-medium text-xs sm:text-sm line-clamp-2 lg:text-lg text-red-500 ">
                    Your Shopping Cart is empty!
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
        {!emptyCart && (
          <button
            type="button"
            className="py-2 px-1  bg-gradient-to-r from-green-400 to-blue-500 text-white  transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 w-24 ml-auto"
          >
            <Link href="/orders" passHref>
              {" "}
              Place Order
            </Link>
          </button>
        )}
      </div>
    </Fragment>
  );
}
