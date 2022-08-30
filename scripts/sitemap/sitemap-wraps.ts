import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function WrapsSitemap(): Promise<boolean> {
  const pizzaSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.WRAPS]).map(([slug]) => slug);
  const result = await menuCategorySitemapGenerate(pizzaSlugs, MenuCategoryType.WRAPS);

  fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.WRAPS}.xml`, result, "utf8");
  return Promise.resolve(true);
}

export default WrapsSitemap;