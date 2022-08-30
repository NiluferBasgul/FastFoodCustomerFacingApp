import SingleBaseProduct from "components/SingleBaseProduct";
import cucinaTree, { FoodSlug, initialBaseCustomizations, initialPizzaCustomizations, MenuCategoryType } from "data/cucinaTree";
import getT from "next-translate/getT";

export const getStaticPaths = async ({ locales }) => {
    const paths = [] as any[];

    for (const slug in cucinaTree.mainMenu[MenuCategoryType.DINNERS]) {
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
    const item = cucinaTree.mainMenu[MenuCategoryType.DINNERS][slug as FoodSlug];
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
            item.slug = slug as FoodSlug;
            item.menuCategory = MenuCategoryType.DINNERS;
            item.customizations = initialBaseCustomizations;
        }
    } catch (err) {
        console.log('dinners menu item translation error', err);
    }

    return {
        props: {
            slug,
            item,
        }
    }
}

export default SingleBaseProduct;
