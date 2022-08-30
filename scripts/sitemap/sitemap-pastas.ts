import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function PastasSitemap(): Promise<boolean> {
    const pastaSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.PASTAS]).map(([slug]) => slug);
    const result = await menuCategorySitemapGenerate(pastaSlugs, MenuCategoryType.PASTAS);

    fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.PASTAS}.xml`, result, "utf8");
    return Promise.resolve(true);
}

export default PastasSitemap;