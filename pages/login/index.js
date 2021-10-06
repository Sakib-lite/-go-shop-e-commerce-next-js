import { Fragment, useEffect, useContext } from "react";
import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import { useSelector, useDispatch } from "react-redux";
import {
  sendCartData,
  fetchCartData,
  fetchUserdata,
} from "../../components/store/thunk";
import StateContext from "../../components/context/State";
import Login from "../../components/login/Login";

export default function LoginPage() {
  const dispatch = useDispatch();

  const ctx = useContext(StateContext);

  const blurBackground = ctx.showDropdown ? " opacity-30" : "";

  const cart = useSelector((state) => state.cart);
  const stateChange = useSelector((state) => state.cart.initialCartChanged);

  // const user=useSelector((state)=>state.form.users)
  // console.log(user);

  useEffect(() => {
    dispatch(fetchUserdata());
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (stateChange) dispatch(sendCartData(cart));
  }, [dispatch, cart, stateChange]);

  return (
    <Fragment>
      <div className="bg-gray-500 min-h-screen mb-10 relative  flex flex-col">
        <Head>
          <title>Log in</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="z-10">
          <Nav />
        </div>
        <div
          className={`${blurBackground} h-screen w-full z-0  flex-1 overflow-y-auto`}
        >
          <Login />
        </div>
      </div>
    </Fragment>
  );
}
