import { MenuCategoryType, OrderState, SupportedLanguages } from "../data/cucinaTree";

export const isEmpty = passedObj => {
    return !(
        (passedObj && passedObj === Object(passedObj) && Object.keys(passedObj).length !== 0)
    )
}

export const buildURLQuery = (obj: { [key: string]: string }) =>
    Object.entries(obj)
        .filter(([_, v]) => !!v)
        .map(pair => pair.map(encodeURIComponent).join('='))
        .join('&');

export const orderStateToNumber = (orderState: OrderState): number => {
    let stateNumber = -1;
    Object.values(OrderState).forEach((state, index) => {
        if (state === orderState) stateNumber = index;
    });

    return stateNumber;
}

export const menuCategoryToEmoji = (menuCategory: MenuCategoryType, justOneIcon: boolean = false): string => {
    switch (menuCategory) {
        case MenuCategoryType.DINNERS: return justOneIcon ? '🍽️' : '🍽️ 🥩 🫓 🍟 🥗';
        case MenuCategoryType.PANINIS: return '🥙';
        case MenuCategoryType.PASTAS: return '🍝';
        case MenuCategoryType.PIZZAS: return '🍕';
        case MenuCategoryType.SALADS: return '🥗';
        case MenuCategoryType.SIDES: return '🍟';
        case MenuCategoryType.WRAPS: return '🌯';
        case MenuCategoryType.DRINKS: return '🍹';
        default: return '';
    }
}

export const setCookie = (locale: SupportedLanguages) => {
    if (document?.cookie) {
        document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    }
}

export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

export const isBrowser = (typeof window !== 'undefined') ? true : false;
