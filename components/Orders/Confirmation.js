import { Fragment } from "react";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

export default function Confirmation() {
  const dispatch = useDispatch();
  const modalTogglerHandler = () => {
    dispatch(uiActions.modalToggler());
  };

  return (
    <Fragment>
      <div className="flex w-full  mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-center w-12 bg-green-500">
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </div>

        <div className="px-1 py-2 -mx-3">
          <div className="mx-3">
            <span className="font-semibold text-green-500 dark:text-green-400">
              Successful
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              Your orders have been confirmed
            </p>
          </div>
        </div>
        <div className="ml-auto my-auto">
          <button onClick={modalTogglerHandler} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  );
}
