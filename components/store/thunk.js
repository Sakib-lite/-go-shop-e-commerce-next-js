import { formActions } from "./form-slice";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const FIREBASE_URL = "https://go-shop-71996-default-rtdb.firebaseio.com/";
const MONGODB = "/cart/cart-item";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showLoader());
    const getResponse = async () => {
      const response = await fetch(`${FIREBASE_URL}cart.json`);

      if (!response.ok) throw new Error("failed to fetch cart data");
      const data = await response.json();
      return data;
    };

    try {
      const storedData = await getResponse();
      dispatch(uiActions.hideLoader());
      dispatch(
        cartActions.replaceCart({
          items: storedData.items || [],
          totalQuantity: storedData.totalQuantity,
        })
      );

      dispatch(uiActions.hideErrorBar());
    } catch (error) {
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.errorHandler("failed to fetch cart data"));
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showLoader());
    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_URL}cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("failed to send cart data");
    };

    try {
      await sendRequest();
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.hideErrorBar());
    } catch (error) {
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.errorHandler("failed to send cart data"));
      console.log(error);
    }
  };
};

export function sendUserData(data) {
  return async (dispatch) => {
    dispatch(uiActions.showLoader());
    const sendData = async () => {
      const response = await fetch(`${FIREBASE_URL}userdata.json`, {
        method: "PUT",
        body: JSON.stringify({
          users: data.users,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("failed to send user data");
    };

    try {
      await sendData();
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.hideErrorBar());
    } catch (error) {
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.errorHandler("failed to send user data"));
      console.log(error);
    }
  };
}
export const fetchUserdata = () => {
  return async (dispatch) => {
    dispatch(uiActions.showLoader());
    const fetchData = async () => {
      const response = await fetch(`${FIREBASE_URL}userdata.json`);

      if (!response.ok) throw new Error("failed to fetch user data");

      const data = await response.json();
      return data;
    };

    try {
      const userdata = await fetchData();
      dispatch(uiActions.hideLoader());
      dispatch(
        formActions.replaceUserdata({
          users: userdata.users || [],
        })
      );
      dispatch(uiActions.hideErrorBar());
    } catch (error) {
      dispatch(uiActions.hideLoader());
      dispatch(uiActions.errorHandler("failed to fetch user data"));
      console.log(error);
    }
  };
};
