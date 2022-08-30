import { MenuCategoryType } from "data/cucinaTree";
import { ArrowRight, ShoppingBag } from "react-feather";
import useTranslation from "next-translate/useTranslation";

interface BottomBarProps {
  btnTxt?: string;
  infoTxt?: string;
  onBtnClick: () => void;
  menuCategory?: MenuCategoryType;
  position?: "bottom" | "top";
}

const BottomBar = ({
  btnTxt,
  infoTxt = "(1) item",
  onBtnClick,
  menuCategory,
  position = 'bottom'
}: BottomBarProps) => {

  const { t } = useTranslation('common');

  return (
    <>
      <nav className={`mobile-nav__${position} m btn btn-${menuCategory ? 'dark' : 'primary'}`}>
        <div className={`mobile-nav__item mobile-nav__item--active`}>
          <div className="mobile-nav__item-content">
            <h5 className='text-muted m-0 pb-1 font-weight-bold'>
              {menuCategory ? `${menuCategory} ${t('finalPrice')}` : t('totalShoppingBag')}
            </h5>
            <h2 className="m-0 p-0">
              {infoTxt}
            </h2>
          </div>
        </div>

        <div onClick={onBtnClick} className="mobile-nav__item">
          <div className="mobile-nav__item-content">
            <h2 className="p-0 m-0 bounce-right">
              {btnTxt || t('addToCard')} <ArrowRight />
            </h2>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomBar;
