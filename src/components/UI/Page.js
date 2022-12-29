import { useState, useEffect } from "react";

import styles from "./Page.module.css";

const Page = function (props) {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${styles.page} ${isDelayed && styles.delayed} ${
        props.className
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Page;
