import { Fragment, useState, useEffect } from "react";
import useInput from "../store/use-input";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

export default function Input({ type, name, placeholder }) {
  const dispatch = useDispatch();

  const {
    enteredValue,
    inputValueHandler: nameInputHandler,
    inputValueBlurHandler,
    notValid: nameNotValid,
    valueIsValid: isNameValid,
    reset: nameInputReset,
  } = useInput((value) => value.trim().length > 4);

  useEffect(() => {
    if (isNameValid) dispatch(uiActions.formValidator());
  }, [dispatch, isNameValid, enteredValue]);

  console.log(enteredValue);

  const nameError = nameNotValid ? "text-red-500" : "";
  const errorBorder = nameNotValid ? "border-red-600" : "";
  return (
    <Fragment>
      <div className=" relative ">
        <label className="text-gray-700">
          {name}
          <span className="text-red-500 required-dot">*</span>
        </label>
        <input
          id="required-email"
          className={`${errorBorder} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
          name="email"
          placeholder={placeholder}
          onChange={nameInputHandler}
          value={enteredValue}
          type={type}
          onBlur={inputValueBlurHandler}
        />
        {nameNotValid && <p className={nameError}>invalid input</p>}
      </div>
    </Fragment>
  );
}
