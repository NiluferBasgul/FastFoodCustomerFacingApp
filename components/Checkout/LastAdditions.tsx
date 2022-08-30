import cucinaTree, { PricedSauces } from "data/cucinaTree";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer'
import { Context, ContextProps } from "store/store";
import randomID from "utils/randomID";
import styles from "./LastAdditions.module.scss";
import useTranslation from "next-translate/useTranslation";

const LastAdditions = () => {
    const { dispatch, state } = React.useContext(Context) as ContextProps;
    const [adding, setAdding] = useState("");
    const lastAdditionsRef = useRef(null);
    const [ref, inView] = useInView({
        threshold: 0,
    });

    const {t} = useTranslation('common');

    const lastAdditions = { ...cucinaTree.lastAdditions };

    const onAddItem = (item) => {
        setAdding(item.slug);
        setTimeout(() => {
            const id = randomID()
            const order = {
                ...item,
                count: 1,
                total: item.price,
                id
            };

            const payload = { [id]: { ...order } }

            dispatch({ type: "ADD_PRODUCT", payload });
            setAdding("")
        }, 700)
    }

    useEffect(() => {
        //@ts-ignore
        if (lastAdditionsRef.current?.scrollLeft !== undefined && inView === true) {
            //@ts-ignore
            lastAdditionsRef.current.scrollLeft = 100
        }
        //@ts-ignore
        else if (lastAdditionsRef.current?.scrollLeft !== undefined && inView === false) {
            //@ts-ignore
            lastAdditionsRef.current.scrollLeft = 0
        }
    }, [inView])

    const mostra = (item, details) => (
        <div key={item} className={`${styles.LastAdditionItemWrapper} mt-3`}>
            <div className={`${styles.LastAdditionItem}`}>
                <div className={`${styles.UpsellTitleWrapper}`}>
                    <div className={`${styles.UpsellTitle}`}>{details.name}</div>
                    <div className={`${styles.UpsellPriceGroup}`}>
                        <div className={`${styles.UpsellPrice} ${styles.LineThrough}`}>+{details.price} mkd</div>
                        <div className={`${styles.UpsellPrice}`}>+{details.price - details.price * 0.15} mkd</div>
                    </div>
                </div>

                {/* <img alt={item} className={`${styles.UpsellImage}`} src="https://dpe-cdn.azureedge.net/api/medium/Product/Global/D2LBCOKE/NULL/434x404/TR?v=035b9f93732e541c272da2e57d72d1f9-1614431280000" /> */}
                {(adding === item) ? <button className="btn btn-secondary w-100 mt-2" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                 &nbsp;   {`adding`}
                </button>
                    :
                    <button onClick={() => onAddItem({ ...details, slug: item })} className="btn btn-secondary w-100 mt-2 d-flex align-items-center justify-content-center" type="button">{t`add`} &nbsp; <i className='fe fe-plus' /> </button>}
            </div>
        </div>
    )

    return (
        <div ref={ref} className="btn-group-toggle mb-5 pb-5 mt-4">
            <div ref={lastAdditionsRef} className={`${styles.LastAdditionsContainer}`}>
                {Object.entries(lastAdditions).map(([item, details]) => {
                    return (
                        mostra(item, details)
                    );
                })}
            </div>
        </div>
    )
}

export default LastAdditions;