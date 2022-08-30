import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function DinnersSitemap(): Promise<boolean> {
    const dinnerSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.DINNERS]).map(([slug]) => slug);
    const result = await menuCategorySitemapGenerate(dinnerSlugs, MenuCategoryType.DINNERS);

    fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.DINNERS}.xml`, result, "utf8");
    return Promise.resolve(true);
}

export default DinnersSitemap;