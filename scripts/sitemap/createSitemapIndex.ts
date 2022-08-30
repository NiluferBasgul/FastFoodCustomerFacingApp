import { productionUrl } from "../../config/storeConfig";
import fs from "fs";
import globby from "globby";
import prettier from "prettier";

const getDate = new Date().toISOString();

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

export async function createSitemapIndex() {
    const pages = await globby(["public/sitemaps/*.gz"]);

    const sitemapIndex = `
    ${pages
            .map(page => {
                const path = page.replace("public/", "");
                return `
          <sitemap>
            <loc>${`${productionUrl}/${path}`}</loc>
            <lastmod>${getDate}</lastmod>
          </sitemap>`;
            })
            .join("")}
  `;

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapIndex}
    </sitemapindex>
  `;

    //   const formattedSitemap = [formatted(sitemap)];

    fs.writeFileSync("public/sitemap.xml", formatted(sitemap), "utf8");
}


// (async () => {
//     try {
//         await createSitemapIndex()
//     } catch (err) {
//         console.log('errr ', err)
//     }
// })();