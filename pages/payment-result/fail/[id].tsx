import Layout from "components/Layout";
import axiosInstance from "data/axiosInstance";
import { PaymentStatus } from "data/cucinaTree";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


const FailedPaymentResult = () => {

    const router = useRouter();
    const [fire, setFire] = useState(false);

    const { id, success, warnPayment } = router?.query;

    useEffect(() => {
        const updateDto = {
            orderId: id,
            paymentStatus: PaymentStatus.FAILED
        }

        axiosInstance.put('order/payment', updateDto).then(_ => {

        }).catch(_ => {
            // Notify sentry for fatal update payment with status
        });

        setTimeout(() => {
            setFire(true)
        }, 1000)

        setFire(false);
    }, [])


    return (
        <Layout>
            <div className='container'>
                <div className='row' style={{ marginTop: 150 }}>
                    <div className='col'>
                        <h2 className='text-center'>{id}</h2>
                        <h1 className='text-center text-danger'>Your Order has FAILED!</h1>

                        <h3 className='text-center'>Redirecting to home...</h3>
                    </div>
                </div>

                <div className='row' style={{ marginTop: 100 }}>
                    <div className='col d-flex justify-content-center'>
                        <button onClick={() => router.push('/')} className='btn btn-secondary'>
                            GO TO HOME
                        </button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default FailedPaymentResult;
