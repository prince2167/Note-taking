import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Modal = ({ showModal, setShowModal, children }) => {
  return createPortal(
    <>
      {showModal && (
        <div>
          <div
            onClick={() => setShowModal(false)}
            className={classes.overlay}
          ></div>
          <div className={classes.modal}>{children}</div>
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
