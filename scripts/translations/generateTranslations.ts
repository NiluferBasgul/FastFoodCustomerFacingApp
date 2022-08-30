import { SupportedLanguages } from '../../data/cucinaTree';
import fs from 'fs-extra';

const filePath = (lang: string) => `../../locales/${lang}/common`;
const outFilePath = (lang: string) => `locales/${lang}/common`;


(async () => {
    try {
        const results = {};
        Object.values(SupportedLanguages).forEach(async (lang: SupportedLanguages, index) => {
            const inputPath = filePath(lang) + '.ts';
            const outputPath = outFilePath(lang) + '.json';

            const object = await import(inputPath);

            const count = Object.keys(object.default).length
            results[lang] = count;

            await fs.outputJSON(outputPath, object.default);

            if (index === Object.keys(SupportedLanguages).length - 1)
                console.log('success', results)
        });
    } catch (err) {
        console.log('error', err)
    }
})();