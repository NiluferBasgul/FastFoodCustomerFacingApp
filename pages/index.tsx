import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { ProductCard } from "components/ProductCard";
import MyCarousel from "components/CustomCarousel";
import { Menu } from "components/Menu";
import { Filters } from "components/Filters";
import cucinaTree, {
  FoodSet,
  FoodSlug,
  getInitialCustomizations,
  initialBaseCustomizations,
  initialPizzaCustomizations,
  MainMenu,
  MenuCategoryType,
  MenuItem,
  OrderState,
  PurchaseOrder,
  SingleMenu,
} from "data/cucinaTree";
import styles from "styles/index.module.scss";
import { motion } from "framer-motion";
import BottomBar from "components/BottomBar/BottomBar";
import { Context, ContextProps } from "store/store";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import SinglePizzaPage from "./pizza/[slug]";
import { initialDisplayedMenu } from "config/storeConfig";
import useTranslation from 'next-translate/useTranslation'
import OrderTypeSelection from "components/Checkout/OrderTypeSelection";
import SingleBaseProduct from "components/SingleBaseProduct";
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useSWRAxios } from "data/useSWRAxios";
import { id } from "date-fns/locale";
import ProductTracking from "components/ProductTracking";
import { orderStateToNumber } from "utils/genericUtils";
import { colorPaletteOfImage, createSliderImagesWithGardientBackground } from "utils/colorPaletteOfImage";
import Link from "next/link";
import LunchAndBreakfastSection from "components/Pages/Home/LunchAndBreakfastSection";

Modal.setAppElement('#__next')

const spring = {
  type: "spring",
  damping: 30,
  stiffness: 140,
  duration: 0.3,
};

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

const ProductCardRenderer = ({ item }) => {

  switch (item.menuCategory) {
    case MenuCategoryType.PIZZAS:
    default:
      return (
        <motion.div layout transition={spring} key={item.slug}>
          <ProductCard {...item}></ProductCard>
        </motion.div>
      );
  }
};

interface IndexPageProps {
  menus: MainMenu;
  initialDisplayedMenu: MenuCategoryType;
  imagesWithGradientBackgrounds: any;
}

