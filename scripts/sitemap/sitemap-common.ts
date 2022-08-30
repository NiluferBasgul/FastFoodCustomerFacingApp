import { productionUrl, sitemapsDir } from "../../config/storeConfig";
import fs from "fs";
import globby from "globby";
import prettier from "prettier";

const getDate = new Date().toISOString();

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

async function CommonSitemap(): Promise<boolean> {
  const pages = await globby([
    // include
    "pages/*.tsx", // just main root directory static pages will be put in common
    // exclude
    "!pages/**/*.tsx", // exluding deep folder includings because they're dynamic pages
    "!pages/_*.tsx"
  ]);

  const pagesSitemap = `
    ${pages
      .map(page => {
        const path = page
          .replace("pages/", "")
          .replace(".tsx", "")
          .replace(/\/index/g, "");
        const routePath = path === "index" ? "" : path;
        return `
          <url>
            <loc>${productionUrl}/${routePath}</loc>
            <lastmod>${getDate}</lastmod>
          </url>
        `;
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
      ${pagesSitemap}
    </urlset>
  `;

  // const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync(`${sitemapsDir}/common.xml`, formatted(generatedSitemap), "utf8");

  return true;
}


export default CommonSitemap;