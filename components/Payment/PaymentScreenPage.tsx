import React, { useState, useRef, useCallback } from 'react';
import CForm from './PaymentCardForm';
import Card from './PaymentCard';
import { useRouter } from 'next/router';
import { Context, ContextProps } from 'store/store';
import axiosInstance from 'data/axiosInstance';
import Iframe from 'components/Common/Iframe';
import { buildURLQuery } from 'utils/genericUtils';
import { apiUrl } from 'config/storeConfig';

const initialState = {
    cardNumber: '#### #### #### ####',
    cardHolder: 'FULL NAME',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    isCardFlipped: false
};

const PaymentScreenPage = () => {

    const router = useRouter();
    const { dispatch, state } = React.useContext(Context) as ContextProps;

    const orderId = router.query?.id;
    const total = state.total;

    const [cardFormState, setState] = useState(initialState);
    const [currentFocusedElm, setCurrentFocusedElm] = useState(null);
    const [paymentResult, setPaymentResult] = useState<string | null>(null)


    const updateStateValues = useCallback(
        (keyName, value) => {
            setState({
                ...cardFormState,
                [keyName]: value || initialState[keyName]
            });
        },
        [cardFormState]
    );

    const onSubmit = async () => {
        const order = {
            orderId: orderId?.toString() || '',
            number: cardFormState.cardNumber.replace(/\s/g, ""),
            year: cardFormState.cardYear,
            month: cardFormState.cardMonth,
            cvv: cardFormState.cardCvv,
            amount: total.toString(),
        }

        const queryString = buildURLQuery(order);

        window.location.href = `${apiUrl}/pay?${queryString}`
    }

    // References for the Form Inputs used to focus corresponding inputs.
    const formFieldsRefObj = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef(),
        cardCvv: useRef()
    };

    const focusFormFieldByKey = useCallback((key: string): void => {
        formFieldsRefObj[key].current.focus();
    }, []);

    // This are the references for the Card DIV elements.
    let cardElementsRef = {
        cardNumber: useRef(),
        cardHolder: useRef(),
        cardDate: useRef()
    };

    let onCardFormInputFocus = (_event, inputName) => {
        const refByName = cardElementsRef[inputName];
        setCurrentFocusedElm(refByName);
    };

    let onCardInputBlur = useCallback(() => {
        setCurrentFocusedElm(null);
    }, []);

    return (
        <>
            <div className="wrapper">
                {/* @ts-ignore */}
                <CForm
                    cardMonth={cardFormState.cardMonth}
                    cardYear={cardFormState.cardYear}
                    onUpdateState={updateStateValues}
                    cardNumberRef={formFieldsRefObj.cardNumber}
                    cardHolderRef={formFieldsRefObj.cardHolder}
                    cardDateRef={formFieldsRefObj.cardDate}
                    onCardInputFocus={onCardFormInputFocus}
                    onCardInputBlur={onCardInputBlur}
                    onSubmit={onSubmit}
                >
                    <Card
                        cardNumber={cardFormState.cardNumber}
                        cardHolder={cardFormState.cardHolder}
                        cardMonth={cardFormState.cardMonth}
                        cardYear={cardFormState.cardYear}
                        cardCvv={cardFormState.cardCvv}
                        isCardFlipped={cardFormState.isCardFlipped}
                        currentFocusedElm={currentFocusedElm}
                        onCardElementClick={focusFormFieldByKey}
                        cardNumberRef={cardElementsRef.cardNumber}
                        cardHolderRef={cardElementsRef.cardHolder}
                        cardDateRef={cardElementsRef.cardDate}
                    ></Card>
                </CForm>
            </div>
        </>
    );
};

export default PaymentScreenPage;