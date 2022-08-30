import { OrderType, Size } from "data/cucinaTree";
import { useContext } from "react";
import { Context, ContextProps } from "store/store";
import useTranslation from "next-translate/useTranslation";


interface ProductSizeProps {
    size?: string
}

const ProductSize = ({ size }: ProductSizeProps) => {
    const { state, dispatch } = useContext(Context) as ContextProps;

    const { t } = useTranslation('common');

    console.log('falan', state.selected?.customizations?.size[0])

    return (
        <div
            className='border border-primary rounded d-grid'
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <button
                type='button'
                onClick={() => dispatch({ type: 'CHANGE_PRODUCT_SIZE', payload: Size.REGULAR })}
                className={`btn h3 text-uppercase fw-bold m-0 btn-${size || 'sm'} btn-light ${state.selected?.customizations?.size[0] === Size.REGULAR ? 'bg-primary color-white' : ''}`}>
                {t(Size.REGULAR)}
                &nbsp;
                &nbsp;
                <i className='fe fe-chevron-up'></i>
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'CHANGE_PRODUCT_SIZE', payload: Size.FAMILY })}
                className={`btn h3 text-uppercase fw-bold m-0 btn-${size || 'sm'} btn-light ${state.selected?.customizations?.size[0] === Size.FAMILY ? 'bg-primary color-white' : ''}`} >
                {t(Size.FAMILY)}
                &nbsp;
                &nbsp;
                <i className='fe fe-chevrons-up'></i>
            </button>
        </div>
    )
}
export default ProductSize