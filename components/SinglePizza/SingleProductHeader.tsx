import ImageLoad from "components/Utils/ImageLoad";
import { MenuCategoryType, MenuItem, Size } from "data/cucinaTree";
import styles from "./SingleProductHeader.module.scss";
import useTranslation from "next-translate/useTranslation";
import { Context, ContextProps } from "store/store";
import React from "react";

const SingleProductHeader = (props: MenuItem & { size?: Size, customImage?: JSX.Element }) => {
  const { t } = useTranslation('common');

  const ingredients =
    props.standartIngredients ? Object.entries(props.standartIngredients)
      .map(([name, details]) => details?.name || t(name))
      .join(", ")
      .toLowerCase() : null

  const { state } = React.useContext(Context) as ContextProps;
  const selectedCrustType = state.selected?.customizations?.crustType;
  const selectedMenuCategory = state.selected?.menuCategory;

  return (
    <div className={`card card-fill ${styles.Wrapper}`}>
      {
        props.customImage ? props.customImage : <ImageLoad
          src={props.imgSrc || `/images/menu/${props.menuCategory}/${props.slug}.jpg`}
          alt={props.slug}
          className="card-img-top"
          defaultSrc={`/images/menu/${props.menuCategory}/default.jpg`}
          placeholder={props.imgSrc || `./public/images/menu/${props.menuCategory}/${props.slug}.jpg`}
        />
      }
      <div className={`card-body mt-0 ${selectedMenuCategory === MenuCategoryType.PIZZAS && selectedCrustType ? `background_${Object.keys(selectedCrustType)[0].toLowerCase()}` : ''}`}>
        <div className="row align-items-center">
          <div className="col">
            <h3 className="text-dark mb-2 text-lowercase">{ingredients ? ingredients : `${t('loading')}`}</h3>
            <span className="badge bg-warning font-weight-bold">{t('bestSeller')}</span>
            {props.size && <span className="badge mx-3 bg-primary-soft font-weight-bold">{t(props.size)}</span>}
          </div>
          <div className="col-auto">
            <h2 className="font-weight-bold">{props.price}mkd</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductHeader;