import LanguageSelection from "components/Language/LanguageSelection";
import Link from "next/link";
import React, { useEffect } from "react";
import { Context, ContextProps } from "store/store";
import { isBrowser } from "../../utils/genericUtils";
import styles from "./style.module.scss";

const Header = () => {

  const { state } = React.useContext(Context) as ContextProps;

  if (isBrowser) {
    useEffect(() => {
      // In Header.tsx because this component always is instantiated everywhere
      console.log('girdi')
      setTimeout(() => {
        sessionStorage.setItem(`@orders`, JSON.stringify(state.orders));
        sessionStorage.setItem(`@total`, JSON.stringify(state.total < 1 ? 0 : state.total));
      }, 500)
    }, [state.orders, state.total])
  }

  return <header className={`${styles.Header}`}>
    <div className='container-sm'>
      <div className={`row`}>
        <div className='col'>
          <Link href="/">
            <img className={styles.Header_Logo} alt="Logo" src="/images/CucinaReverted.png" />
          </Link>
        </div>

        <div className='col d-flex align-items-center justify-content-end'>
          <LanguageSelection></LanguageSelection>
        </div>
        {/* <h2 className='p-0 m-0'>BUILD IT. FIRE IT. LOVE IT.</h2> */}
      </div>
    </div>
  </header>
};

export default Header;
