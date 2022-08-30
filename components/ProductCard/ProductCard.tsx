import CustomLinkWrapper from "components/Utils/CustomLinkWrapper";
import ImageLoad from "components/Utils/ImageLoad";
import { MenuCategoryType, MenuItem } from "data/cucinaTree";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

type ProductCardProps = MenuItem & { menuCategory: MenuCategoryType };

const ProductCard = (
  props: ProductCardProps & { menuCategory: MenuCategoryType }
) => {
  const src = `/images/menu/${props.menuCategory}/${props.imgSrc || props.slug}.jpg`

  const { t } = useTranslation('common');

  const ingredients = props.standartIngredients ? Object.entries(props.standartIngredients!)
    .map(([name]) => t(name))
    .join(", ")
    .toLowerCase() : '';

  return (
    <div className="card">
      <Link
        // Routing instead of modal
        href={{ pathname: `/${props.menuCategory}/[slug]?slug=${props.slug}` }}

        // Modal instead of routing
        // href={`/?slug=${props.slug}&menuCategory=${props.menuCategory}`}
        as={`/${props.menuCategory}/${props.slug}`}
      >
        <CustomLinkWrapper>
          <ImageLoad
            className="card-img-top pointer"
            src={src}
            placeholder={props.imgSrc || `./public/images/menu/${props.menuCategory}/${props.slug}.jpg`}
            alt={props.slug}
            defaultSrc={`/images/menu/${props.menuCategory}/default.jpg`}
          />
        </CustomLinkWrapper>
      </Link>
      <div className={`card-body ${styles.CardBody}`}>
        <div className={styles.Content}>
          <h2 className={`m-0 p-0 ${styles.Name}`}>{props.name}</h2>
          <h4 className={`text-muted text-lowercase ${styles.Ingredients}`}>{ingredients}</h4>

          <Link
            href={`/${props.menuCategory}/[slug]?slug=${props.slug}`}
            as={`/${props.menuCategory}/${props.slug}`}
          >
            <CustomLinkWrapper>
              <div className={styles.CardFooter}>
                <div className="col-5">
                  <strong
                    className={`text-dark font-weight-bold ${styles.Price}`}
                  >
                    {props.price}mkd
                  </strong>
                </div>
                <div className="col-7 d-flex justify-content-end">
                  <button
                    className={`btn btn-sm btn-primary ${styles.OrderTxt}`}
                  >
                    {t('orderNow')}
                  </button>
                </div>
              </div>
            </CustomLinkWrapper>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default ProductCard;
