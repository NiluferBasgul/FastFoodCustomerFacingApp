import { BOTH, CustomizableMenuItem, MenuCategoryType, PricedCrustAdditions, PricedCrustType, PricedSauces } from "data/cucinaTree";
import { useRouter } from "next/router";
import React from "react";
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Plus, Minus, Trash2, Edit } from "react-feather";
import { Context, ContextProps } from "store/store";
import useTranslation from "next-translate/useTranslation";
import { menuCategoryToEmoji } from "utils/genericUtils";


const AccordionTable = () => {
    const router = useRouter();
    const { dispatch, state } = React.useContext(Context) as ContextProps;
    const orders = state?.orders!;

    const { t } = useTranslation('common');

    const onRemoveProduct = (product) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: product });
    };

    const onIncreaseProductCount = (product) => {
        dispatch({
            type: "CHANGE_PRODUCT_TOTAL",
            payload: { order: product, direction: 1 },
        });
    };

    const onDecreaseProductCount = (product) => {
        dispatch({
            type: "CHANGE_PRODUCT_TOTAL",
            payload: { order: product, direction: -1 },
        });
    };

    const onEditProduct = (product) => {
        dispatch({ type: "SELECT_PRODUCT", payload: product });
        setTimeout(() => {
            router.push({ pathname: `/${product?.menuCategory}/${product?.slug}`, query: { id: product.id } });
        }, 100);
    };

    const extraIngredientsRenderer = (product: CustomizableMenuItem) => {
        // TODO: DESIGN UPDATES
        return (
            <div className='col-md-6 col-lg-4 px-3'>
                <p className='d-grid'>{t('extraIngredients')}
                    {
                        Object.entries(product.customizations?.extraIngredients!).map(([name, details]) => {
                            return (
                                <span key={name} className='ms-2 text-lowercase fw-light'>{t(name)}  (+{details?.price}MKD)</span>
                            )
                        })
                    }
                </p>
            </div>
        )
    }

    const disabledIngredientsRenderer = (product: CustomizableMenuItem) => {
        // TODO: DESIGN UPDATES
        return (
            <div className='col-md-6 col-lg-4 px-3'>
                <p className='d-grid'>{t('disabledIngredients')}
                    {
                        Object.entries(product.customizations?.disabledIngredients!).map(([name, _]) => {
                            return (<span key={name} className='ms-2 text-lowercase fw-light text-decoration-line-through'>{t(name)}</span>)
                        })
                    }
                </p>
            </div>
        )
    }

    const crustTypeRenderer = (crustType: PricedCrustType) => {
        // TODO: DESIGN UPDATES
        return (
            <div className='col-md-6 col-lg-4 px-3'>
                <p className='d-grid'>{t('crustType')} {Object.entries(crustType).map(([name, details]) => (<span className='ms-2 text-lowercase fw-light' key={name}>{t(name)}  (+{details?.price}MKD)</span>))}</p>
            </div>
        )
    }

    const extraSauceRenderer = (sauce: PricedSauces) => {
        // TODO: DESIGN UPDATES
        return (
            <div className='col-md-6 col-lg-4 px-3'>
                <p className='d-grid'>{t('sauceOnTop')} {Object.entries(sauce).map(([name, details]) => (<span className='ms-2 text-lowercase fw-light' key={name}>{t(name)}  (+{details?.price}MKD)</span>))}</p>
            </div>
        )
    }

    const crustAdditionsRenderer = (crustAdditions: PricedCrustAdditions) => {
        // TODO: DESIGN UPDATES
        return (
            <div className='col-md-6 col-lg-4 px-3'>
                <p className='d-grid'>{t('crustAdditions')} {Object.entries(crustAdditions).map(([name, details]) => (<span className='ms-2 text-lowercase fw-light' key={name}>{t(name)}  (+{details?.price}MKD)</span>))}</p>
            </div>
        )
    }

    const renderPanel = (product: CustomizableMenuItem<BOTH>) => (
        <div className='row'>
            <div className='col-9 d-flex flex-column justify-content-between'>
                <div className='row'>
                    {product?.customizations?.crustType && crustTypeRenderer(product.customizations.crustType)}
                    {Object.keys(product?.customizations?.crustAdditions || {})?.length > 0 && crustAdditionsRenderer(product.customizations?.crustAdditions!)}
                    {Object.keys(product?.customizations?.extraIngredients || {})?.length > 0 && extraIngredientsRenderer(product)}
                    {Object.keys(product?.customizations?.disabledIngredients || {})?.length > 0 && disabledIngredientsRenderer(product)}
                    {Object.keys(product?.customizations?.extraSauce || {})?.length > 0 && extraSauceRenderer(product.customizations?.extraSauce!)}
                    <div className='row align-items-end'>
                        <div className='col-4'>
                            <button
                                onClick={() => onRemoveProduct(product)}
                                className={`btn btn-sm btn-danger`}
                            ><Trash2 size={10} /> {t('remove')}</button>
                        </div>
                        {product?.customizations && <div className='col-8'>
                            <button
                                onClick={() => onEditProduct(product)}
                                className={`btn btn-sm btn-light float-right w-75`}
                            ><Edit size={10} /> {t('customize')}</button>
                        </div>}
                    </div>
                </div>

            </div>
            <div className='col-3 d-flex justify-content-end'>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <button onClick={() => onIncreaseProductCount(product)}
                        className='btn btn-sm btn-light'><Plus /></button>
                    <div className='h2 p-0 mt-2 mb-2 user-select-none'>{product.count}</div>

                    <button disabled={product?.count! <= 1} onClick={() => onDecreaseProductCount(product)} className='btn btn-sm btn-light'><Minus /></button>

                </div>
            </div>
        </div>
    )

    return (
        <>
            {
                Object.entries(orders).map(([id, order], index) => (
                    <tr key={id}>
                        <td scope="row">#{index + 1}</td>
                        <th>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <h2 className='p-2 m-0 d-flex align-items-center'>{`${order?.count} x ${order?.name} ${order.menuCategory ? `${order.menuCategory} ${menuCategoryToEmoji(order.menuCategory)}` : ``}`}  <span className='ms-2 badge bg-primary-soft'><strong>{order?.price}mkd</strong></span></h2>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {renderPanel(order)}
                                </AccordionItemPanel>
                            </AccordionItem>
                        </th>
                    </tr>
                ))
            }
            <tr key={'free-delivery'}>
                <td scope="row">#{Object.entries(orders).length + 1}</td>
                <th>
                    <h2 className='p-2 m-0 d-flex align-items-center'>{t`deliveryFee`}  <span className='ms-2 badge bg-secondary-soft'><strong>{t('free')}</strong></span></h2>
                </th>
            </tr>
            <tr key='total-amount'>
                <td scope='row'>

                </td>

                <th className='d-flex justify-content-end align-items-end'>
                    {/* <div className='row text-end pt-1'>
                        <div className='col p-4'> */}
                    <h1 className='d-flex align-items-center m-0 mt-3 justify-content-end'>{t('total')}: &nbsp; <span className='ms-2 badge bg-primary-soft'>{state!.total} MKD</span></h1>
                    {/* </div>
                    </div> */}
                </th>
            </tr>
        </>
    );
}

export default AccordionTable;