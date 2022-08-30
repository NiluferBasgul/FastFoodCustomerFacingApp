import { IngredientType, StandartIngredients } from "data/cucinaTree";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "react-feather"
import Modal from 'react-modal';
import { Context, ContextProps } from "store/store";
import ingredientTypeColor from "utils/ingredientTypeColor";
import styles from './ExtraIngredients.module.scss';

Modal.setAppElement('#__next')

const customStyles = {
    content: {
        top: '22.5%',
        right: '7%',
        left: '7%',
        backgroundColor: 'transparent',
        border: 0,
        overflow: 'hidden',
        padding: 0,
        zIndex: 1001
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000
    }
};

const ExtraIngredients = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const { dispatch, state } = React.useContext(Context) as ContextProps;
    const extraIngredients = state.selected?.customizations?.extraIngredients

    const { t } = useTranslation('common')


    useEffect(() => {
        document.body.style.overflow = 'unset';

        if (modalIsOpen === true) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => { // wait until saveRef attachs refs
                Object.entries(extraIngredients!).forEach(([k]) => {
                    if (self[k]?.checked !== null || self[k]?.checked !== undefined) self[k].checked = true
                })
            }, 0)
        }

    }, [modalIsOpen])


    const self = useRef({}).current
    const saveRef = key => r => self[key] = r

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const initialIngredients = { ...StandartIngredients };

    const onSelectIngredient = (ingredient: string, details: any) => {
        self[ingredient].checked = !extraIngredients?.[ingredient]

        const selectedIngredient = {
            [ingredient]:
                { ...details }
        }

        dispatch({ type: "UPDATE_EXTRA_INGREDIENTS", payload: selectedIngredient })
    }

    const modal = () => (<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <div className={`card overflow-auto ${styles.ExtraIngredientsContainer} mb-5`}>
            <div className={`${styles.ExtraIngredients}`}>
                {Object.entries(initialIngredients).map(([key, value]) => {
                    return <React.Fragment key={key}>
                        <div onClick={() => onSelectIngredient(key, value)} className={`form-check d-flex justify-content-between align-items-center ${styles.ingredientContainer} ${extraIngredients?.[key] ? 'bg-success color-white' : ''}`}>
                            <div>
                                <input ref={saveRef(key)} className={`form-check-input ${styles.CustomSize}`} type="checkbox" id={key} />
                                <label className={`form-check-label ${styles.Name}`}>{value?.name || t(key) || key}</label>
                            </div>
                            <div className={`${styles.Price} badge bg-soft-secondary`}>
                                {value?.price}mkd
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>
                })}
            </div>
        </div>
        <div className="d-grid gap-2">
            <button onClick={() => closeModal()} className='h1 btn font-weight-bold btn-primary'>OK</button>
        </div>
    </Modal>)

    const typedIngredientRendeer = (ingredient: string, details: any) => <span
        key={ingredient}
        className={`badge bg-${ingredientTypeColor(details.category as IngredientType)}-soft ms-3 pointer`}>
        {details?.name || t(ingredient) || ingredient} {details?.category === IngredientType.VEGAN && <i className='fe fe-feather' />}
    </span>

    const selectedIngredientsRenderer = () => (
        <div className='row mb-3'>
            <div className='col'>
                {
                    Object.entries(extraIngredients!).map(([k, v]) => typedIngredientRendeer(k, v))
                }
            </div>
        </div>
    )

    return (
        <>
            {modal()}
            {extraIngredients && selectedIngredientsRenderer()}
            <div onClick={() => openModal()} className={`input-group input-group-merge pointer mb-3`}>
                <div className="form-control form-control-appended pointer d-flex align-items-center" placeholder={`${t`addExtraIngredients`}`} >
                    <small className='h3 p-0 m-0 text-primary text-dark'>{t`addExtraIngredients`}</small>
                </div>

                <div className="input-group-append">
                    <div className="input-group-text">
                        <ChevronDown />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExtraIngredients