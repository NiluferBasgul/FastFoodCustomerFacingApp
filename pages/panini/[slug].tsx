import SingleBaseProduct from "components/SingleBaseProduct";
import cucinaTree, { FoodSlug, initialBaseCustomizations, initialPizzaCustomizations, MenuCategoryType } from "data/cucinaTree";
import getT from "next-translate/getT";

export const getStaticPaths = async ({ locales }) => {
    const paths = [] as any[];

    for (const slug in cucinaTree.mainMenu[MenuCategoryType.PANINIS]) {
        for (const locale of locales) {
            const path = {
                locale,
                params: { slug }
            }

            paths.push(path);
        }
    }

    return {
        paths,
        fallback: false
        // fallback: true
    }
}

export const getStaticProps = async ({ params: { slug }, locale }) => {
    const item = cucinaTree.mainMenu[MenuCategoryType.PANINIS][slug as FoodSlug];
    try {
        const t = await getT(locale, 'common');
        Object.entries(item?.standartIngredients!).forEach(([slug, details]) => {
            const updatedDetails = {
                ...details,
                name: t(slug)
            };

            if (item) {
                item.standartIngredients![slug] = updatedDetails;
            }

        });
        
        if (item) {
            item.menuCategory = MenuCategoryType.PANINIS;
            item.slug = slug as FoodSlug;
            item.customizations = initialBaseCustomizations;
        }
    } catch (err) {
        console.log('panini menu item translation error', err);
    }

    return {
        props: {
            slug,
            item,
        }
    }
}

export default SingleBaseProduct;
