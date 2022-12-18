import { capitalizeFirstLetter } from "../../../../helpers/helpers";

import styles from "./FundItem.module.css";
import * as icons from "../../../../assets/icons";

import FundItemDate from "./FundItemDate";

const FundItem = function (props) {
  const deleteHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles["fund-item"]}>
      <FundItemDate date={props.date} />
      <p className={styles[["content"]]}>
        {capitalizeFirstLetter(props.content)}
      </p>
      <div className={styles["content-details"]}>
        <div className={styles["option"]}>
          <p>{capitalizeFirstLetter(props.option)}</p>
        </div>
        <button className={styles["delete-button"]} onClick={deleteHandler}>
          <svg className={styles["svg-icon"]} viewBox="0 0 20 20">
            {icons.deleteIcon}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FundItem;
