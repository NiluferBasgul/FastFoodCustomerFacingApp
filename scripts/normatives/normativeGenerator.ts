import cucinaTree, { CrustType, IngredientType, MenuCategoryType, MenuItem, SupportedLanguages, NormedMenuItem, getWrapperIngredient, MenuCategoryWrapperIngredient } from '../../data/cucinaTree';
import Qty from 'js-quantities';

const genericQty = Qty("49g")

const PIZZA_CURST_QTY = Qty("230g")
const PIZZA_SAUCE_QTY = Qty("55g")
const PIZZA_CHEESE_QTY = Qty("200g")
const PIZZA_VEGGIE_QTY = Qty("100g")
const PIZZA_SPICE_QTY = Qty("20g")
const PIZZA_PROTEIN_QTY = Qty("100g")

const WRAP_QTY = Qty("1")
const WRAP_SAUCE_QTY = Qty('20g')
const WRAP_CHEESE_QTY = Qty("30g")
const WRAP_VEGGIE_QTY = Qty("30g")
const WRAP_PROTEIN_QTY = Qty("70g")
const WRAP_SPICE_QTY = Qty("10g")

const PANINI_BREAD_QTY = Qty("1")
const PANINI_SAUCE_QTY = Qty("30g")
const PANINI_CHEESE_QTY = Qty("40g")
const PANINI_VEGGIE_QTY = Qty("60g")
const PANINI_PROTEIN_QTY = Qty("120g")
const PANINI_SPICE_QTY = Qty("15g")

const PASTA_SAUCE_QTY = Qty("100g")
const PASTA_CHEESE_QTY = Qty("60g")
const PASTA_VEGGIE_QTY = Qty("30g")
const PASTA_PROTEIN_QTY = Qty("100g")
const PASTA_SPICE_QTY = Qty("15g")

const SALAD_SAUCE_QTY = Qty("40g")
const SALAD_CHEESE_QTY = Qty("65g")
const SALAD_VEGGIE_QTY = Qty("80g")
const SALAD_PROTEIN_QTY = Qty("80g")
const SALAD_SPICE_QTY = Qty("25g")

const DINNER_SAUCE_QTY = Qty("100g")
const DINNER_CHEESE_QTY = Qty("100g")
const DINNER_VEGGIE_QTY = Qty("70g")
const DINNER_PROTEIN_QTY = Qty("250g")
const DINNER_SPICE_QTY = Qty("30g")


const wrapperIngredientQty = (wrapperIgredient: MenuCategoryWrapperIngredient): Qty | null => {
    switch (wrapperIgredient) {
        case MenuCategoryWrapperIngredient.CRUST: return PIZZA_CURST_QTY;
        case MenuCategoryWrapperIngredient.WRAP: return WRAP_QTY;
        case MenuCategoryWrapperIngredient.PANINI: return PANINI_BREAD_QTY;
        default: return null;
    }
}

const QTYs = {
    genericQty,

    PIZZA_CURST_QTY,
    PIZZA_SAUCE_QTY,
    PIZZA_CHEESE_QTY,
    PIZZA_VEGGIE_QTY,
    PIZZA_PROTEIN_QTY,
    PIZZA_SPICE_QTY,

    WRAP_SAUCE_QTY,
    WRAP_CHEESE_QTY,
    WRAP_VEGGIE_QTY,
    WRAP_PROTEIN_QTY,
    WRAP_SPICE_QTY,

    PANINI_SAUCE_QTY,
    PANINI_CHEESE_QTY,
    PANINI_VEGGIE_QTY,
    PANINI_PROTEIN_QTY,
    PANINI_SPICE_QTY,

    PASTA_SAUCE_QTY,
    PASTA_CHEESE_QTY,
    PASTA_VEGGIE_QTY,
    PASTA_PROTEIN_QTY,
    PASTA_SPICE_QTY,

    SALAD_SAUCE_QTY,
    SALAD_CHEESE_QTY,
    SALAD_VEGGIE_QTY,
    SALAD_PROTEIN_QTY,
    SALAD_SPICE_QTY,

    DINNER_SAUCE_QTY,
    DINNER_CHEESE_QTY,
    DINNER_VEGGIE_QTY,
    DINNER_PROTEIN_QTY,
    DINNER_SPICE_QTY
}


const ingredientTypeToNormative = (category: MenuCategoryType, ingredientType: IngredientType) => {

    switch (ingredientType) {
        case IngredientType.SAUCE:
        case IngredientType.CHEESE:
        case IngredientType.VEGGIE:
        case IngredientType.SPICE:
        case IngredientType.PROTEIN:
            return QTYs[`${category.toUpperCase()}_${ingredientType}_QTY`] || genericQty;

        case IngredientType.VEGAN:
        default: return genericQty
    }
}



const normativeGenerator = async (menuCategory: MenuCategoryType, options: 'raw' | 'parsed' = 'raw', locale: SupportedLanguages = SupportedLanguages.EN): Promise<NormedMenuItem> => {

    const t = (await import(`../../locales/${locale}/common`)).default

    const menuItemWithNormatives = {
    }

    Object.entries(cucinaTree.mainMenu[menuCategory]).forEach(([menuItemSlug, menuItemDetails]) => {
        if (
            menuItemDetails?.standartIngredients
        ) {
            Object.entries(menuItemDetails?.standartIngredients).forEach(([ingredientSlug, ingredientDetails]) => {
                menuItemWithNormatives[menuItemSlug] = {
                    name: t[menuItemSlug],
                    ...menuItemWithNormatives[menuItemSlug],
                    normatives: {
                        ...(menuItemWithNormatives?.[menuItemSlug]?.normatives || {}),
                        [t[ingredientSlug]]:
                            options === 'parsed' ?
                                ingredientTypeToNormative(menuCategory, (ingredientDetails as any)?.category as IngredientType).toString() :
                                ingredientTypeToNormative(menuCategory, (ingredientDetails as any)?.category as IngredientType)
                    }
                }
            });

            const wrapperIngredient = getWrapperIngredient(menuCategory);

            if (wrapperIngredient === null) return;
            
            menuItemWithNormatives[menuItemSlug] = {
                ...menuItemWithNormatives[menuItemSlug],
                normatives: {
                    // name: t[]menuItemSlug),
                    ...(menuItemWithNormatives?.[menuItemSlug]?.normatives || {}),
                    [t[wrapperIngredient] || wrapperIngredient]:
                        options === 'parsed' ?
                            wrapperIngredientQty(wrapperIngredient)?.toString() :
                            wrapperIngredientQty(wrapperIngredient)
                }
            }
        }

    });

    return menuItemWithNormatives;
}

export default normativeGenerator;


