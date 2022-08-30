import { OrderType } from "data/cucinaTree";
import { useContext } from "react";
import { Context, ContextProps } from "store/store";
import useTranslation from "next-translate/useTranslation";


interface OrderTypeSelectionProps {
    size?: string
}

const OrderTypeSelection = ({ size }: OrderTypeSelectionProps) => {
    const { state, dispatch } = useContext(Context) as ContextProps;

    const {t} = useTranslation('common')

    return (
        <div
            className='border border-primary rounded d-grid'
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <button
                type='button'
                onClick={() => dispatch({ type: 'CHANGE_ORDER_TYPE', payload: OrderType.TAKE_AWAY })}
                className={`btn h3 text-uppercase fw-bold m-0 btn-${size || 'sm'} btn-light ${state.orderType === OrderType.TAKE_AWAY ? 'bg-primary color-white' : ''}`}>
                {t`takeAway`}
                &nbsp;
                &nbsp;
                 <i className='fe fe-package' />
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'CHANGE_ORDER_TYPE', payload: OrderType.DELIVERY })}
                className={`btn h3 text-uppercase fw-bold m-0 btn-${size || 'sm'} btn-light ${state.orderType === OrderType.DELIVERY ? 'bg-primary color-white' : ''}`} >
                {t`delivery`}
                &nbsp;
                &nbsp;
             <i className='fe fe-truck' />
            </button>
        </div>
    )
}
export default OrderTypeSelection