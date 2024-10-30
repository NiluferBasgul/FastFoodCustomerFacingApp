import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Pizza from "assets/images/pizzas.svg";
import { CucinaTree, MenuCategoryType } from "data/cucinaTree";
import { useInView } from 'react-intersection-observer'
import { menuCategoryToEmoji } from "utils/genericUtils";

type Props = {
  selected: string;
  menus: MenuCategoryType[];
  onClick: (menu: MenuCategoryType) => void;
};

const Menu = ({ selected, menus, onClick }: Props) => {
  const onSelectMenu = (menu: MenuCategoryType) => {
    onClick(menu);
  };

  const menuRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0,
  });

//Uncommit if needed
  // useEffect(() => {
  //   //@ts-ignore
  //   if (menuRef.current?.scrollLeft !== undefined && inView === true) {
  //     //@ts-ignore
  //     menuRef.current.scrollLeft = 30
  //   }
  //   //@ts-ignore
  //   else if (menuRef.current?.scrollLeft !== undefined && inView === false) {
  //     //@ts-ignore
  //     menuRef.current.scrollLeft = 0
  //   }
  // }, [inView])

  return (
    <div className='row position-relative' ref={ref}>
      <div ref={menuRef} className={`${styles.MenuContainer} container`}>
        {menus.map((menu) => {
          return (
            <div
              key={menu}
              onClick={() => onSelectMenu(menu)}
              className={`${styles.MenuItemCard} ${menu === selected && styles.Selected
                }`}
            >
              <div className={styles.IconContainer}>
                {/* <Pizza /> */}
                <span className={menu === selected ? `grow__keep` : `grow`}>{menuCategoryToEmoji(menu, true)}</span>
              </div>
              <p className={`font-weight-bold ${styles.MenuItemName} ${menu !== selected && 'badge bg-soft-primary'}`}>{menu}</p>
            </div>
          );
        })}
      </div>
      {/* {
        inView && <ScrollDownIndicator text={'scroll'} className={`position-absolute d-flex justify-content-end user-select-none ${styles.Indicator}`} />
      } */}
    </div>
  );
};

export default Menu;
