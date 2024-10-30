import { CustomizableMenuItem } from "data/cucinaTree";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Context, ContextProps } from "store/store";

const StandartIngredients = () => {
    const { state, dispatch } = React.useContext(Context) as ContextProps;

    const selectedProduct: CustomizableMenuItem = state.selected!
    const disabledIngredients = state.selected?.customizations?.disabledIngredients;

    const { t } = useTranslation('common');

    const onSelectCrustAddition = (name) => {
        dispatch({ type: "UPDATE_DISABLED_INGREDIENTS", payload: name });
    }
//Return standard ingredients
    return (
        <div>
            {
                selectedProduct?.standartIngredients && Object.entries(selectedProduct.standartIngredients).map(([name, details]) => {
                    return <span
                        key={name}
                        onClick={() => onSelectCrustAddition({ name })}
                        className={`h3 m-0 pointer bg-dark-soft user-select-none lift badge font-weight-bold mt-2 me-3 ${disabledIngredients?.[name] ? "strike-effect-disable disabled half-opacity" : ""}`}>
                        {details?.name || t(name)}
                    </span>

                })
            }
        </div>
    );
}

export default StandartIngredients;
