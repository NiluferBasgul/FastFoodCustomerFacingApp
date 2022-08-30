import Layout from "components/Layout";
import { CustomizableMenuItem, FoodSlug, IngredientDetails, initialBaseCustomizations, MenuCategoryType, MenuItem } from "data/cucinaTree";
import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import React, { useEffect, useState } from "react";
import SingleProductHeader from "components/SinglePizza/SingleProductHeader";
import StandartIngredients from "components/SinglePizza/StandartIngredients";
import ExtraIngredients from "components/SinglePizza/ExtraIngredients";
import BottomBar from "components/BottomBar/BottomBar";
import { Context, ContextProps } from "store/store";
import randomID from "utils/randomID";
import { SinglePizzaPageWithoutRouterProps } from "./Pages/SinglePizzaPage";
import { isBrowser, isEmpty, menuCategoryToEmoji } from "utils/genericUtils";
import RenderRefreshAlert from "./Common/RenderRefreshAlert";
import useTranslation from "next-translate/useTranslation";
import ExtraSauce from "./SinglePizza/ExtraSauce";
import IngredientCategoryExplainer from "./Common/IngredientCategoryExplainer";

export interface MenuItemPageProps extends SinglePizzaPageWithoutRouterProps {
  menuCategoryType: MenuCategoryType;
  item: CustomizableMenuItem
}

const SingleBaseProduct = (props: MenuItemPageProps) => {
  const router = useRouter();

  if (!props.slug && !router?.query?.slug)
    return (
      <>
        <DefaultErrorPage statusCode={404} />
      </>
    );

  const { t } = useTranslation('common');

  const { slug, id } = router.query;

  const [genericError, setGenericError] = useState(false);

  const { dispatch, state } = React.useContext(Context) as ContextProps;

  const product: CustomizableMenuItem = !!id ? { ...state?.orders?.[id as string] } : { ...props.item }

  if (isEmpty(product)) {
    console.warn('Breaking error, should notify sentry', product);
    if (!genericError) setGenericError(true);
  }

  const onAddItem = () => {
    // if (!product.menuCategory) {
    //   product['menuCategory'] = router.query.menuCategory as MenuCategoryType;
    // }

    // if (!product.slug) {
    //   product['slug'] = router.query.slug as FoodSlug
    // }

    if (!!id) {
      dispatch({ type: "EDIT_PRODUCT", payload: { ...product } });
      router.replace("/checkout");
    } else {
      const id = randomID();
      const order = {
        ...state.selected,
        count: 1,
        total: productPrice,
        id
      };

      dispatch({ type: "ADD_PRODUCT", payload: { [id]: order } });

      if (isBrowser && !localStorage?.getItem('@addedToCartAlready')) {
        router.push({ pathname: '/', query: { firstCartAddition: 'true' } });
        localStorage.setItem('@addedToCartAlready', 'true');
      }

      router.push({ pathname: '/' });
    }
  };


  const [productPrice, setPizzaPrice] = useState(product.price || 0);

  useEffect(() => {
    let caulculatedCustomizations = 0;

    Object.entries(state.selected?.customizations!).filter(([k, _]) => k !== 'disabledIngredients').map(([_, v]) => {
      Object.values(v as IngredientDetails[]).map(details => {
        caulculatedCustomizations = caulculatedCustomizations + details.price
      });
    })


    setPizzaPrice(product.price! + caulculatedCustomizations)
  }, [state.selected])

  useEffect(() => {
    dispatch({ type: "SELECT_PRODUCT", payload: { ...product, slug, menuCategory: product.menuCategory || props?.menuCategoryType } });

    return () => {
      dispatch({ type: "RESET_SELECTED", payload: null })
    }
  }, [])

  return (
    <Layout disableFooter={true} title={`Editing ${state.selected?.menuCategory} | Cucina Pizza By Design`}>
      {genericError && <RenderRefreshAlert />}

      <BottomBar position='top' menuCategory={state.selected?.menuCategory! || props?.menuCategoryType} infoTxt={productPrice.toString() + 'MKD' || ''} btnTxt={!!id ? t`complete` : t`addToCard`} onBtnClick={onAddItem} />

      <div className="container-sm mt-5">
        <div className='row d-flex align-items-center'>
          <div className='col-3'>
            <button className='btn btn-light' onClick={() => router.back()}>
              <i className='fe fe-arrow-left' /> {t`back`}
            </button>
          </div>
          <div className='col-9'>
            <h1 className="font-weight-bold p-0 m-0 text-end">{state.selected ? `${state.selected?.name} ${state.selected?.menuCategory ? `${state.selected?.menuCategory} ${menuCategoryToEmoji(state.selected?.menuCategory)}` : ``}` : `loading`}</h1>
          </div>
        </div>
      </div>

      <div className="container-sm min-vh-100">

        <div className='row mt-3'>
          <div className="col-12 col-md-4">
            <SingleProductHeader
              name={state.selected?.name}
              price={state.selected?.price} slug={slug as FoodSlug}
              menuCategory={state.selected?.menuCategory || props?.menuCategoryType}
              imgSrc={state.selected?.imgSrc}
              standartIngredients={state.selected?.standartIngredients}
            />
          </div>


          <div className='col-12 col-md-8 ps-md-3'>
            <div className="header">
              <div className="header-body">
                <h6 className="header-pretitle">
                  {t(`ingredientsInThe`, { product: state.selected?.name || '' })}
                </h6>
                <h2 className="header-title">{t`youCanRemoveAnyIngredient`}</h2>
              </div>
            </div>
            <StandartIngredients />

            <div className="header">
              <div className="header-body">
                <h6 className="header-pretitle">{t`extraIngredients`}</h6> <IngredientCategoryExplainer />
                <h2 className="header-title">
                  {t(`pickSomeExtraIngredientsToEnrichYourPizza`, { menuCategory: state.selected?.menuCategory?.toLocaleLowerCase() || props?.menuCategoryType?.toLocaleLowerCase() })}
                </h2>
              </div>
            </div>

            <ExtraIngredients />

          </div>
        </div>

        <div className='row'>
          <div className='col'>
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

      </div>

      <BottomBar position='top' menuCategory={state.selected?.menuCategory! || props?.menuCategoryType} infoTxt={productPrice.toString() + 'MKD' || ''} btnTxt={!!id ? t`complete` : t`addToCard`} onBtnClick={onAddItem} />
    </Layout>
  );
};

export default SingleBaseProduct;
