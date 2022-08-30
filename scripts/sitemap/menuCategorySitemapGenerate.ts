import { productionUrl } from "../../config/storeConfig";
import prettier from "prettier";
import { MenuCategoryType } from "data/cucinaTree";

const getDate = new Date().toISOString();

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

export async function menuCategorySitemapGenerate(slugs: string[], menuCategory: MenuCategoryType): Promise<string> {
    const pizzasListSitemap = `
    ${slugs
            .map(slug => {
                return `
                    <url>
                        <loc>${`${productionUrl}/${menuCategory}/${slug}`}</loc>
                        <lastmod>${getDate}</lastmod>
                    </url>`;
            })
            .join("")}
  `;

    const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pizzasListSitemap}
    </urlset>
  `;

    return formatted(generatedSitemap);
}