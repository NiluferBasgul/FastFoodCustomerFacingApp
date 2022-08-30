import { OrderState } from "data/cucinaTree";
import useTranslation from "next-translate/useTranslation";
import { ProgressBar, Step } from "react-step-progress-bar";

interface ProductTrackingProps {
    allSteps?: OrderState[];
    currentStep?: number;
}

const ProductTracking = (props: ProductTrackingProps) => {

    const { allSteps = Object.values(OrderState), currentStep = 0 } = props;

    const { t } = useTranslation('common');

    return (
        <div className='user-select-none'>
            <p className='bounce-right m-0 p-0 text-end fw-bold justify-content-end fst-italic d-flex align-items-center' style={{ wordSpacing: '2px', fontSize: `2.7vw` }}>
                <i className='text-info fe fe-wind ps-1' style={{ transform: 'rotate(180deg)', display: 'inline-block' }} />
                Fast Food MK HOT <span className='fst-normal'>&nbsp;🔥&nbsp;</span> TRACKER
                <i className='text-danger fe fe-chevrons-right ps-1' />
            </p>
            <div className={currentStep === allSteps.length - 1 ? `product-tracker-centerize` : ``}>
                <ProgressBar
                    filledBackground={currentStep >= allSteps.length - 1 ?
                        "linear-gradient(to right, #5ab681, #356a3f)" :
                        "linear-gradient(to right, #fefb72, #f0bb31)"
                    }
                    percent={currentStep === 0 ? 5 : currentStep / (allSteps.length - 1) * 100}
                >
                    {
                        currentStep === allSteps.length - 1 ?

                            <div className='mt-1'>
                                <div
                                    className={`transitionStep d-flext justify-content-center`}
                                    style={{
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    <p className='m-0 p-0 text-center fst-italic text-white fw-bold'><i className='fe fe-flag' /> DELIVERED <i className='fe fe-flag' /></p>
                                </div>
                            </div>
                            :
                            allSteps.map(step => {
                                return <Step key={step} transition="scale">
                                    {({ accomplished, index }) => (
                                        <div className='mt-1'>
                                            <div
                                                className={`${currentStep === index ? 'bounce pt-4' : ''} transitionStep text-center ${accomplished ? "accomplished" : null}`}
                                                style={{
                                                    fontSize: index === currentStep ? '2.2rem' : '1.4rem'
                                                }}
                                            >
                                                {index === 0 && <i className='fe fe-circle'></i>}
                                                {index === 1 && <i className='fe fe-check-circle'></i>}
                                                {index === 2 && <i className='fe fe-package'></i>}
                                                {index === 3 && <i className='fe fe-truck'></i>}
                                                {index === 4 && <i className='fe fe-flag'></i>}
                                            </div>
                                            <div
                                                className={`mt-1 ${index === currentStep ? 'bounce' : ''}`}
                                                style={{ fontSize: index === currentStep ? 12 : 8 }}
                                            >
                                                <strong>{t(step)}</strong>
                                            </div>
                                        </div>
                                    )}
                                </Step>
                            })}
                </ProgressBar >
            </div>
            {currentStep === allSteps.length - 1 && <h3 className='text-center mt-2'>Have a nice meal!</h3>}
        </div >
    )
}

export default ProductTracking;