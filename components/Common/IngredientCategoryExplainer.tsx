import { IngredientType } from "data/cucinaTree"
import useTranslation from "next-translate/useTranslation"
import ingredientTypeColor from "utils/ingredientTypeColor"

const IngredientCategoryExplainer = () => {

    const { t } = useTranslation('common');

    return <>
        {
            Object.values(IngredientType).map(type => <span
                // style={{ opacity: 0.5 }}
                key={type}
                className={`badge bg-${ingredientTypeColor(type)}-soft ms-2 mb-2 pointer user-select-none`}>
                {t(type) || type} {type === IngredientType.VEGAN && <i className='fe fe-feather' />}
            </span>)
        }
    </>
}

export default IngredientCategoryExplainer;