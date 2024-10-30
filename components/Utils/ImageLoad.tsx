import React, { useState, useEffect } from 'react';
import compressedImages from "../../compressedImages";

interface ImageLoadProps {
    src?: string;
    placeholder?: string;
    alt?: string;
    className?: string;
    defaultSrc?: string;
}

const DEFAULT_IMAGE_PATH = '/images/menu/pizza/default_one.png'

const ImageLoad = React.memo(({
    src = '',
    placeholder = './public/images/menu/pizza/bbq-chicken-pizza.jpg',
    alt = "",
    className = "",
    defaultSrc
}: ImageLoadProps) => {

    const onError = () => {
        setLoading(false);
        updateSrc(defaultSrc || DEFAULT_IMAGE_PATH);
    };

    const [loading, setLoading] = useState(true);
    const [currentSrc, updateSrc] = useState(compressedImages[placeholder]);

    useEffect(() => {
        // start loading original image
        const imageToLoad = new Image();
        imageToLoad.src = src;
        imageToLoad.onload = () => {
            // When image is loaded replace the src and set loading to false
            setLoading(false);
            updateSrc(src);
        }

        imageToLoad.onerror = () => {
            setLoading(false);
            updateSrc(DEFAULT_IMAGE_PATH)
        };
    }, [src])

    return (
        <>
            <img
                src={currentSrc}
                style={{
                    opacity: loading ? 0.6 : 1,
                    filter: loading ? `blur(5px)` : '',
                    transition: "opacity .17s linear"
                }}
                alt={alt}
                onError={onError}
                className={className}
            />
        </>
    )
});

export default ImageLoad;
