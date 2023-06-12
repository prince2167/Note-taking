import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ showModal, setShowModal, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [showModal]);
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
