import { CompleteOrder, CustomizableMenuItem, OrderDetails, Orders, OrderType, PaymentType, PurchaseOrder } from "data/cucinaTree";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Context, ContextProps } from "store/store";
import { clean } from "utils/arrayUtils";
import Modal from 'react-modal';
import ReactCanvasConfetti from 'react-canvas-confetti';
import useTranslation from "next-translate/useTranslation";

const customStyles = {
    content: {
        top: '22.5%',
        backgroundColor: 'transparent',
        border: 0,
        overflow: 'hidden',
        padding: 0
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    }
};

enum InternalOrderState {
    INITIAL,
    SUCCESSFUL,
    FAILED
}

const DeliveryForm = () => {

    const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>(PaymentType.CREDIT_CARD);
    const [termsChecked, setTermsChecked] = useState(true);
    const [protectTheEnvironment, setProtectTheEnvironment] = useState(true);
    const [formData, setFormData] = useState<OrderDetails | null>(null)
    const [loading, setLoading] = useState(false);
    const [fire, setFire] = useState(false);
    const [successfulOrder, setSuccessfulOrder] = useState(InternalOrderState.INITIAL);

    const { state, dispatch, axiosInstance } = React.useContext(Context) as ContextProps;
    const { register, handleSubmit, formState: { errors } } = useForm<OrderDetails>();
    const router = useRouter()

    const [confirmationModal, setConfirmationModal] = useState(false);

    const { t } = useTranslation('common');

    const handleOnSubmit = async (formData: OrderDetails) => {
        setFormData(formData);
        setConfirmationModal(true);
    }

    const onConfirmOrder = async () => {
        setLoading(true);
        // get rid of empty or null objects [k,v]
        // ensure that you pass a copy not a reference
        const orders = { ...state?.orders } as Orders
        const cleaned = clean(orders)

        const items = Object.entries(cleaned).map(([_, item]) => item as CustomizableMenuItem)

        const order: CompleteOrder = {
            ...formData!,
            protectTheEnvironment,
            terms: termsChecked,
            paymentType: selectedPaymentType,
            deliveryTime: state.selectedDeliveryHour || 'ASAP',
            globalTotal: state.total,
            orderItems: items,
            address: formData?.address || state.orderType,
            orderType: state.orderType
        };

        // const serializedORder = JSON.stringify(order)
        // navigator.clipboard.writeText(serializedORder);

        try {
            const result = await axiosInstance.post<PurchaseOrder>(`/order`, order);

            if (!result.data || result.status !== 201) {
                // invalid case
                // Should notify sentry
                throw Error('Error while creating order')
            }

            if (selectedPaymentType === PaymentType.CASH) {
                setSuccessfulOrder(InternalOrderState.SUCCESSFUL);
                setFire(true);
            } else {
                router.push(`/pay/${result.data.id}`)
            }

        } catch (err) {
            // invalid case
            setSuccessfulOrder(InternalOrderState.FAILED);
        } finally {
            setLoading(false);
            setFire(false);
        }
    }

    const onMockConfirmOrder = async () => {
        if (selectedPaymentType === PaymentType.CASH) {
            setSuccessfulOrder(InternalOrderState.SUCCESSFUL);
            setFire(true);
        } else {
            router.push(`/pay/payment`)
        }
    }

    const onGoHome = () => {
        setTimeout(() => {
            // alert(serializedORder);

            localStorage.setItem('@phone', formData?.phoneNumber || '')
            router.push('/');
            // console.log('SUBMITED ORDER', order);
        }, 500)

        setTimeout(() => {
            dispatch({ type: "RESET", payload: null });
        }, 800)
    }

    const onTermsClick = () => {
        setTermsChecked(!termsChecked)
    }

    const onProtectTheEnvironmentClick = () => {
        setProtectTheEnvironment(!protectTheEnvironment)
    }

    const addressFieldRenderer = () => (
        <>
            <label style={{ fontSize: 12 }}>{t('addressForYourOrder')}</label>
            <div className="form-floating form-group">
                <input
                    type="address"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="floatingInput"
                    placeholder="name@example.com"
                    autoComplete="off"
                    {...register('address', { required: true, maxLength: 150 })}
                    style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundSize: '16px 18px',
                        backgroundPosition: '98% 50%',
                        cursor: 'auto'
                    }} />
                <label style={{ fontSize: 12, opacity: 0.6, textTransform: 'capitalize' }}>{t('addNewAddress')}</label>
                {errors.address && <div className="invalid-feedback">
                    {errors.address?.type === 'required' && 'Address is required.'}
                    {errors.address?.type === 'maxLength' && 'Address can have maximum 150 characters.'}
                </div>}
            </div>

        </>
    )

    const phoneNumberNumberFieldRenderer = () => (
        <>
            <label style={{ fontSize: 12 }}>{t('enterYourPhoneNumberToContact')}</label>
            <div className="form-floating form-group">
                <input
                    type="tel"
                    className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                    placeholder="077 777 777"
                    autoComplete="off"
                    {...register('phoneNumber', {
                        required: true, maxLength: 35, minLength: 6, pattern: /^(?=.*[0-9])[- +()0-9]+$/
                    })}
                    style={{
                        backgroundImage: 'url("data:image/png',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundSize: '16px 18px',
                        backgroundPosition: '98% 50%',
                        cursor: 'auto'
                    }} />
                {errors.phoneNumber && <div className="invalid-feedback">
                    {errors.phoneNumber?.type === 'required' && 'Phone number is required.'}
                    {errors.phoneNumber?.type === 'minLength' && 'Phone number must have minimum 6 numbers.'}
                    {errors.phoneNumber?.type === 'maxLength' && 'Phone number can have maximum 35 numbers.'}
                    {errors.phoneNumber?.type === 'pattern' && 'Phone number format is not correct.'}
                </div>}
                <label style={{ fontSize: 12, opacity: 0.6, textTransform: 'capitalize' }}>{t('example')}: 077 777 777</label>
            </div>
        </>
    )

    const emailFieldRenderer = () => (
        <>
            <label style={{ fontSize: 12 }}>{t`ifYouWantToTrackYourOrderWeNeedYourEmail`}</label>
            <div className="form-floating form-group">
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="your@email.com"
                    autoComplete="on"
                    {...register('email')} />
                {/* {errors.email && <div className="invalid-feedback">
                    {errors.email?.type === 'required' && 'Phone number is required.'}
                    {errors.email?.type === 'minLength' && 'Phone number must have minimum 6 numbers.'}
                    {errors.email?.type === 'maxLength' && 'Phone number can have maximum 35 numbers.'}
                    {errors.email?.type === 'pattern' && 'Phone number format is not correct.'}
                </div>} */}
                <label style={{ fontSize: 12, opacity: 0.6, textTransform: 'lowercase' }}>your@email.com</label>
            </div>

        </>
    )

    const commentAreaRenderer = () => (
        <>
            <label style={{ fontSize: 12 }}>{t`leaveAComment`}</label>
            <textarea
                className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                data-toggle="autosize"
                rows={5}
                placeholder="The building is green"
                {...register('comment', { maxLength: 300 })}
                style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'scroll',
                    backgroundSize: '16px 18px',
                    backgroundPosition: '98% 50%',
                    cursor: 'auto',
                    height: '20%'
                }} />
            {errors.comment && <div className="invalid-feedback">
                {errors.comment?.type === 'maxLength' && 'Comment can have maximum 300 characters.'}
            </div>}
        </>
    )

    const paymentTypeRenderer = () => (
        <div className='mt-5'>
            <label style={{ fontSize: 12 }}>{t`paymentMethod`}</label>
            <div
                className='border border-primary rounded d-grid'
                style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <button
                    type='button'
                    onClick={() => setSelectedPaymentType(PaymentType.CASH)}
                    className={`btn btn-light ${selectedPaymentType === PaymentType.CASH ? 'bg-primary color-white' : ''}`}>
                    {t`cash`}
                    &nbsp;
                         <i className='fe fe-dollar-sign' />
                </button>
                <button
                    type='button'
                    onClick={() => setSelectedPaymentType(PaymentType.CREDIT_CARD)}
                    className={`btn btn-light ${selectedPaymentType === PaymentType.CREDIT_CARD ? 'bg-primary color-white' : ''}`} >
                    {t`creditCard`}
                    &nbsp;
                         <i className='fe fe-credit-card' />
                </button>
            </div>
        </div>
    )

    const termsCheckerRenderer = () => (
        <div className="mt-5">
            <div className="form-group user-select-none">
                <div onClick={onTermsClick} className="form-check">
                    <input
                        className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                        {...register('terms', { required: true })}
                        type="checkbox"
                        checked={termsChecked} />
                    <label
                        style={{ fontSize: 14 }}
                        className="form-check-label">
                        {t`agreeTo`} <a className='text-decoration-underline' href="#">{t`termsAndConditions`}</a>
                    </label>
                    {errors.terms && <div className="invalid-feedback">
                        {errors.terms?.type === 'required' && t`youMustAgreeBeforeSubmittingTheOrder`}
                    </div>}
                </div>
            </div>
        </div>
    )

    const environmentProtectorCheckerRenderer = () => (
        <div className="mt-1">
            <div className="form-group user-select-none">
                <div onClick={onProtectTheEnvironmentClick} className="form-check">
                    <input
                        className={`form-check-input is-valid mt-4`}
                        {...register('protectTheEnvironment')}
                        type="checkbox"
                        checked={protectTheEnvironment} />
                    <label
                        style={{ fontSize: 17 }}
                        className="form-check-label">
                        <span className='badge bg-primary-soft'>
                            {t`protectTheEnvironment`}
                            &nbsp;
                            <i className='fe fe-feather' />
                        </span>
                    </label>
                    <div className="valid-feedback">
                        {t`dontAddPlastic`}
                    </div>
                </div>
            </div>
        </div>
    )

    const confettiRenderer = () => <>
        <ReactCanvasConfetti
            angle={90}
            className="canvas"
            colors={[
                '#26ccff',
                '#a25afd',
                '#ff5e7e',
                '#88ff5a',
                '#fcff42',
                '#ffa62d',
                '#ff36ff'
            ]}
            decay={0.8}
            drift={0}
            gravity={1}
            origin={{
                x: 0.5,
                y: 0.5
            }}
            particleCount={500}
            resize
            scalar={1}
            shapes={[
                'circle',
                'square'
            ]}
            spread={360}
            startVelocity={45}
            ticks={600}
            useWorker
            zIndex={-1}
            fire={fire}
            width={250}
            height={300}
            style={{
                position: 'absolute',
                top: 50,
                right: 0,
                left: 0,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
        />
    </>

    const deliveryConfirmationRenderer = () => <Modal
        isOpen={confirmationModal}
        style={customStyles}
        onAfterClose={() => setSuccessfulOrder(InternalOrderState.INITIAL)}
    >
        <div className="modal-content">
            <div className="modal-card card">
                <div className="card-header">
                    {/* Title */}
                    <h4 className="card-header-title">
                        {successfulOrder === InternalOrderState.INITIAL && 'Order Confirmation'}
                        {successfulOrder === InternalOrderState.SUCCESSFUL && 'Successful Order'}
                        {successfulOrder === InternalOrderState.FAILED && 'Order Creation Failed'}
                    </h4>
                    {/* Close */}
                    {/* <button type="button" onClick={() => setConfirmationModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
                </div>
                <div className="card-body">
                    {
                        successfulOrder === InternalOrderState.INITIAL && <>
                            {/* Form */}
                            <h3 className='mb-4'>{t`letsDoubleCheckYourPhone`}</h3>
                            <h1 className='text-center m-0'>{formData?.phoneNumber}</h1>
                        </>
                    }
                    {
                        successfulOrder === InternalOrderState.SUCCESSFUL && <>
                            {confettiRenderer()}
                            <div className='d-flex justify-content-center'><span style={{ fontSize: 36 }} className='fe fe-check-circle text-success'></span></div>
                            <h3 className='text-success mt-4 text-center'>{t`yourOrderCreatedSuccessfully`}</h3>
                        </>
                    }
                    {
                        successfulOrder === InternalOrderState.FAILED && <>
                            <div className='d-flex justify-content-center'><span style={{ fontSize: 36 }} className='fe fe-x-circle text-danger'></span></div>
                            <h3 className='text-danger mt-4 text-center'>{t`orderCreationFailed`}</h3>
                        </>
                    }
                </div>
                <div className="card-footer">
                    <div className='row'>
                        <div className='col-12'>
                            <small className='text-muted' style={{ textTransform: 'initial' }}>{t`youCanScrollToPreview`}</small>
                        </div>
                        {
                            successfulOrder === InternalOrderState.INITIAL && <div style={{ zIndex: 10 }} className='col-12 d-flex justify-content-between mt-5'>
                                <button onClick={() => setConfirmationModal(false)} className='btn btn-light' disabled={loading}>
                                    {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                &nbsp; {t`cancel`}
                                </button>

                                <button onClick={() => onMockConfirmOrder()} className='btn btn-success' disabled={loading}>
                                    {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                        &nbsp; {t`confirmOrder`}
                                </button>

                            </div>
                        }

                        {
                            successfulOrder === InternalOrderState.SUCCESSFUL && <div style={{ zIndex: 10 }} className='col-12 d-flex justify-content-center mt-5'>
                                <button onClick={() => onGoHome()} className='btn btn-success w-100' disabled={loading}>
                                    {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                               OK
                            </button>
                            </div>
                        }

                        {
                            successfulOrder === InternalOrderState.FAILED && <div style={{ zIndex: 10 }} className='col-12 d-flex justify-content-between mt-5'>
                                <button onClick={() => setConfirmationModal(false)} className='btn btn-light w-100' disabled={loading}>
                                    {loading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                    &nbsp; {t`goBack`} & {t`tryAgain`}
                                </button>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    </Modal>

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className='row'>
                <div className='col'>
                    {phoneNumberNumberFieldRenderer()}
                    {state.orderType === OrderType.DELIVERY && addressFieldRenderer()}
                    {emailFieldRenderer()}
                    {commentAreaRenderer()}
                    {paymentTypeRenderer()}
                    <div className='px-2'>
                        {termsCheckerRenderer()}
                        {environmentProtectorCheckerRenderer()}
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-grid">
                    {
                        loading ? <button className="btn btn-primary fw-bold text-uppercase m-0 w-100 m-0" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                     &nbsp;   {t`ordering`}
                        </button> :
                            <button
                                type='submit'
                                className={`text-uppercase h2 fw-bold m-0 btn btn-primary`}
                            >
                                {t`orderNow`}
                                &nbsp;
                                <i className='fe fe-send'></i>
                            </button>
                    }


                    <h2 className="mt-3 text-end">{t`total`}: {state?.total}mkd</h2>
                </div>
            </div>
            {deliveryConfirmationRenderer()}
        </form >
    )
}

export default DeliveryForm;
