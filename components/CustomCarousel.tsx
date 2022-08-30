import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageLoad from "./Utils/ImageLoad";
import styles from "./CustomCarousel.module.scss";
import sliderImages from "config/sliderImages";
import LunchAndBreakfastSection from "./Pages/Home/LunchAndBreakfastSection";
// const images = [
//     "/images/slider/slider-2.jpg",
//     "/images/slider/4.webp",
//     "/images/slider/5.jpg"
// ];

// style={{ userSelect: 'none', verticalAlign: 'middle', maxWidth: '100%' }}

interface CustomCarouselProps {
    imagesWithGradientBackgrounds: any;
}

const CustomCarousel = (props: CustomCarouselProps) => {

    const [intervalz, setIntervalz] = useState(3000); //initial state here represents the interval for first image.

    const onChange = (_, item) => {
        setIntervalz(item.props["data-interval"]);
    };

    // const customRenderItem = (item: React.ReactNode, options?: { isSelected: boolean }): React.ReactNode => {
    //     return item
    // }

    return (
        <div className={`${styles.CustomCarousel} user-select-none`}>
            <Carousel
                showStatus={false}
                showIndicators={false}
                onChange={onChange}
                // autoPlay
                infiniteLoop={true}
                interval={intervalz}
                className={styles.Container}
                showThumbs={false}
                renderArrowNext={(onNext) => (
                    <div onClick={onNext} className={`${styles.next}`} >
                        <i className='fe fe-chevron-right'></i>
                    </div>
                )}

                renderArrowPrev={(onPrev) => (
                    <div onClick={onPrev} className={`${styles.prev}`} >
                        <i className='fe fe-chevron-right'></i>
                    </div>
                )}
            // renderItem={customRenderItem}
            >
                <LunchAndBreakfastSection />

                {
                    (
                        props.imagesWithGradientBackgrounds.map((image) => {
                            return <div key={image.imgSrc} className='d-flex align-items-center' style={{ background: `linear-gradient(180deg, ${image.dominant} 0%, ${image.secondary} 100%)`, height: '100%', width: '100%' }}>
                                <ImageLoad className='align-self-start' key={image.imgSrc} data-interval={5000} placeholder={`./public${image.imgSrc}`} src={image.imgSrc} />
                            </div>
                        }
                        )
                    )
                }
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
