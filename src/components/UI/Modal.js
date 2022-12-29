import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

import ThemeContext from "../../store/themeContext/theme-context";

const Backdrop = function (props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = function (props) {
  const { theme } = useContext(ThemeContext);

  const bcgColor = `var(--${theme}__gray-medium-light)`;

  return (
    <div
      className={`${styles["modal"]} ${props.styles}`}
      style={{ backgroundColor: bcgColor }}
    >
      <div className={styles["content"]}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} styles={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
