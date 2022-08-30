import cucinaTree, { MenuCategoryType, NormedMenuItem } from "../../data/cucinaTree";
import normativeGenerator from "./normativeGenerator";
import normativeTemplateConfig from './config';

const normedMenuItemsRenderer = (normedMenuItems: NormedMenuItem): string => {
    return `${Object.entries(normedMenuItems).map(([_, details]) => {
        return `\n### ${details.name}: \n` + Object.entries(details.normatives).map(([normSlug, qty], index) => {
            return `\t ${index + 1}. ${normSlug}: ${qty}`
        }).join('\n')
    }).join('\n \n')
        }`
}

const allMenuCategoriesNormativesRenderer = async (): Promise<string> => {
    const { language, qtyOption } = normativeTemplateConfig;

    const allNormatives = await Promise.all(Object.entries(cucinaTree.mainMenu).map(async ([menu, details]) => {
        return `\n## ${(details?.name || menu).toUpperCase()} \n
        ${normedMenuItemsRenderer(await normativeGenerator(menu as MenuCategoryType, qtyOption, language))} 
    `;
    }));

    return allNormatives.join('\n----------------------------------------------\n');
}

const normativesTemplate = (async () => {
    const { menuCategoryType, language, qtyOption } = normativeTemplateConfig;

    let template = `# Cucina Pizza By Design Main Menu Normatives (Нормативи на Кучина Пица ДООЕЛ) \n`


    if (menuCategoryType === 'ALL') {
        template += `\n${await allMenuCategoriesNormativesRenderer()}`
    }
    else {
        template += `\n## ${menuCategoryType.toUpperCase()}`
        template += `\n${normedMenuItemsRenderer(await normativeGenerator(menuCategoryType, qtyOption, language))} \n`
    }


    return template;
})();



export default normativesTemplate;