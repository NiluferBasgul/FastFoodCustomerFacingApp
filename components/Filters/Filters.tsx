import React from "react";
import styles from "./style.module.scss";

type Props = {
  onClick: (item: string) => void;
  selected?: string;
};

const Filters = ({ onClick, selected }: Props) => {
  const items = ["All", "Vegan", "Non-Vegan"];

  return (
    <div className={`${styles.FilterContainer} container`}>
      {items?.map((item) => {
        return (
          <button
            onClick={() => onClick(item)}
            key={item}
            className={`${styles.Filter} ${
              selected === item && styles.Selected
            }`}
          >
            <p className={styles.Filter_Name}>{item}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
