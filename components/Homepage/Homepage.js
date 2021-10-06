import Header from "../Header/Header";
import StateContext from "../context/State";
import { Fragment, useContext } from "react";
import Image from "next/image";
import DummyDiv from "./DummyDiv";
import AllProducts from "./AllProducts";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

export default function Homepage(props) {
  const ctx = useContext(StateContext);
  const loading = useSelector((state) => state.ui.loading);
  const loadingOpacity = loading ? "opacity-50" : "";

  const blurBackground = ctx.showDropdown ? " opacity-30" : "";

  return (
    <Fragment>
      <div className={`${loadingOpacity} z-10`}>
        <Header />
      </div>
      {loading && (
        <div className="z-40  bg-transparent overflow-visible ">
          <Spinner />
        </div>
      )}
      <div
        className={`${blurBackground} ${loadingOpacity} h-screen w-full bg-white z-0  flex-1 overflow-y-auto`}
      >
        <div className="  mx-auto lg:h-full  bg-gray-50">
          <div className="flex ">
            <h1 className="gradient-headline from-green-400 to-blue-600 lg:text-6xl  text-3xl  mx-auto font-bold  sm:text-6xl md:text-6xl ">
              Welcome to our family
            </h1>{" "}
          </div>
          <div className="hover:shadow-xl mx-auto lg:w-8/12 ">
            <Image
              src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3769747.jpg&fm=jpg"
              width={70}
              height={40}
              alt="shopping bag on hand"
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="">
          <DummyDiv />
        </div>

        <div className="">
          <AllProducts products={props.products} />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
