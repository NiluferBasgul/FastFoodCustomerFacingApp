import Layout from "components/Layout";
import PaymentScreenPage from "components/Payment/PaymentScreenPage";
import React, { useEffect, useState } from "react";

const RealizedPayment = () => {

    return <Layout>
        {/* {warnPayment && <h4>Payment successfully but order update failed. Please call: 077 777 777</h4>}
        {success === 'true' && <h2>Your Order Was Successfull with id: {id}</h2>}
        {success === 'false' && <h2>Your Order Failed with id: {id}</h2>} */}

        <PaymentScreenPage />
    </Layout>
}

// export const getStaticPaths = async ({ locales }) => {
//     const paths = [] as any[];

//     for (const locale of locales) {
//         const path = {
//             locale,
//         }

//         paths.push(path);
//     }

//     return {
//         paths,
//         fallback: false
//         // fallback: true
//     }
// }

export default RealizedPayment;