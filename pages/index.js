// import { MongoClient } from "mongodb";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Homepage from "../components/Homepage/Homepage";
import { sendCartData, fetchCartData } from "../components/store/thunk";
import Error from "../components/Error/Error";
import { uiActions } from "../components/store/ui-slice";

export default function Home(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const stateChange = useSelector((state) => state.cart.initialCartChanged);

  const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  useEffect(() => {
    if (stateChange) dispatch(sendCartData(cart));
  }, [dispatch, cart, stateChange]);

  return (
    <div className="text-xl relative h-screen flex flex-col">
      <Head>
        <title>Go-Shop E-Commerce Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && <Error />}
      <Homepage products={props.products} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();
  // if(!response.ok) throw new Error("failed to fetch data")

  return {
    props: {
      products: data.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        category: product.category,
        rating: product.rating,
      })),
    },
    revalidate: 1,
  };
}
