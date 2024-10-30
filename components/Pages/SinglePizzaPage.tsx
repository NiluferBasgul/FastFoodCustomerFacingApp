import Layout from "components/Layout";
import {
    CustomizableMenuItem,
    IngredientDetails,
    MenuCategoryType,
    MenuItem,
    FoodSlug,
    Size
} from "data/cucinaTree";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import React, { useEffect, useState } from "react";
import SingleProductHeader from "components/SinglePizza/SingleProductHeader";
import CrustAdditions from "components/SinglePizza/CrustAdditions";
import StandartIngredients from "components/SinglePizza/StandartIngredients";
import ExtraIngredients from "components/SinglePizza/ExtraIngredients";
import BottomBar from "components/BottomBar/BottomBar";
import { Context, ContextProps } from "store/store";
import randomID from "utils/randomID";
import ExtraSauce from "components/SinglePizza/ExtraSauce";
import CrustTypeComponent from "components/SinglePizza/CrustTypeComponent";
import IngredientCategoryExplainer from "components/Common/IngredientCategoryExplainer";
import { isBrowser, isEmpty, menuCategoryToEmoji } from "utils/genericUtils";
import RenderRefreshAlert from "components/Common/RenderRefreshAlert";
import useTranslation from "next-translate/useTranslation";
import ProductSize from "components/SinglePizza/ProductSize";

export interface SinglePizzaPageWithoutRouterProps {
    slug?: string;
    id?: string;
    item?: MenuItem;
}

