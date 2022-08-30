import React, { useState } from "react";
import Layout from "components/Layout";
import styles from "./style.module.scss";
import { Context } from "store/store";
import AccordionTable from "components/Checkout/AccordionTable";
import { Accordion } from "react-accessible-accordion";
import DeliveryTime from "components/Checkout/DeliveryTime";
import DeliveryForm from "components/Checkout/DeliveryForm";
import LastAdditions from "components/Checkout/LastAdditions";
import NotFoundComponent from "components/Common/NotFoundComponent";
import OrderTypeSelection from "components/Checkout/OrderTypeSelection";
import Modal from 'react-modal';
import { useRouter } from "next/router";
import PaymentScreenPage from "components/Payment/PaymentScreenPage";

Modal.setAppElement('#__next')

const customStyles = {
  content: {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    border: 'none',
    padding: 0,
    margin: 0,
    backgroundColor: styles.gray_100,
    borderRadius: 0
  }
};

const spring = {
  type: "spring",
  damping: 30,
  stiffness: 140,
  duration: 0.3,
};

const CheckoutPage = () => {
  const { state } = React.useContext(Context);
  const router = useRouter();

  const [paymentModal, setPaymentModal] = useState(false);

  if(Object.keys(state?.orders!).length <= 0) return <NotFoundComponent />;

  return (
    <Layout>
      <div className={`container-sm ${styles.Checkout}`}>

        {Object.keys(state?.orders!).length > 0 && (
          <>
            <div className='row'>
              <div className='col'>
                <DeliveryTime />
              </div>
            </div>

            <div className='row mb-4'>
              <div className='col'>
                <OrderTypeSelection size='lg' />
              </div>

            </div>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <div className='card'>
                <table className="table table-sm table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#No</th>
                      <th className='w-100' scope="col"><div className='d-flex justify-content-between'><span>Name</span>
                        {/* <span className='badge bg-danger-soft d-flex justify-content-center align-items-center pointer'>EMPTY CHECKOUT LIST</span> */}
                      </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <AccordionTable />
                  </tbody>
                </table>
              </div>
            </Accordion>
            <LastAdditions />
            <DeliveryForm />
          </>
        )}
      </div>
      <Modal
        style={customStyles}
        isOpen={router.pathname === 'pay'}>
        <PaymentScreenPage />
      </Modal>
    </Layout>
  );
};

export default CheckoutPage;
