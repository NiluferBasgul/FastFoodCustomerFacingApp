import Layout from "components/Layout";
import ProductTracking from "components/ProductTracking";
import axiosInstance from "data/axiosInstance";
import { OrderState, PaymentStatus, PurchaseOrder } from "data/cucinaTree";
import { useSWRAxios } from "data/useSWRAxios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import useSWR from 'swr'
import { orderStateToNumber } from "utils/genericUtils";


const SuccessPaymentResult = () => {

    const router = useRouter();
    const [fire, setFire] = useState(false);

    const { id } = router?.query;

    // const [orderState, setOrderState] = useState(0);

    const { data, error } = useSWRAxios<PurchaseOrder>({ url: `order/customer/${id}` });

    const [orderState, setOrderState] = useState(OrderState.NEW);

    useEffect(() => {
        // const updateDto = {
        //     orderId: id,
        //     paymentStatus: PaymentStatus.PAID
        // }

        // axiosInstance.put('order/payment', updateDto).then(_ => {

        // }).catch(_ => {
        //     // Notify sentry for fatal update payment status
        // });

        setTimeout(() => {
            setFire(true)
        }, 1000)

        setTimeout(() => {
            setOrderState(OrderState.APPROVED)
        }, 5000)

        setTimeout(() => {
            setOrderState(OrderState.PREPARED)
        }, 10000)

        setTimeout(() => {
            setOrderState(OrderState.TAKED_OUT)
        }, 15000)

        setTimeout(() => {
            setOrderState(OrderState.DELIVERED)
        }, 20000)

        // setTimeout(() => {
        //     router.push('/');
        // }, 3000)
        setFire(false);
    }, []);


    // useEffect(() => {
    //     if (orderState > 4) return;

    //     const intervalId = setInterval(() => {
    //         setOrderState(orderState + 1);
    //     }, 5000)

    //     return () => clearInterval(intervalId);

    // }, [orderState])


    return (
        <Layout>
            <div className='container'>
                <div className='row' style={{ marginTop: 150 }}>
                    <div className='col'>
                        <h5 className='text-center'>{id}</h5>
                        <h1 className='text-center text-success'>Your Order Successfull!</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
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
                                top: 0,
                                right: 0,
                                left: 0,
                                marginLeft: 'auto',
                                marginRight: 'auto'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col px-5'>
                        {/* {error && <h3 className='text-danger text-center'>Unfortunately, Order Tracking currently doesn't works</h3>} */}
                        <ProductTracking currentStep={orderStateToNumber(orderState)} />
                    </div>
                </div>
            </div>


            <div className='row' style={{ marginTop: 100 }}>
                <div className='col d-flex justify-content-center'>
                    <button onClick={() => router.push('/')} className='btn btn-secondary'>
                        GO TO HOME
                        </button>
                </div>
            </div>
        </Layout>
    )
}

export default SuccessPaymentResult;