const SinglePizzaPage = (props: SinglePizzaPageWithoutRouterProps) => {
    const router = useRouter();

    if (!props.slug && !router?.query?.slug)
        return (
            <>
                <DefaultErrorPage statusCode={404} />
            </>
        );

    const { t } = useTranslation('common');

    const { dispatch, state } = React.useContext(Context) as ContextProps;

    // Having id means product is in Cart and edit mode should enabled
    // We're determining if slug comes from props or by routing
    const { slug, id } = router.query;

    // const [showCustomize, setShowCustomize] = useState(!!id ? true : false);
    const [showCustomize, setShowCustomize] = useState(true);

    const [genericError, setGenericError] = useState(false);

    // if id exists we pick the menu item from state.orders and 
    // if not we pick it from the selected item (by url or by navigating from prev screen)
    const pizza: CustomizableMenuItem<MenuCategoryType.PIZZAS> = !!id ? { ...state?.orders?.[id as string] } : { ...props.item }
    if (isEmpty(pizza)) {
        console.warn('Breaking error, should notify sentry', pizza);
        if (!genericError) setGenericError(true);
    }

    if (!pizza.menuCategory) {
        pizza['menuCategory'] = router.query.menuCategory as MenuCategoryType;
    }

    if (!pizza.slug) {
        pizza['slug'] = router.query.slug as FoodSlug
    }

    const [pizzaPrice, setPizzaPrice] = useState(pizza.price || 0);
    const [basePrice, setBasePrice] = useState(pizza.price || 0);

    useEffect(() => {
        const initialPrice = pizza.price || 0;

        let basePrice = initialPrice;

        if (state.selected?.customizations?.size[0] === Size.FAMILY) {
            basePrice = Math.ceil(initialPrice + initialPrice * 0.5);
        }

        let caulculatedCustomizations = 0;

        Object.entries(state.selected?.customizations || {}).filter(([k, _]) => k !== 'disabledIngredients' && k !== 'size').map(([_, v]) => {
            Object.values(v as IngredientDetails[]).map(details => {
                caulculatedCustomizations = caulculatedCustomizations + details.price
            });
        })



        // setPizzaPrice(state.selected?.price! + caulculatedCustomizations)
        setPizzaPrice(basePrice + caulculatedCustomizations);
        setBasePrice(basePrice);
    }, [state.selected?.customizations])

    useEffect(() => {
        dispatch({ type: "SELECT_PRODUCT", payload: { ...pizza, slug, menuCategory: MenuCategoryType.PIZZAS } });

        return () => {
            dispatch({ type: "RESET_SELECTED", payload: null })
        }
    }, [])

    const onAddItem = () => {
        // if editing
        if (!!id) {
            dispatch({ type: "EDIT_PRODUCT" });
            router.replace("/checkout");
        } else {
            const id = randomID();
            const order = {
                [id]: {
                    ...state.selected,
                    count: 1,
                    total: pizzaPrice,
                    id
                }
            };
            dispatch({ type: "ADD_PRODUCT", payload: order });

            if (isBrowser && !localStorage?.getItem('@addedToCartAlready')) {
                router.push({ pathname: '/', query: { firstCartAddition: 'true' } });
                localStorage.setItem('@addedToCartAlready', 'true');
            }

            router.push({ pathname: '/' });
        }
    };

    return (
        <Layout disableFooter={true}>
            <BottomBar position='top' menuCategory={MenuCategoryType.PIZZAS} infoTxt={pizzaPrice.toString() + 'MKD' || ''} btnTxt={!!id ? t`complete` : t`addToCard`} onBtnClick={onAddItem} />

            {genericError && <RenderRefreshAlert />}

            <div className='container-sm my-4'>
                <div className='row'>
                    <div className='col-12'>
                        <ProductSize />
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className='row d-flex align-items-center'>
                    <div className='col-3'>
                        <button className='btn btn-light' onClick={() => router.back()}>
                            <i className='fe fe-arrow-left' /> {t`back`}
                        </button>
                    </div>
                    <div className='col-9'>
                        <h1 className="font-weight-bold p-0 m-0 text-end">{state.selected ? `${state.selected?.name} ${state.selected?.menuCategory ? `${state.selected?.menuCategory} ${menuCategoryToEmoji(state.selected?.menuCategory)}` : ``}` : t`loading`}</h1>
                    </div>
                </div>
            </div>

            <div className='container-sm mt-3'>
                <div className='row'>
                    <div className="col-12 col-md-4">
                        <SingleProductHeader
                            name={state.selected?.name}
                            price={basePrice}
                            slug={slug as FoodSlug}
                            menuCategory={MenuCategoryType.PIZZAS}
                            imgSrc={state.selected?.imgSrc}
                            standartIngredients={state.selected?.standartIngredients}
                            size={state.selected?.customizations?.size[0]}
                        />
                    </div>

                    <div className='col-12 col-md-8 ps-md-4'>
                        <CrustTypeComponent />

                        <div className="container-sm mt-4">
                            <div className="header">
                                <div className="header-body py-2">
                                    <h5 className="header-pretitle">
                                        {state.selected?.name ? t(`ingredientsInThe`, { product: state.selected?.name }) : 'Loading...'}
                                    </h5>
                                    <h2 className="header-title">{t`youCanRemoveAnyIngredient`}</h2>
                                </div>
                            </div>
                            <StandartIngredients />
                        </div>
                    </div>

                    <div className="container-sm mt-4">
                        <div className="header">
                            <div className="header-body py-2">
                                <h5 className="header-pretitle">{t`crustAdditions`}</h5>
                                <h2 className="header-title">
                                    {t`addOneOrMoreAdditionsToYourCrust`}
                                </h2>
                            </div>
                        </div>
                        <CrustAdditions />
                    </div>

                    <div className="container-sm mt-4">
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <div className="header-body py-2">
                                        <h6 className="header-pretitle">{t`extraIngredients`} <IngredientCategoryExplainer />
                                        </h6>
                                        <h2 className="header-title">
                                            {t(`pickSomeExtraIngredientsToEnrichYourPizza`, { menuCategory: MenuCategoryType.PIZZAS })}
                                        </h2>
                                    </div>
                                </div>
                                <ExtraIngredients />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '6rem' }}>
                        <div className='card pb-4'>
                            <div className='card-body'>
                                <div className="header m-0 container-sm">
                                    <div className="header-body m-0 py-2">
                                        <h6 className="h6 header-pretitle">{t`extraSauce`}</h6>
                                        <h2 className="header-title">
                                            {t`signYourPizzaWithYourFavoriteSauce`}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className='container-fluid'>
                                <ExtraSauce />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomBar menuCategory={MenuCategoryType.PIZZAS} infoTxt={pizzaPrice.toString() + 'MKD' || ''} btnTxt={!!id ? t`complete` : t`addToCard`} onBtnClick={onAddItem} />
        </Layout>
    );
};

export default SinglePizzaPage;
