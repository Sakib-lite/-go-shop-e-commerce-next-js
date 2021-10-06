import Link from "../../Link";
import { Fragment } from "react";

export default function NestedCatagories() {
  return (
    <Fragment>
      <li className="  hover:bg-gray-200   ">
        <p className="font-serif text-gray-700  px-4 py-1 lg:border-l-8 border-l-2 hover:border-green-600 text-xs ">
          Desktop
        </p>
      </li>

      <li className="hover:bg-gray-200 ">
        <p className="font-serif text-gray-700  px-4 py-1 lg:border-l-8 border-l-2 hover:border-green-600 text-xs ">
          Smart Watch
        </p>
      </li>

      <li className="hover:bg-gray-200 ">
        <p className="font-serif text-gray-700  px-4 py-1 lg:border-l-8 border-l-2 hover:border-green-600 text-xs ">
          Laptop
        </p>
      </li>

      <li className="hover:bg-gray-200 ">
        <p className="font-serif text-gray-700  px-4 py-1 lg:border-l-8 border-l-2 hover:border-green-600 text-xs  ">
          Smart-Phone
        </p>
      </li>
    </Fragment>
  );
}
