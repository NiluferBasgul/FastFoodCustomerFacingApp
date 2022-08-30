import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#__next')

const customStyles = {
    content: {
        top: '22.5%',
        right: '15%',
        left: '15%',
        backgroundColor: 'transparent',
        border: 0,
        overflow: 'hidden',
        padding: 0,
        zIndex: 1002
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    }
};

const ContinueToShoppingModal = () => {
    const router = useRouter();

    const { t } = useTranslation('common')

    useEffect(() => {
        document.body.style.overflow = 'unset';

        if (!!router.query.firstCartAddition === true) {
            document.body.style.overflow = 'hidden';
        }

    }, [router.query.firstCartAddition])

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        router.replace("/", undefined, { shallow: true });
    }

    return <Modal
        isOpen={!!router.query.firstCartAddition}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <div className={`card overflow-auto mb-5`}>
            <h1>Do you wan't to add more food to your basket?</h1>
            <h3>or you can go to checkout and finish your order</h3>
        </div>
        <div className="row">
            <div className='col'>
                <button onClick={() => closeModal()} className='btn font-weight-bold btn-primary'>Continue to Shopping</button>
            </div>
            <div className='col d-flex justify-content-end'>
                <button onClick={() => router.push('/checkout')} className='btn font-weight-bold btn-primary'>Go To Checkout</button>
            </div>
        </div>
    </Modal>
}

export default ContinueToShoppingModal