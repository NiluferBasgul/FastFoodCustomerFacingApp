import React from "react";
import { getInitialCustomizations, MenuCategoryType } from "data/cucinaTree";
import { Context, ContextProps } from "store/store";
import styles from './CrustAdditions.module.scss';
import styleVariables from 'styles/index.module.scss';
import useTranslation from "next-translate/useTranslation";


const getStyles = (selectedCrustAdditions, addition) => {
    const { t } = useTranslation('common');

    const styles = {
        // background: `url(/images/crust_sides/${addition.toLowerCase()}.svg) repeat`,
        backgroundSize: 'cover',
        color: `${styleVariables[`${addition.toLowerCase()}_color`]}`
    }

    const style = `${styleVariables[`${addition.toLowerCase()}_color_light`]}`;

    if (!selectedCrustAdditions?.[addition]) {
        styles['backgroundColor'] = style;
    } else {
        delete styles['backgroundColor'];
        styles['color'] = 'white'
    }

    return styles;
}

const CrustAdditions = () => {
    const customizations = getInitialCustomizations(MenuCategoryType.PIZZAS);
    const crustAdditions = customizations?.crustAdditions;

    const { dispatch, state } = React.useContext(Context) as ContextProps;

    const { t } = useTranslation('common')

    const selectedCrustAdditions = state.selected?.customizations?.crustAdditions

    const onSelectCrustAddition = (crust) => {
        dispatch({ type: "UPDATE_CRUST_ADDITIONS", payload: crust })
    }

    return (
        <div className='btn-group-toggle'>
            <div className='row flex-grow-1'>
                {
                    Object.entries(crustAdditions).map(([addition, details]) => {
                        const { price } = details as { price: number }
                        return (
                            <div key={addition} className='col-4 d-flex'>
                                <div className='m-2 d-flex flex-grow-1 align-items-stretch'>
                                    <div id={`crustAddition__${addition.toLowerCase()}`} style={getStyles(selectedCrustAdditions, addition)} onClick={() => onSelectCrustAddition({ [addition]: details })}
                                        className={`${styles.CrustAdditionItem} position-relative btn w-100 d-flex flex-column justify-content-space-between align-items-center p-2 btn-white ${selectedCrustAdditions?.[addition] ? "" : "opacity-25"}`}>
                                        <div className={`top-right`} style={{ position: 'absolute', top: 5, right: 5, left: 'auto' }}>
                                            <span style={{ fontSize: '1.2rem' }} className={`fe ${selectedCrustAdditions?.[addition] ? 'fe-check-circle' : 'fe-circle'} `}></span>
                                        </div>
                                        <div className="d-flex pt-5 justify-content-center">
                                            <div className="d-inline-block align-items-center"><h3 className={`TitleTextEffect__${selectedCrustAdditions?.[addition] ? addition.toLowerCase() : 'initial'}`} style={{ whiteSpace: 'pre-wrap' }}>{t(addition) || addition.split(/[_]+/).join(' ')}</h3></div>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {
                                                <div className="d-flex align-items-end">
                                                    <small style={selectedCrustAdditions?.[addition] ? {} : { color: `${styleVariables[`${addition.toLowerCase()}_color`]}` }} className={`${selectedCrustAdditions?.[addition] ? `text-white ` : ``} fw-bold`}>{price as number > 0 ? `+${price}mkd` : t('free')}</small>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })

                }
            </div>
        </div >
    );
};

export default CrustAdditions;
