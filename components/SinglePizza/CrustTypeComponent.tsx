import { getInitialCustomizations, MenuCategoryType, CrustType, HasPrice, IngredientDetails, Size } from "data/cucinaTree"
import React, { useEffect } from "react";
import { Context, ContextProps } from "store/store";
import useTranslation from "next-translate/useTranslation";


const CrustTypeComponent = () => {
    const { t } = useTranslation('common');

    const {
        crustType
    } = getInitialCustomizations(MenuCategoryType.PIZZAS)

    const { dispatch, state } = React.useContext(Context) as ContextProps;
    const selectedCrustType = { ...state?.selected?.customizations?.crustType }
    const size = state.selected?.customizations?.size[0];

    const shouldCrustTypeBeDisabled = (type: CrustType) => size === Size.FAMILY && type !== CrustType.CLASSIC_WHITE


    const setSelectedCrustType = (type) => {
        dispatch({ type: "UPDATE_CRUST_TYPE", payload: type });
    }

    useEffect(() => {
        if (state.selected?.customizations?.size?.[0] === Size.FAMILY) {
            dispatch({ type: "UPDATE_CRUST_TYPE", payload: CrustType.CLASSIC_WHITE });
        }
    }, [state.selected?.customizations?.size])

    const optionCardRenderer = (name: CrustType, details: HasPrice) => {
        return (<div key={name} className={`col-4 ${shouldCrustTypeBeDisabled(name) ? 'half-opacity' : ''}`}>
            <div className="m-2">
                <div
                    onClick={() => setSelectedCrustType(name)}
                    className={`${shouldCrustTypeBeDisabled(name) ? 'not-allowed' : ''} position-relative btn btn-white background_${name.toLowerCase()} w-100 ${selectedCrustType?.[name] ? "active focus" : ""
                        }`}
                >
                    {
                        name === CrustType.GLUTEN_FREE && <div style={{ background: 'url(/vectors/gluten_free.svg) no-repeat', bottom: 0, left: 5, padding: '2vh', opacity: .55 }} className='position-absolute' />
                    }
                    <div className={`top-right`} style={{ position: 'absolute', top: 5, right: 5, left: 'auto' }}>
                        <span style={{ fontSize: '1.2rem' }} className={`fe ${selectedCrustType?.[name] ? 'fe-stop-circle' : 'fe-circle'} `}></span>
                    </div>
                    <div className="d-flex pt-5 justify-content-center">
                        <div className="d-flex align-items-center">
                            <h3>{t(name) || name}</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        {
                            <div className="d-flex align-items-end">
                                <small>{details.price > 0 ? `+${details.price}mkd` : "FREE"}</small>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>)
    }

    return (
        <div className="container-sm">
            <div className="header">
                <div className="header-body py-2">
                    <h5 className="header-pretitle">{t('crustType')}</h5>
                    <h2 className="header-title">{t('selectTheCrustType')}</h2>
                </div>
            </div>
            <div className="btn-group-toggle">
                <div className="row mt-3">
                    {Object.entries(crustType).map(([name, details]) => {
                        return optionCardRenderer(name as CrustType, details!)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CrustTypeComponent