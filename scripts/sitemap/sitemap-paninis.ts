import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function PaninisSitemap(): Promise<boolean> {
    const paniniSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.PANINIS]).map(([slug]) => slug);
    const result = await menuCategorySitemapGenerate(paniniSlugs, MenuCategoryType.PANINIS);

    fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.PANINIS}.xml`, result, "utf8");
    return Promise.resolve(true);
};

export default PaninisSitemap;