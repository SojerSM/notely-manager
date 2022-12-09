import styles from "./Page.module.css";

const Page = function (props) {
  return (
    <div className={`${styles.page} ${props.className}`}>{props.children}</div>
  );
};

export default Page;
