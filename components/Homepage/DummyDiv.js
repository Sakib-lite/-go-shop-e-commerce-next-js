import Image from "next/image";
import { Fragment } from "react";
export default function DummyDiv() {
  return (
    <Fragment>
      <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl   ">
          <Image
            className="xl:max-w-6xl"
            src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5632371.jpg&fm=jpg"
            alt="a picture"
            width={150}
            height={100}
            layout="responsive"
          />
          <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 left-5 hover:shadow-2xl shadow-xl">
            <div className="flex justify-between font-bold text-sm ">
              <p>Product Review</p>
              <p className="text-gray-400">17th March, 2021</p>
            </div>
            <h2 className="md:text-3xl font-semibold mt-4 md:mt-10 uppercase">
              Grab your best products
            </h2>
            <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              aperiam nulla cupiditate saepe sed quis veritatis minus rem
              adipisci aliquid.
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
              Read More
            </button>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
