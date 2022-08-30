import { MenuCategoryType, SupportedLanguages } from "../../data/cucinaTree";

export interface NormativeTemplateConfig {
    menuCategoryType: MenuCategoryType | "ALL";
    language: SupportedLanguages;
    qtyOption: 'raw' | 'parsed'
}

export const normativeTemplateConfig: NormativeTemplateConfig = {
    menuCategoryType: 'ALL',
    language: SupportedLanguages.EN,
    qtyOption: "parsed"
}

export default normativeTemplateConfig