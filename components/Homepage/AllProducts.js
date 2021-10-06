import { Fragment } from "react";
import Product from "./Product";

export default function AllProducts(props) {
  return (
    <Fragment>
      <div className="grid lg:grid-cols-3 space-y-4 grid-cols-2  mx-auto lg:ml-20 ">
        {props.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            description={product.description}
            price={product.price}
            title={product.title}
            rating={product.rating}
          />
        ))}
      </div>
    </Fragment>
  );
}
