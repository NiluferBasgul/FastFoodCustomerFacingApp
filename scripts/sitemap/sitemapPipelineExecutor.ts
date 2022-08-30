import { compressSitemaps } from "./compressSitemaps";
import { createSitemapIndex } from "./createSitemapIndex";
import CommonSitemap from "./sitemap-common";
import DinnersSitemap from "./sitemap-dinners";
import PaninisSitemap from "./sitemap-paninis";
import PastasSitemap from "./sitemap-pastas";
import PizzasSitemap from "./sitemap-pizzas";
import SaladsSitemap from "./sitemap-salads";
import SidesSitemap from "./sitemap-sides";
import WrapsSitemap from "./sitemap-wraps";
import fs from 'fs-extra';
import axios from 'axios';
import { productionUrl } from "../../config/storeConfig";

(async function sitemapPipelineExecutor() {
    const dynamicSitemaps = [
        CommonSitemap(),
        DinnersSitemap(),
        PaninisSitemap(),
        PastasSitemap(),
        PizzasSitemap(),
        SaladsSitemap(),
        SidesSitemap(),
        WrapsSitemap()
    ]

    try {
        console.log('Sitemap Executor Started');
        await fs.emptyDir('public/sitemaps');

        const results = await Promise.allSettled(dynamicSitemaps);
        const successFulOperations = results.filter(res => {
            console.log('Promise Res', res);
            return res.status === 'fulfilled' && res.value
        });

        if (results.length !== successFulOperations.length) {
            console.warn(`${successFulOperations.length} successful out of ${results.length} operations succeded.`);
        }

        compressSitemaps();
        createSitemapIndex();

        console.log('Sitemap Executor Finished', `${successFulOperations.length} of ${results.length}`);
        const result = await axios.get(`http://google.com/ping?sitemap=${productionUrl}/sitemap.xml`);
        console.log('Ping finished for hydrating the Google sitemap index. Status:', result?.status);

    } catch (err) {
        console.error('Error happened', err);
    }
})();