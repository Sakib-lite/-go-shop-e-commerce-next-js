import { Fragment } from "react";
import ModalContent from "./ModalContent";
import Confirmation from "../Orders/Confirmation";
import { uiActions } from "../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

export default function Modal() {
  // const [showModal, setShowModal] = React.useState(false);

  const showModal = useSelector((state) => state.ui.showModal);
  const loggedIn = useSelector((state) => state.form.loggedIn);
  const dispatch = useDispatch();

  const modalTogglerHandler = () => {
    dispatch(uiActions.modalToggler());
  };
  return (
    <Fragment>
      {showModal && (
        <Fragment>
          {" "}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/5 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {!loggedIn && <ModalContent />}
                {loggedIn && <Confirmation />}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
      )}
    </Fragment>
  );
}
