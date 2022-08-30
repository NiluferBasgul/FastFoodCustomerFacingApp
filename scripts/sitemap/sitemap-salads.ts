import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function SaladsSitemap(): Promise<boolean> {
    const saladSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.SALADS]).map(([slug]) => slug);
    const result = await menuCategorySitemapGenerate(saladSlugs, MenuCategoryType.SALADS);

    fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.SALADS}.xml`, result, "utf8");
    return Promise.resolve(true);
}

export default SaladsSitemap;