import { useEffect, useRef } from "react";
import styles from "./ExtraSauce.module.scss";
import { useInView } from 'react-intersection-observer'
import { getInitialCustomizations, MenuCategoryType, PricedSauces, sauces } from "data/cucinaTree";
import React from "react";
import { Context, ContextProps } from "store/store";
import ScrollDownIndicator from "components/Common/ScrollDownIndicator";
import useTranslation from "next-translate/useTranslation";

const ExtraSauce = () => {
    const { dispatch, state } = React.useContext(Context) as ContextProps;
    const extraSauceRef = useRef(null);
    const [ref, inView] = useInView({
        threshold: 0,
    });

    const {t} = useTranslation('common');

    const isSelected = (sauce: string) => !!state?.selected?.customizations?.extraSauce?.[sauce]

    useEffect(() => {
        //@ts-ignore
        if (extraSauceRef.current?.scrollLeft !== undefined && inView === true) {
            //@ts-ignore
            extraSauceRef.current.scrollLeft = 100
        }
        //@ts-ignore
        else if (extraSauceRef.current?.scrollLeft !== undefined && inView === false) {
            //@ts-ignore
            extraSauceRef.current.scrollLeft = 0
        }
    }, [inView])

    const onExtraSauceSelection = (sauce: PricedSauces) => {
        dispatch({ type: "SELECT_EXTRA_SAUCE", payload: { ...sauce } });
    };

    return (
        <div ref={ref} className={`position-relative btn-group-toggle ${styles.UpperWrapper}`}>
            <div ref={extraSauceRef} className={`${styles.SauceContainer}`}>
                {Object.entries(sauces).map(([sauce, details]) => {
                    const price = details?.price as number;
                    return (
                        <div
                            key={sauce}
                            className={`ms-3 btn btn-white position-relative ${styles.SauceItemCard} ${isSelected(sauce) ? "active focus" : ""
                                }`}
                            onClick={() => onExtraSauceSelection({ [sauce]: { price } } as PricedSauces)}
                        >
                            <div className={`top-right`} style={{ position: 'absolute', top: 5, right: 5, left: 'auto' }}>
                                <span style={{ fontSize: '1.2rem' }} className={`fe ${isSelected(sauce) ? 'fe-stop-circle' : 'fe-circle'} `}></span>
                            </div>
                            <p className={styles.SauceItemName}>{t(sauce)}</p>
                            <div className="d-flex justify-content-end">
                                {
                                    <div className="d-flex align-items-end">
                                        <small className={`${styles.PriceText}`}>
                                            {(price > 0) ? `+${price}mkd` : "FREE"}
                                        </small>
                                    </div>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* {
                inView && <ScrollDownIndicator style={{ right: 0, bottom: 8, zIndex: -1 }} text={'scroll'} className='position-absolute d-flex justify-content-end user-select-none' />
            } */}
        </div>
    )
}

export default ExtraSauce;