const IndexPage = (props: IndexPageProps) => {

  const { t } = useTranslation('common');

  const [selectedMenu, setSelectedMenu] = useState<MenuCategoryType>(props.initialDisplayedMenu);
  const [showTracker, setShowTracker] = useState(false);


  const [selectedFilter, setSelectedFilter] = useState("");
  const { state, dispatch } = React.useContext(Context) as ContextProps;
  const router = useRouter();
  const [clientPhone, setClientPhone] = useState<string | null>(null)


  useEffect(() => {
    setClientPhone(localStorage?.getItem('@phone'));

    setTimeout(() => {
      setShowTracker(true);
    }, 1500);

  }, [])

  // const { data, error } = useSWRAxios<PurchaseOrder[]>({ url: `order/customer`, params: { phoneNumber: clientPhone } }, { errorRetryCount: 3 });

  useEffect(() => {
    document.body.style.overflow = 'unset';

    dispatch({ type: 'RESET_SELECTED', payload: null });

    if (!!router.query.slug === true) {
      // Disable scrolling under the modal
      setTimeout(() => {
        document.body.style.overflow = 'hidden';
      }, 0)
    }

  }, [!!router.query.slug])

  const onSelectMenu = (menu: MenuCategoryType) => {
    setSelectedMenu(menu);
  };

  const onSelectFilter = (item: string) => {
    setSelectedFilter(item);

    // TODO: Filter items
  };

  const goToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      {/* {data?.[0] && showTracker &&
        <div className='py-5 bg-drops'>
          <button type="button" onClick={() => setShowTracker(false)} className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" />
          <div className=''>
            <div className='container-sm'>
              <div className='row'>
                <div className='col px-5' style={{ backdropFilter: `blur(2px)` }}>
                  <ProductTracking currentStep={orderStateToNumber(data?.[0].orderState || OrderState.NEW)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      } */}

      <Layout>
        {(Object.keys(state.orders).length > 0 && !router.query.slug) && (
          <BottomBar
            btnTxt={`${t('checkout')}`}
            infoTxt={`${state?.total} MKD`}
            onBtnClick={goToCheckout}
            position='top'
          />
        )}

        <div className={`${styles.Carousel} px-0`}>
          <div className='row'>
            <MyCarousel imagesWithGradientBackgrounds={props.imagesWithGradientBackgrounds} />
            <Menu menus={Object.keys(props.menus) as MenuCategoryType[]} selected={selectedMenu} onClick={onSelectMenu} />
          </div>
        </div>

        <div className={`${styles.MenuItems}`}>
          {/* <div className={styles.Filters}>
          <Filters selected={selectedFilter} onClick={onSelectFilter} />
        </div> */}



          {/* <div className='mb-5'>
            <LunchAndBreakfastSection />
          </div> */}

          <div className='container-sm'>
            {/* <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <Link href='pizza-by-design'>
                  <div className='card bg-leaf user-select-none pointer'>
                    <div className='lift card-body text-center text-white fw-bold' style={{ fontFamily: 'Cabin' }}>
                      <h1 className='p-0 m-0'><span className='px-4 py-1 m-0 bg-dark' style={{ fontSize: '2wv !important', letterSpacing: '5px', color: 'bisque' }}>Pizza By Design</span></h1>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='ps-md-4 col-sm-12 col-md-6'>
                <Link href='half-half-pizza'>
                  <div className='card bg-half-half user-select-none pointer'>
                    <div className='lift card-body text-center text-danger fw-bold' style={{ fontFamily: 'Cabin' }}>
                      <h1 className='p-0 m-0'><span className='px-3 py-1 m-0' style={{ fontSize: '2wv !important', letterSpacing: '5px' }}>Half &nbsp; &nbsp; <span className='text-warning'>Half</span></span></h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div> */}

            <div className={`${styles.Products}`}>
              {Object.entries(props.menus[selectedMenu])?.map(([product, details]) => {
                const enhacedProduct = {
                  ...details!,
                  slug: product as FoodSlug,
                  menuCategory: selectedMenu,
                } as MenuItem;

                return (
                  <ProductCardRenderer
                    key={product}
                    item={enhacedProduct}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {
          (Object.keys(state.orders).length > 0 && !router.query.slug) && (
            <BottomBar
              btnTxt={`${t('checkout')}`}
              infoTxt={`${state?.total} MKD`}
              onBtnClick={goToCheckout}
            />
          )
        }
        {/* Enable This after fixing scroll to top */}
        {/* <Modal
        style={customStyles}
        isOpen={!!router.query.slug}>
        {
          selectedMenu === MenuCategoryType.PIZZAS ?
            <SinglePizzaPage item={props?.menus?.[MenuCategoryType.PIZZAS]?.[router.query.slug as string]} /> : <SingleBaseProduct item={props?.menus?.[selectedMenu]?.[router.query.slug as string]} menuCategoryType={selectedMenu} />
        }
      </Modal> */}
      </Layout>
    </>
  );
};


export const getStaticProps = async () => {
  const menus = cucinaTree.mainMenu;

  Object.entries(cucinaTree.mainMenu).forEach(([menu, _]) => {
    Object.entries(menus[menu as MenuCategoryType]).forEach(([slug, details]) => {
      menus[menu][slug] = { ...details, customizations: getInitialCustomizations(menu as MenuCategoryType) }

      // if (menu === MenuCategoryType.PIZZAS) {
      //   menus[menu][slug] = { ...details, customizations: initialPizzaCustomizations }
      // } else {
      //   menus[menu][slug] = { ...details, customizations: initialBaseCustomizations }
      // }
    });
  });

  const imagesWithGradientBackgrounds = await createSliderImagesWithGardientBackground();

  return {
    props: {
      initialDisplayedMenu,
      menus,
      imagesWithGradientBackgrounds
    }
  }
}

export default IndexPage;