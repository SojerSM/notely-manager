import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal} onConfirm={props.onConfirm}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
