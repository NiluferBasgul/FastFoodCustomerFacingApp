import styles from "./DeliveryTime.module.scss";
import { getHours } from "date-fns";
import { range } from "utils/arrayUtils";
import React, { useEffect, useState } from "react";
import { closingHour, openingHour } from "config/storeConfig";
import Modal from 'react-modal';
import { Context, ContextProps } from "store/store";
import useTranslation from "next-translate/useTranslation";

const customStyles = {
    content: {
        top: '22.5%',
        right: '7%',
        left: '7%',
        bottom: '5%',
        backgroundColor: 'transparent',
        border: 0,
        overflow: 'hidden',
        padding: 0
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
};

const DeliveryTime = () => {
    const { state, dispatch } = React.useContext(Context) as ContextProps;
    const now = getHours(Date.now()) < openingHour ? openingHour - 1 : getHours(Date.now());

    const [modalIsOpen, setIsOpen] = useState(false);

    const { t } = useTranslation('common')

    const hourClickHandeler = (val: number | null) => {
        dispatch({ type: 'SET_SELECTED_DELIVERY_HOUR', payload: val });
        closeModal();
    }

    useEffect(() => {
        document.body.style.overflow = 'unset';

        if (modalIsOpen === true) {
            document.body.style.overflow = 'hidden';
        }

    }, [modalIsOpen])


    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const modalRenderer = () => {
        return <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className={`card overflow-auto ${styles.DeliveryTimeContainer} mb-5`}>
                <div className={`${styles.DeliveryTime}`}>
                    <React.Fragment key={'ASAP'}>
                        <div onClick={() => hourClickHandeler(null)} className={`form-check d-flex justify-content-center align-items-center ${styles.ingredientContainer} ${(state.selectedDeliveryHour === null || state.selectedDeliveryHour === 'ASAP') ? 'bg-success color-white' : ''}`}>
                            <div className={`${styles.Hour}`}>{t`ASAP`}</div>
                        </div>
                        <hr />
                    </React.Fragment>
                    {
                        Array.from(range(now + 2, closingHour)).map((val) => {
                            return <React.Fragment key={val}>
                                <div onClick={() => hourClickHandeler(val)} className={`form-check d-flex justify-content-center align-items-center ${styles.ingredientContainer} ${+state.selectedDeliveryHour === val ? 'bg-success color-white' : ''}`}>
                                    <div className={`${styles.Hour}`}>{`${val}:00`}</div>
                                </div>
                                <hr />
                            </React.Fragment>
                        })}
                </div>
            </div>
        </Modal>
    }

    return (
        <>
            {modalRenderer()}
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-8 d-flex flex-column justiy-content-between'>
                            <h2 className='p-0 m-0'>{t('deliveyTime')}</h2>
                            <h6 className='p-0 m-0 text-lowercase fw-light'>Click on the green delivery time indication button to change the delivery time</h6>
                        </div>
                        <div className='col-4 d-grid'>
                            {now - 1 >= closingHour ? <button className={`btn btn-lg btn-outline-danger h2 m-0 fw-bold`}>
                                {t`closed`}
                                </button> : <button onClick={() => openModal()} className={`btn btn-lg btn-primary h2 m-0 fw-bold`}>
                                {!state.selectedDeliveryHour || state.selectedDeliveryHour === 'ASAP' ? `${t('ASAP')}` : `${state.selectedDeliveryHour}:00`}
                                &nbsp;
                                <i className='fe fe-watch' />
                            </button>}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryTime