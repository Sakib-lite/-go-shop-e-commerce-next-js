// import Input from "./Input";
import Link from "../Link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import { formActions } from "../store/form-slice";
import useInput from "../store/custom-hook/use-input";
import { useRouter } from "next/router";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const formIsValid = useSelector((state) => state.form.formIsValid);

  const {
    enteredValue: name,
    inputValueHandler: nameInputHandler,
    inputValueBlurHandler: nameBlurHandler,
    notValid: nameNotValid,
    valueIsValid: isNameValid,
    reset: nameInputReset,
  } = useInput((value) => value.trim().length > 4);

  const {
    enteredValue: email,
    inputValueHandler: emailInputHandler,
    inputValueBlurHandler: emailInputBlurHandler,
    notValid: emailNotValid,
    valueIsValid: isEmailValid,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const {
    enteredValue: number,
    inputValueHandler: numberInputHandler,
    inputValueBlurHandler: numberInputBlurHandler,
    notValid: numberNotValid,
    valueIsValid: isNumberValid,
    reset: numberInputReset,
  } = useInput((value) => value.trim().length === 11);

  const {
    enteredValue: username,
    inputValueHandler: usernameInputHandler,
    inputValueBlurHandler: usernameInputBlurHandler,
    notValid: usernameNotValid,
    valueIsValid: isUsernameValid,
    reset: usernameInputReset,
  } = useInput((value) => value.length >= 4);

  const {
    enteredValue: password,
    inputValueHandler: passwordInputHandler,
    inputValueBlurHandler: passwordInputBlurHandler,
    valueIsValid: isPasswordValid,
    notValid: passwordNotValid,
    reset: passwordInputReset,
  } = useInput((value) => value.length >= 4);

  useEffect(() => {
    if (
      isNameValid &&
      isEmailValid &&
      isUsernameValid & isNumberValid &&
      isPasswordValid
    ) {
      dispatch(formActions.formValidator());
    } else {
      return;
    }
  }, [
    dispatch,
    isNameValid,
    isEmailValid,
    isNumberValid,
    isPasswordValid,
    isUsernameValid,
    name,
    email,
    username,
    password,
    number,
  ]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // dispatch(formActions.inputBoxTouchedHandler())
    nameBlurHandler();
    emailInputBlurHandler();
    numberInputBlurHandler();
    passwordInputBlurHandler();
    usernameInputBlurHandler();
    if (formIsValid) {
      nameInputReset();
      emailInputReset();
      numberInputReset();
      usernameInputReset();
      passwordInputReset();
    } else {
      return;
    }

    dispatch(
      formActions.addUserToDatabase({
        name,
        email,
        number,
        password,
        username,
      })
    );

    dispatch(formActions.formValidator());

    router.push("/login");
  };

  const nameError = nameNotValid ? "border-red-600" : "";

  const emailError = emailNotValid ? "border-red-600" : "";
  const numberError = numberNotValid ? "border-red-600" : "";
  const passwordError = passwordNotValid ? "border-red-600" : "";
  const usernameError = usernameNotValid ? "border-red-600" : "";

  const nameIsValid = isNameValid ? "border-green-600 " : "";
  const emailIsValid = isEmailValid ? "border-green-600 " : "";
  const numberIsValid = isNumberValid ? "border-green-600 " : "";
  const passwordIsValid = isPasswordValid ? "border-green-600 " : "";
  const usernameIsValid = isUsernameValid ? "border-green-600 " : "";

  return (
    <form onSubmit={formSubmitHandler} className="">
      <div className=" min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto  flex flex-col items-center justify-center ">
          <div className="bg-white py-8  shadow-md text-black w-full px-8 rounded-lg sm:m-10">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <div className="space-y-6">
              {/* fullname input start          */}

              <div className=" relative ">
                <label className="text-gray-700">
                  Full Name
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  id="required-email"
                  className={`${nameError} ${nameIsValid} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                  name="email"
                  placeholder="please enter your fullname"
                  onChange={nameInputHandler}
                  value={name}
                  type="text"
                  onBlur={nameBlurHandler}
                />
              </div>
              {/* fullname input end          */}
              <div className=" relative ">
                <label className="text-gray-700">
                  E-mail
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  id="required-email"
                  className={`${emailError} ${emailIsValid} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                  name="email"
                  placeholder="please enter your email"
                  onChange={emailInputHandler}
                  value={email}
                  type="e-mail"
                  onBlur={emailInputBlurHandler}
                />
              </div>
              {/* email input end point         */}

              <div className=" relative ">
                <label className="text-gray-700">
                  Number
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  id="required-email"
                  className={`${numberError}  ${numberIsValid} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                  name="number"
                  placeholder="please enter your 11 digit mobile number"
                  onChange={numberInputHandler}
                  value={number}
                  type="number"
                  onBlur={numberInputBlurHandler}
                />
              </div>
              {/* number input end point         */}

              <div className=" relative ">
                <label className="text-gray-700">
                  Username
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  id="required-email"
                  className={`${usernameError} ${usernameIsValid} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                  name="number"
                  placeholder="please enter a username"
                  onChange={usernameInputHandler}
                  value={username}
                  type="text"
                  onBlur={usernameInputBlurHandler}
                />
              </div>

              {/* username input end    point      */}

              <div className=" relative ">
                <label className="text-gray-700">
                  Password
                  <span className="text-red-500 required-dot">*</span>
                </label>
                <input
                  id="required-email"
                  className={`${passwordError} ${passwordIsValid} rounded-lg border-transparent flex-1 appearance-none border-2 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
                  name="number"
                  placeholder="more than 5 character"
                  onChange={passwordInputHandler}
                  value={password}
                  type="text"
                  onBlur={passwordInputBlurHandler}
                />
              </div>

              {/* password input end    point      */}

              {/* input ends here */}
            </div>
            <div className="mt-6 w-full">
              <div className="mx-auto">
                <button
                  type="submit"
                  className="py-2 sm:px-4 px-2   bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-pointer rounded-lg w-1/4"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 mt-4 space-x-4">
              By signing up, you agree to the
              <a className="no-underline border-b border-grey-dark text-gray-600">
                Terms of Service
              </a>
              <a className="no-underline border-b border-grey-dark text-gray-600">
                Terms of Service
              </a>
              and
              <a
                className="no-underline border-b border-grey-dark text-gray-600"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-gray-600 mt-5 mx-auto">
              Already have an account?
              <Link href="/login">
                <a
                  className="no-underline ml-2.5 border-b border-blue text-blue-400"
                  href="../login/"
                >
                  Log in
                </a>
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
