import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal} onClick={props.onClick}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
