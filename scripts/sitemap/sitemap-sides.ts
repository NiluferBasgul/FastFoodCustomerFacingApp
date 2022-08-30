import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function SidesSitemap(): Promise<boolean> {
    const sideSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.SIDES]).map(([slug]) => slug);
    const result = await menuCategorySitemapGenerate(sideSlugs, MenuCategoryType.SIDES);

    fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.SIDES}.xml`, result, "utf8");
    return Promise.resolve(true);
}

export default SidesSitemap;