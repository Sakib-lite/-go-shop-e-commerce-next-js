import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { formActions } from "../store/form-slice";
import Link from "../Link";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [invalid, setInvalid] = useState(false);
  const [loginValid, setLoginValid] = useState(false);

  const userdata = useSelector((state) => state.form.users);
  const loggedIn = useSelector((state) => state.form.loggedIn);

  //   console.log(userdata);

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  useEffect(() => {
    userdata.forEach((element) => {
      if (
        enteredEmail === element.email &&
        enteredPassword === element.password
      ) {
        setLoginValid(true);
      }
    });
  }, [loginValid, userdata, enteredEmail, enteredPassword]);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginValid) {
      setInvalid(true);
      return;
    }
    if (loginValid) dispatch(formActions.login());
    setEnteredEmail("");
    setEnteredPassword("");

    router.push("/orders");
  };
  return (
    <div className="">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 mt-10">
        <div className="px-6 py-4">
          <h2 className="text-3xl  font-semibold text-center text-gray-500 dark:text-white">
            Login or create account
          </h2>
          <form onSubmit={loginSubmitHandler}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                placeholder="Email Address"
                aria-label="email Address"
                onChange={emailHandler}
                value={enteredEmail}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
                onChange={passwordHandler}
                value={enteredPassword}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                Login
              </button>
              {invalid && (
                <p className="text-sm text-red-600  hover:text-gray-800">
                  Validation Error
                </p>
              )}{" "}
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Dont have an account?{" "}
          </span>
          <Link href="/signup">
            <a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
              Register
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
