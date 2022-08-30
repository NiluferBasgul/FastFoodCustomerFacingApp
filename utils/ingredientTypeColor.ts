import { IngredientType } from "data/cucinaTree";

function ingredientTypeColor(ingredientType: IngredientType): string {
    let color = '';
    switch (ingredientType) {
        case IngredientType.CHEESE:
            color = 'warning'; break;
        case IngredientType.PROTEIN:
            color = 'dark'; break;
        case IngredientType.SAUCE:
            color = 'danger'; break;
        case IngredientType.SPICE:
        case IngredientType.VEGAN:
        case IngredientType.VEGGIE:
            color = 'success'; break;
        default: color = 'secondary';
            break;
    }

    return color;
}

export default ingredientTypeColor;