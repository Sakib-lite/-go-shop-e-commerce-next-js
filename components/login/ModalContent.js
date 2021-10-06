import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import Link from "../Link";

export default function ModalContent() {
  const dispatch = useDispatch();

  const modalTogglerHandler = () => {
    dispatch(uiActions.modalToggler());
  };

  return (
    <Fragment>
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
        <div className="w-full h-full text-center">
          <div className="flex h-full flex-col justify-between">
            <div className="mx-auto ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
              Confirm?
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
              You have to login first.
            </p>
            <div className="flex items-center justify-between gap-4 w-full mt-8">
              <Link href="/login" passHref>
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Log In{" "}
                </button>
              </Link>
              <button
                type="button"
                className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={modalTogglerHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
