import SinglePizzaPage from "components/Pages/SinglePizzaPage";
import cucinaTree, { CustomizableMenuItem, FoodSlug, initialPizzaCustomizations, MenuCategoryType } from "data/cucinaTree";
import getT from 'next-translate/getT'

// // @ts-ignore
// SinglePizzaPage.getStaticProps = ({ query }) => {
//   const { id, title } = query;

//   return {
//     id,
//     multiple: title,
//   };
// };

export const getStaticPaths = async ({ locales }) => {
    // generate the paths
    // const paths = Object.keys(cucinaTree.mainMenu.pizzas).map((slug) => {
    //     return {
    //         locale: locales[3],
    //         params: { slug } // keep in mind if post.id is a number you need to stringify post.id
    //     }
    // });

    const paths = [] as any[];

    for (const slug in cucinaTree.mainMenu[MenuCategoryType.PIZZAS]) {
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
    const item: CustomizableMenuItem = cucinaTree.mainMenu[MenuCategoryType.PIZZAS][slug];

    try {
        const t = await getT(locale, 'common');
        Object.entries(item.standartIngredients!).forEach(([slug, details]) => {
            const updatedDetails = {
                ...details,
                name: t(slug)
            };

            item.standartIngredients![slug] = updatedDetails;
        });
        
        item.slug = slug as FoodSlug;
        item.customizations = initialPizzaCustomizations;
        item.menuCategory = MenuCategoryType.PIZZAS;

        // item.name = t(slug);
    } catch (err) {
        console.log('pizza menu item translation error', err);
    }

    return {
        props: {
            slug,
            item,
        }
    }
}


export default SinglePizzaPage;
