import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputValueBlurHandler = () => {
    // dispatch(formActions.inputBoxTouchedHandler())
    setIsTouched(true);
  };
  const validator = validateValue(enteredValue);

  let notValid = !validator && isTouched;

  let valueIsValid = validator && isTouched;

  const reset = () => {
    setEnteredValue("");
    // dispatch(formActions.setInputBoxTouchedFalse())
    setIsTouched(false);
  };
  return {
    enteredValue,
    validator,
    inputValueHandler,
    inputValueBlurHandler,
    notValid,
    reset,
    valueIsValid,
  };
};

export default useInput;
