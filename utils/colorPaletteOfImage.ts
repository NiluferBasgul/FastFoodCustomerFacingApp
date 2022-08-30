// ONLY RUNS ON SERVER!

import ColorThief from 'colorthief';
import sliderImages from 'config/sliderImages';
import { resolve } from 'path';
import { randomIndex } from './arrayUtils';


export const colorPaletteOfImage = async (pathToImg: string = './public/images/banners/1.jpg'): Promise<[[number, number, number]] | null> => {

    try {
        const img = resolve(process.cwd(), pathToImg);
        const colors: [[number, number, number]] = await ColorThief.getPalette(img, 5);
        return colors;
    } catch (err) {
        console.log('Error happened while to get color palette of the given img', err);
        return null;
    }
}

export const createSliderImagesWithGardientBackground = async () => {

    const imageWithBackgrounds = [] as any;

    for await (const image of sliderImages) {
        const result = await colorPaletteOfImage(`./public${image}`);

        if (result) {
            const dominant = result[0];
            const randomSecond = result[randomIndex(result)]

            const data = {
                imgSrc: `${image}`,
                dominant: `rgb(${dominant.join(',')})`,
                secondary: `rgb(${randomSecond.join(',')})`,
            }

            imageWithBackgrounds.push(data);
        }
    }

    return imageWithBackgrounds;
}