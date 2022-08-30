import cucinaTree, { MenuCategoryType } from "../../data/cucinaTree";
import fs from "fs";
import { menuCategorySitemapGenerate } from "./menuCategorySitemapGenerate";
import { sitemapsDir } from "../../config/storeConfig";


async function PizzasSitemap(): Promise<boolean> {
  const pizzaSlugs = Object.entries(cucinaTree.mainMenu[MenuCategoryType.PIZZAS]).map(([slug]) => slug);
  const result = await menuCategorySitemapGenerate(pizzaSlugs, MenuCategoryType.PIZZAS);

  fs.writeFileSync(`${sitemapsDir}/${MenuCategoryType.PIZZAS}.xml`, result, "utf8");
  return Promise.resolve(true);
}

export default PizzasSitemap