import { Menu } from "react-feather";

export enum Size {
    REGULAR = "REGULAR",
    FAMILY = "FAMILY"
}

export enum SupportedLanguages {
    EN = 'en',
    AL = 'al',
    MK = 'mk',
    TR = 'tr'
}

export enum PaymentStatus {
    NOT_PAID = "NOT_PAID",
    PAID = "PAID",
    FAILED = "FAILED"
}

export enum PaymentType {
    CREDIT_CARD = "CREDIT_CARD",
    CASH = "CASH"
}

export enum OrderType {
    TAKE_AWAY = "TAKE_AWAY",
    DELIVERY = "DELIVERY"
}

export interface OrderSet {
    [id: string]: CustomizableMenuItem;
}

export interface Orders {
    orders: OrderSet
}

export interface Customer {
    phoneNumber: string;
    address: string;
    email?: string;
}

export interface OrderDetails extends Customer {
    terms: boolean,
    protectTheEnvironment: boolean;
    paymentType: PaymentType
    comment?: string;
    deliveryTime: string;
    orderType: OrderType
}

export interface CompleteOrder extends OrderDetails {
    orderItems: CustomizableMenuItem[];
    orderState?: OrderState,
    globalTotal: number;
}

export interface PurchaseOrder extends CompleteOrder {
    id: string;
    transactionId: string;
    createdAt: Date;
    updatedAt: Date;
    userId?: number;
    isDeleted: boolean;
    paymentStatus: PaymentStatus;
}

export enum OrderState {
    NEW = 'NEW',
    APPROVED = 'APPROVED',
    PREPARED = 'PREPARED',
    TAKED_OUT = 'TAKED_OUT',
    DELIVERED = 'DELIVERED'
}

interface Coupon {
    type: CouponType
    rate: number;
    availableUntil: Date
    availableMenus: MenuCategoryType[],
}

enum CouponType {
    DISCOUNT_PERCENTAGE = "DISCOUNT_PERCENTAGE",
    DISCOUNT_AMOUNT = "DISCOUNT_AMOUNT",
    FREE_DELIVERY = "FREE_DELIVERY"
}

interface Chargable {
    price: number;
}

interface SEOFriendly {
    slug?: FoodSlug;
}

// interface SizeOption extends Chargable {
//     size: Size;
// }

export enum CrustType {
    CLASSIC_WHITE = 'CLASSIC_WHITE',
    GLUTEN_FREE = 'GLUTEN_FREE',
    WHOLE_WHEAT = 'WHOLE_WHEAT'
}

export enum MenuCategoryType {
    PIZZAS = 'pizza',
    SALADS = 'salad',
    PANINIS = 'panini',
    WRAPS = 'wrap',
    DINNERS = 'dinner',
    PASTAS = 'pasta',
    SIDES = 'side',
    DRINKS = 'drink'
}

export enum CrustAdditionType {
    SESAME_SIDE = "SESAME_SIDE",
    PARMESAN_SIDE = "PARMESAN_SIDE",
    OLIVE_OIL_GARLIC_SIDE = "OLIVE_OIL_GARLIC_SIDE",
    CHILLY_PEPPERS_SIDE = "CHILLY_PEPPERS_SIDE",
    FRESH_OREGANO_SIDE = "FRESH_OREGANO_SIDE",
    GARLIC_BUTTER_SIDE = "GARLIC_BUTTER_SIDE"
}

export enum Sauces {
    BBQ = 'BBQ',
    ALFREDO = 'ALFREDO',
    MARINARA = 'MARINARA',
    PESTO = 'PESTO',
    TERIYAKI = 'TERIYAKI',
    RANCH = 'RANCH',
    THOMY_MAYO = 'THOMY_MAYO',
    HEINZ_KETCHUP = 'HEINZ_KETCHUP',
    TRUFFLE_OIL = 'TRUFFLE_OIL',
    SPICY_MARINARA = 'SPICY_MARINARA',
    HOT_SAUCE = 'HOT_SAUCE',
}

// type SingleSauce = { [key in Sauces]?: key }

// interface ExtraSauce extends Chargable {
//     sauce: Sauce;
// }


export interface HasNormative {
    normatives: { [key: string]: string }
}

export type NormedMenuItem = MenuItem & HasNormative | {};

export enum IngredientType {
    SAUCE = "SAUCE",
    CHEESE = "CHEESE",
    PROTEIN = "PROTEIN",
    VEGGIE = "VEGGIE",
    VEGAN = "VEGAN",
    SPICE = "SPICE"
}

export enum KEYS {
    BASIL = "BASIL",
    ONION = "ONION",
    ROASTED_CHICKEN = "ROASTED_CHICKEN",
    MARINARA = "MARINARA",
    MOZZARELLA = "MOZZARELLA",
    FRESH_MOZZARELLA = "FRESH_MOZZARELLA",
    BBQ_SAUCE = "BBQ_SAUCE",
    CRISPY_CHICKEN = "CRISPY_CHICKEN",
    LETTUCE = "LETTUCE",
    TOMATO = "TOMATO",
    CORN = "CORN",
    SOUR_CREAM = "SOUR_CREAM",
    PEPPER_SPICY_SAUCE = "PEPPER_SPICY_SAUCE",
    SUN_DRIED_TOMATOES = "SUN_DRIED_TOMATOES",
    PROSCIUTTO = "PROSCIUTTO",
    HAM = "HAM",
    SALAMI = "SALAMI",
    PEPPERONI = "PEPPERONI",
    AVOCADO = "AVOCADO",
    GORGONZOLA = "GORGONZOLA",
    FETA_CHEESE = "FETA_CHEESE",
    ROMANO_CHEESE = "ROMANO_CHEESE",
    PARMESAN = "PARMESAN",
    OREGANO = "OREGANO",
    ALFREDO_SAUCE = "ALFREDO_SAUCE",
    PESTO = "PESTO",
    VEGAN_MOZZARELLA = "VEGAN_MOZZARELLA",
    CHEDDAR = "CHEDDAR",
    TOFU = "TOFU",
    HOMEMADE_TUNA_MIX = "HOMEMADE_TUNA_MIX",
    OIL_AND_VINEGAR = "OIL_AND_VINEGAR",
    ROASTED_RED_PEPPER = "ROASTED_RED_PEPPER",
    MAYO = "MAYO",
    ITALIAN_DRESSING = "ITALIAN_DRESSING",
    SMOKED_KASHKAVAL = "SMOKED_KASHKAVAL",
    CEASER_DRESSING = "CEASER_DRESSING",
    ARUGULA = "ARUGULA",
    KALAMATA_OLIVES = "KALAMATA_OLIVES",
    E_V_O_O = "E_V_O_O",
    BALSAMIC = "BALSAMIC",
    MIXED_GREENS = "MIXED_GREENS",
    RED_ONION = "RED_ONION",
    CUCINA_SIGNATURE_SAUCE = "CUCINA_SIGNATURE_SAUCE",
    GOAT_CHEESE = "GOAT_CHEESE",
    CRANBERRIES = "CRANBERRIES",
    CRUSHED_ALMONDS = "CRUSHED_ALMONDS",
    ALMONDS_AND_CREAMY_BALSAMIC = "ALMONDS_AND_CREAMY_BALSAMIC",
    HONEY_MUSTERD_AND_MAYO = "HONEY_MUSTERD_AND_MAYO",
    CROUTONS_AND_SIDE_HOMEMADE_GARLIC_BREAD = "CRUTONS_AND_SIDE_HOMEMADE_GARLIC_BREAD",
    CREAMY_CEASAR_DRESSING = "CREAMY_CEASER_DRESSING",
    HOUSE_GREENS = "HOUSE_GREENS",
    SHAVED_BEETS = "SHEVED_BEETS",
    DRIED_CARNBERRIES = "DRIED_CARNERRIES",
    GREEK_DRESSING = "GREEK_DRESSING",
    CUCUMBER = "CUCUMBER",
    FRESH_BASIL = "FRESH_BASIL",
    OLIVE_OIL = "OLIVE_OIL",
    SEA_SALT = "SEA_SALT",
    CROTON = "CROTON",
    ROASTED_HOT_PEPPER = "ROASTED_HOT_PEPPER",
    FRESH_PEPPER = "FRESH_PEPPER",
    CHICKPEAS = "CHICKPEAS",
    FRESH_MIXED_CHEESE = "FRESH_MIXED_CHEESE",
    BOILED_EGG = "BOILED_EGG",
    OLIVE = "OLIVE",
    HONEY_MUSTARD = "HONEY_MUSTARD",
    CARAMELIZED_ONION = "CARAMELIZED_ONION",
    TRUFFLE_OIL = "TRUFFLE_OIL",
    ROASTED_PINEAPPLE = "ROASTED_PINEAPPLE",
    PICKLED_JALAPENOS = "PICKLED_JALAPENOS",
    TOMATOES_SAUCE = "TOMATOES_SAUCE",
    MUSHROOMS = "MUSHROOMS",
    HEINZ_KETCHUP = "HEINZ_KETCHUP",
    EGG = "EGG",
    SESAME_SEEDS = "SESAME_SEEDS",
    OLIVE_OIL_AND_GARLIC = "OLIVE_OIL_AND_GARLIC",
    SPINACH = "SPINACH",
    CURRY_MARINARA_SAUCE = "CURRY_MARINARA_SAUCE",
    PINEAPPLE = "PINEAPPLE",
    TERIYAKI_SAUCE = "TERIYAKI_SAUCE",
    CREAMY_CURRY = "CREAMY_CURRY",
    GARLIC_BUTTER = "GARLIC_BUTTER",
    BROCCOLI = "BROCCOLI",
    FRESH_PARSLEY_LEAVES = "FRESH_PARSLEY_LEAVES",
    RICCOTTA = "RICCOTTA",
    HOMEMADE_BREADED_CHICKEN_FILLET = "HOMEMADE_BREADED_CHICKEN_FILLET",
    TOPPED_OF_CHEESE = "TOPPED_OF_CHEESE"
}

export enum FoodSlug {
    // Pizzas Start
    THE_NEW_YORKER_PIZZA = 'the-new-yorker-pizza',
    CLASSIC_CHEESE_PIZZA = 'classic-cheese-pizza',
    POLLO_ALLA_GORGONZOLA_PIZZA = 'pollo-alla-gorgonzola-pizza',
    PROSCIUTTO_PIZZA = 'prosciutto-pizza',
    LA_BIANCA_PIZZA = 'la-bianca-pizza',
    BBQ_CHICKEN_PIZZA = 'bbq-chicken-pizza',
    THE_REAL_TUNA_PIZZA = 'the-real-tuna-pizza',
    CHICKEN_PESTO_PIZZA = 'chicken-pesto-pizza',
    HAWAIIAN_PIZZA = 'hawaiian-pizza',
    BREAKFAST_PIZZA = 'breakfast-pizza',
    CAPRICOZA_PIZZA = 'capricoza-pizza',
    QUATTRO_FORMAGGIO_PIZZA = 'quattro-formaggio-pizza',
    WHITE_CHICKEN_CURRY_PIZZA = 'white-chicken-curry-pizza',
    RED_CHICKEN_CURRY_PIZZA = 'red-chicken-curry-pizza',
    MUCH_MEAT_PIZZA = 'much-meat-pizza',
    PEPPERONI_PIZZA = 'pepperoni-pizza',
    THE_FARMERS_MARKET_PIZZA = 'the-farmers-market-pizza',
    CHICKEN_TERIYAKI = 'the-chicken-teriyaki-pizza',
    // Pizzas End

    // Wraps Start
    THE_GOAT_WRAP = 'the-goat-wrap',
    CALIFORNIAN_WRAP = 'californian-wrap',
    CHICKEN_MILANESE_WRAP = 'chicken-milanese-wrap',
    CAPRESE_WRAP = 'caprese-wrap',
    CHICKEN_CAESAR_WRAP = 'chicken-caesar-wrap',
    THE_TUNA_WRAP = 'the-tuna-wrap',
    EL_DIABLO_WRAP = 'el-diablo-wrap',
    ITALIANO_WRAP = 'italiano-wrap',
    // Wraps End

    //s Start
    THE_GOAT_PANINI = 'the-goat-panini',
    CALIFORNIAN_PANINI = 'californian-panini',
    CHICKEN_MILANESE_PANINI = 'chicken-milanese-panini',
    CAPRESE_PANINI = 'caprese-panini',
    CHICKEN_CAESAR_PANINI = 'chicken-caesar-panini',
    THE_TUNA_PANINI = 'the-tuna-panini',
    EL_DIABLO_PANINI = 'el-diablo-panini',
    ITALIANO_PANINI = 'italiano-panini',
    // Paninis End

    // Salads Start
    CAESAR_SALAD = 'caesar-salad',
    BEETS_AND_GOATS_SALAD = 'beats-and-goats-salad',
    GREEK_SALAD = 'greek-salad',
    TOMATOES_AND_MOZZARELLA = 'tomatoes-and-mozzarella',
    CUCINA_SALAD = 'cucina-salad',
    DA_LIR_SALAD = 'da-lir-salad',
    // Salads End

    // Pastas Start
    CHICKEN_PARM_PASTA = 'chicken-parm-pasta',
    LOVE_TIE_PASTA = 'love-tie-pasta',
    CHICKEN_AND_BROCCOLI_PASTA = 'chicken-and-broccoli-pasta',
    BAKED_ZITI_PASTA = 'baked-ziti-pasta',
    PENNE_ALLA_GORGONZOLA_PASTA = 'penne-alla-gorgonzola-pasta',
    PASTA_ALLA_CURRY = 'pasta-alla-curry',
    CHICKEN_ALFREDO_PASTA = 'chicken-alfredo-pasta',
    // Pastas End

    // Dinners Start
    CHICKEN_PARM_DINNER = 'chicken-parm-dinner',
    CURRY_CHICKEN_DINNER = 'curry-chicken-dinner',
    ALFREDO_CHICKEN_DINNER = 'alfredo-chicken-dinner',
    CRISPY_CHICKEN_DINNER = 'crispy-chicken-dinner',
    // Dinners End

    // Sides Start
    FRENCH_FRIES = "french-fries",
    CHEESY_FRIES = "cheesy-fries",
    PIZZA_FRIES = "pizza-fries",
    X6_CHICKEN_WINGS = '6x-chicken-wings',
    X12_CHICKEN_WINGS = '12x-chicken-wings',
    // Sides End

    // Soda Drinks Start
    COCA_COLA_0_5L = 'coca-cola-0-5l',
    FANTA_0_5L = 'fanta-0-5l',
    // Soda Drinks End

    // Juices & Smoothies Start
    FRESHLY_SQUEEZED_ORANGE_JUICE = 'freshly-squeezed-orange-juice',
    // Juices & Smoothies End

    // Desserts Start
    THE_REAL_CHEESECAKE = 'the-real-cheesecake',
    BROWNY = 'browny'
    // Desserts End
}

// @ts-ignore
interface Category extends Chargable {
    category: IngredientType
}

export const StandartIngredients: EnhancedIngredients = {
    [KEYS.RICCOTTA]: {
        category: IngredientType.CHEESE,
        price: 30
    },
    [KEYS.FRESH_PARSLEY_LEAVES]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.GARLIC_BUTTER]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.BROCCOLI]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.FRESH_BASIL]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.ALMONDS_AND_CREAMY_BALSAMIC]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.MIXED_GREENS]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.OLIVE]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.BOILED_EGG]: {
        category: IngredientType.PROTEIN,
        price: 30
    },
    [KEYS.CROTON]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.CUCUMBER]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.ITALIAN_DRESSING]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.ROASTED_RED_PEPPER]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.MAYO]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.PEPPER_SPICY_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.SOUR_CREAM]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.OIL_AND_VINEGAR]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.CEASER_DRESSING]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.E_V_O_O]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.CUCINA_SIGNATURE_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.HONEY_MUSTERD_AND_MAYO]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.PINEAPPLE]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.CRUSHED_ALMONDS]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.CRANBERRIES]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.TERIYAKI_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.PINEAPPLE]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.FRESH_PEPPER]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.SMOKED_KASHKAVAL]: {
        category: IngredientType.CHEESE,
        price: 30
    },
    [KEYS.SESAME_SEEDS]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.EGG]: {
        category: IngredientType.PROTEIN,
        price: 30
    },
    [KEYS.TOMATOES_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.PICKLED_JALAPENOS]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.ROASTED_PINEAPPLE]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.HOMEMADE_TUNA_MIX]: {
        category: IngredientType.PROTEIN,
        price: 30
    },
    [KEYS.MUSHROOMS]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.CREAMY_CURRY]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.CARAMELIZED_ONION]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.BBQ_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.TRUFFLE_OIL]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.ARUGULA]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.GOAT_CHEESE]: {
        category: IngredientType.CHEESE,
        price: 30
    },
    [KEYS.OLIVE_OIL_AND_GARLIC]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.RED_ONION]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.SPINACH]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.KALAMATA_OLIVES]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.BASIL]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.ONION]: {
        category: IngredientType.VEGGIE,
        price: 10
    },
    [KEYS.ROASTED_CHICKEN]: {
        category: IngredientType.PROTEIN,
        price: 40
    },
    [KEYS.MOZZARELLA]: {
        category: IngredientType.CHEESE,
        price: 20
    },
    [KEYS.FRESH_MOZZARELLA]: {
        category: IngredientType.CHEESE,
        price: 40
    },
    [KEYS.MARINARA]: {
        category: IngredientType.SAUCE,
        price: 10
    },
    [KEYS.CORN]: {
        category: IngredientType.VEGGIE,
        price: 10
    },
    [KEYS.CRISPY_CHICKEN]: {
        category: IngredientType.PROTEIN,
        price: 40
    },
    [KEYS.TOMATO]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.SUN_DRIED_TOMATOES]: {
        category: IngredientType.VEGGIE,
        price: 50
    },
    [KEYS.ALFREDO_SAUCE]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.AVOCADO]: {
        category: IngredientType.VEGGIE,
        price: 50
    },
    [KEYS.CHEDDAR]: {
        category: IngredientType.CHEESE,
        price: 25
    },
    [KEYS.FETA_CHEESE]: {
        category: IngredientType.CHEESE,
        price: 20
    },
    [KEYS.GORGONZOLA]: {
        category: IngredientType.CHEESE,
        price: 30
    },
    [KEYS.HAM]: {
        category: IngredientType.PROTEIN,
        price: 30
    },
    [KEYS.LETTUCE]: {
        category: IngredientType.VEGGIE,
        price: 30
    },
    [KEYS.OREGANO]: {
        category: IngredientType.SPICE,
        price: 10
    },
    [KEYS.PARMESAN]: {
        category: IngredientType.CHEESE,
        price: 40
    },
    [KEYS.PEPPERONI]: {
        category: IngredientType.PROTEIN,
        price: 30
    },
    [KEYS.PESTO]: {
        category: IngredientType.SAUCE,
        price: 30
    },
    [KEYS.PROSCIUTTO]: {
        category: IngredientType.PROTEIN,
        price: 80,
    },
    [KEYS.ROMANO_CHEESE]: {
        category: IngredientType.CHEESE,
        price: 25
    },
    [KEYS.SALAMI]: {
        category: IngredientType.PROTEIN,
        price: 25,
    },
    [KEYS.TOFU]: {
        category: IngredientType.VEGAN,
        price: 50
    },
    [KEYS.VEGAN_MOZZARELLA]: {
        category: IngredientType.VEGAN,
        price: 50
    }
}

// export interface PizzaOptions {
//     size: SizeOption[];
//     crustType?: PricedCrust[];
//     crustAdditions?: any;
//     extraSauce?: any
//     extraIngredients?: EnhancedIngredient[] | {}
//     disabledIngredients?: EnhancedIngredient[] | {}
// }

export type SingleMenu = { [key in keyof MainMenu]: FoodSet };

export enum MenuCategoryWrapperIngredient {
    CRUST = 'CRUST',
    WRAP = 'WRAP',
    PANINI = 'GARLIC_BUTTER_BREAD',
}

export const getWrapperIngredient = (menuCategory: MenuCategoryType): MenuCategoryWrapperIngredient | null => {
    switch (menuCategory) {
        case MenuCategoryType.PIZZAS: return MenuCategoryWrapperIngredient.CRUST;
        case MenuCategoryType.WRAPS: return MenuCategoryWrapperIngredient.WRAP;
        case MenuCategoryType.PANINIS: return MenuCategoryWrapperIngredient.PANINI;
        default: return null;
    }
}

export interface MainMenu {
    [MenuCategoryType.PIZZAS]: FoodSet<MenuCategoryType.PIZZAS>
    [MenuCategoryType.SALADS]: FoodSet<MenuCategoryType.SALADS>
    [MenuCategoryType.WRAPS]: FoodSet<MenuCategoryType.WRAPS>
    [MenuCategoryType.PANINIS]: FoodSet<MenuCategoryType.PANINIS>
    [MenuCategoryType.DINNERS]: FoodSet<MenuCategoryType.DINNERS>
    [MenuCategoryType.SIDES]: FoodSet<MenuCategoryType.SIDES>
    [MenuCategoryType.PASTAS]: FoodSet<MenuCategoryType.PASTAS>
    [MenuCategoryType.DRINKS]: FoodSet<MenuCategoryType.DRINKS>
}

export function getInitialCustomizations(menuCategoryType: MenuCategoryType.PIZZAS): PizzaCustomizations
export function getInitialCustomizations(menuCategoryType: MenuCategoryType.DRINKS): {}
export function getInitialCustomizations(menuCategoryType: MenuCategoryType): BaseCustomizations
export function getInitialCustomizations(menuCategoryType: MenuCategoryType) {
    return menuCategoryType === MenuCategoryType.DRINKS ? {} :
        menuCategoryType === MenuCategoryType.PIZZAS ?
            availablePizzaCustomizations as PizzaCustomizations :
            initialBaseCustomizations as BaseCustomizations;
}

export type GenericCustomization = ReturnType<typeof getInitialCustomizations>

export interface CucinaTree {
    hotDeals;
    mainMenu: MainMenu,
    dessertMenu: FoodSet,
    juicesSmoothies: any[],
    sauces: FoodSet,
    lastAdditions: FoodSet
}

export interface MenuItem extends SEOFriendly {
    id?: string | number;
    name?: string | null;
    price?: number | null;
    imgSrc?: string;
    menuCategory?: MenuCategoryType | null;
    standartIngredients?: EnhancedIngredients | {}
    disabledIngredients?: EnhancedIngredients | {}
}

//@ts-ignore
export interface CustomizableMenuItem<T extends BOTH | MenuCategoryType = BOTH> extends MenuItem {
    customizations?: Customize<T>
    count?: number;
}


export interface PizzaByDesign extends PizzaCustomizations {

}

const classicCheesePizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA
]);

const newYorkerPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.FRESH_MOZZARELLA,
    KEYS.BASIL
]);

const laBiancaPizza = generateIngredientsFromKeys([
    KEYS.ALFREDO_SAUCE,
    KEYS.SPINACH,
    KEYS.MOZZARELLA,
    KEYS.RED_ONION,
    KEYS.OLIVE_OIL_AND_GARLIC,
    KEYS.PARMESAN
]);

const polloAllaGorgonzolaPizza = generateIngredientsFromKeys([
    KEYS.ALFREDO_SAUCE,
    KEYS.MOZZARELLA,
    KEYS.GORGONZOLA,
    KEYS.ROASTED_CHICKEN
]);

const prosciuttoPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.PROSCIUTTO,
    KEYS.GOAT_CHEESE,
    KEYS.ARUGULA,
    KEYS.TRUFFLE_OIL,
    KEYS.ROMANO_CHEESE
]);

const bbqChickenPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.BBQ_SAUCE,
    KEYS.MOZZARELLA,
    KEYS.RED_ONION,
    KEYS.CARAMELIZED_ONION,
    KEYS.ROASTED_CHICKEN,
    KEYS.FRESH_BASIL
]);

const whiteChickenCurry = generateIngredientsFromKeys([
    KEYS.MOZZARELLA,
    KEYS.ROASTED_CHICKEN,
    KEYS.CREAMY_CURRY,
    KEYS.ALFREDO_SAUCE,
    KEYS.MUSHROOMS
])

const pepperoniPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.PEPPERONI
]);

const theRealTunaPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.HOMEMADE_TUNA_MIX,
    KEYS.FRESH_MOZZARELLA
]);

const muchMeatPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.PEPPERONI,
    KEYS.HAM,
    KEYS.SALAMI
]);

const chickenPestoPizza = generateIngredientsFromKeys([
    KEYS.ROASTED_CHICKEN,
    KEYS.PESTO,
    KEYS.TOMATO,
    KEYS.MOZZARELLA,
    KEYS.FETA_CHEESE
]);

const hawaiianPizza = generateIngredientsFromKeys([
    KEYS.ROASTED_PINEAPPLE,
    KEYS.HAM,
    KEYS.PICKLED_JALAPENOS,
    KEYS.MOZZARELLA,
    KEYS.TOMATOES_SAUCE
]);

const brakfastPizza = generateIngredientsFromKeys([
    KEYS.MOZZARELLA,
    KEYS.MUSHROOMS,
    KEYS.CARAMELIZED_ONION,
    KEYS.CORN,
    KEYS.EGG,
    KEYS.HEINZ_KETCHUP
]);

const capricozaPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.MUSHROOMS,
    KEYS.SALAMI,
    KEYS.SESAME_SEEDS,
    KEYS.OREGANO
]);

const quattroFormaggioPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.MOZZARELLA,
    KEYS.FETA_CHEESE,
    KEYS.GORGONZOLA,
    KEYS.SMOKED_KASHKAVAL,
    KEYS.OLIVE_OIL_AND_GARLIC,
]);

const redChickenCurry = generateIngredientsFromKeys([
    KEYS.CURRY_MARINARA_SAUCE,
    KEYS.MOZZARELLA,
    KEYS.ROASTED_CHICKEN,
    KEYS.MUSHROOMS
]);

const theFarmersMarketPizza = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.SPINACH,
    KEYS.MOZZARELLA,
    KEYS.FRESH_PEPPER,
    KEYS.ONION,
    KEYS.MUSHROOMS,
    KEYS.TOMATO,
    KEYS.FRESH_BASIL
]);

const chickenTeriyakiPizza = generateIngredientsFromKeys([
    KEYS.MOZZARELLA,
    KEYS.CRISPY_CHICKEN,
    KEYS.PINEAPPLE,
    KEYS.CARAMELIZED_ONION,
    KEYS.TERIYAKI_SAUCE,
    KEYS.SESAME_SEEDS
]);

const ceasarSalad = generateIngredientsFromKeys([
    KEYS.LETTUCE,
    KEYS.CRISPY_CHICKEN,
    KEYS.ROMANO_CHEESE,
    KEYS.SMOKED_KASHKAVAL,
    KEYS.CROUTONS_AND_SIDE_HOMEMADE_GARLIC_BREAD,
    KEYS.CREAMY_CEASAR_DRESSING
]);

const beetsAndGoatsSalad = generateIngredientsFromKeys([
    KEYS.HOUSE_GREENS,
    KEYS.SHAVED_BEETS,
    KEYS.FRESH_MIXED_CHEESE,
    KEYS.DRIED_CARNBERRIES,
    KEYS.RED_ONION,
    KEYS.ALMONDS_AND_CREAMY_BALSAMIC
]);

const greekSalad = generateIngredientsFromKeys([
    KEYS.LETTUCE,
    KEYS.GREEK_DRESSING,
    KEYS.CUCUMBER,
    KEYS.FETA_CHEESE,
    KEYS.TOMATO,
    KEYS.KALAMATA_OLIVES,
    KEYS.RED_ONION
]);

const tomatoesAndMozarellaSalad = generateIngredientsFromKeys([
    KEYS.MIXED_GREENS,
    KEYS.TOMATO,
    KEYS.FRESH_BASIL,
    KEYS.OLIVE_OIL,
    KEYS.BALSAMIC,
    KEYS.SEA_SALT,
    KEYS.OREGANO
]);

const cucinaSalad = generateIngredientsFromKeys([
    KEYS.ARUGULA,
    KEYS.LETTUCE,
    KEYS.CUCUMBER,
    KEYS.ONION,
    KEYS.CORN,
    KEYS.CROTON,
    KEYS.ROASTED_HOT_PEPPER,
    KEYS.CUCINA_SIGNATURE_SAUCE
]);

const daLirSalad = generateIngredientsFromKeys([
    KEYS.MIXED_GREENS,
    KEYS.FRESH_PEPPER,
    KEYS.ONION,
    KEYS.TOMATO,
    KEYS.CORN,
    KEYS.BOILED_EGG,
    KEYS.CUCUMBER,
    KEYS.OLIVE,
    KEYS.BALSAMIC,
    KEYS.HONEY_MUSTARD
]);

const theGoatWrap = generateIngredientsFromKeys([
    KEYS.ROASTED_CHICKEN,
    KEYS.MIXED_GREENS,
    KEYS.GOAT_CHEESE,
    KEYS.RED_ONION,
    KEYS.CRANBERRIES,
    KEYS.CRUSHED_ALMONDS,
    KEYS.ALMONDS_AND_CREAMY_BALSAMIC
]);

const californianWrap = generateIngredientsFromKeys([
    KEYS.ROASTED_CHICKEN,
    KEYS.LETTUCE,
    KEYS.AVOCADO,
    KEYS.TOMATO,
    KEYS.HONEY_MUSTERD_AND_MAYO
]);

const chickenMilaneseWrap = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.MIXED_GREENS,
    KEYS.RED_ONION,
    KEYS.TOMATO,
    KEYS.CUCINA_SIGNATURE_SAUCE
]);

const capreseWrap = generateIngredientsFromKeys([
    KEYS.PESTO,
    KEYS.FRESH_MOZZARELLA,
    KEYS.ARUGULA,
    KEYS.TOMATO,
    KEYS.KALAMATA_OLIVES,
    KEYS.PROSCIUTTO,
    KEYS.E_V_O_O,
    KEYS.BALSAMIC
]);

const chickenCeasarWrap = generateIngredientsFromKeys([
    KEYS.ROASTED_CHICKEN,
    KEYS.LETTUCE,
    KEYS.SMOKED_KASHKAVAL,
    KEYS.CORN,
    KEYS.TOMATO,
    KEYS.CEASER_DRESSING
]);

const theTunaWrap = generateIngredientsFromKeys([
    KEYS.HOMEMADE_TUNA_MIX,
    KEYS.LETTUCE,
    KEYS.RED_ONION,
    KEYS.TOMATO,
    KEYS.OIL_AND_VINEGAR
]);

const elDiabloWrap = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.LETTUCE,
    KEYS.TOMATO,
    KEYS.ONION,
    KEYS.CORN,
    KEYS.SOUR_CREAM,
    KEYS.PEPPER_SPICY_SAUCE
]);

const italianoWrap = generateIngredientsFromKeys([
    KEYS.SALAMI,
    KEYS.HAM,
    KEYS.PEPPERONI,
    KEYS.MOZZARELLA,
    KEYS.ROASTED_RED_PEPPER,
    KEYS.LETTUCE,
    KEYS.TOMATO,
    KEYS.MAYO,
    KEYS.ITALIAN_DRESSING
]);

const chickenParmPasta = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.MARINARA,
    KEYS.MOZZARELLA
]);

const loveTiePasta = generateIngredientsFromKeys([
    KEYS.SPINACH,
    KEYS.ONION,
    KEYS.GARLIC_BUTTER,
    KEYS.PARMESAN
]);

const penniAllaGorgonzolaPasta = generateIngredientsFromKeys([
    KEYS.GORGONZOLA,
    KEYS.FRESH_BASIL,
    KEYS.PARMESAN
]);

const pastaAlaCurry = generateIngredientsFromKeys([
    KEYS.SPINACH,
    KEYS.MUSHROOMS,
    KEYS.ROASTED_CHICKEN,
    KEYS.CREAMY_CURRY
]);

const chickenAndBroccoliPasta = generateIngredientsFromKeys([
    KEYS.BROCCOLI,
    KEYS.GARLIC_BUTTER,
    KEYS.ROASTED_CHICKEN,
    KEYS.FRESH_PARSLEY_LEAVES,
    KEYS.PARMESAN
]);

const bakedZitiPasta = generateIngredientsFromKeys([
    KEYS.MARINARA,
    KEYS.PESTO,
    KEYS.RICCOTTA,
    KEYS.MOZZARELLA
]);

const chickenAlfredoPasta = generateIngredientsFromKeys([
    KEYS.ALFREDO_SAUCE,
    KEYS.ROASTED_CHICKEN,
]);

const crispyChickenDinner = generateIngredientsFromKeys([
    KEYS.HOMEMADE_BREADED_CHICKEN_FILLET,
    KEYS.TOPPED_OF_CHEESE
]);

const chickenParmDinner = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.MARINARA,
    KEYS.MOZZARELLA
]);

const curryChickenDinner = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.CREAMY_CURRY,
    KEYS.MOZZARELLA
]);

const alfredoChickenDinner = generateIngredientsFromKeys([
    KEYS.CRISPY_CHICKEN,
    KEYS.MUSHROOMS,
    KEYS.ALFREDO_SAUCE
]);

const theGoatPanini = theGoatWrap;
const californianPanini = californianWrap;
const chickenMilanesePanini = chickenMilaneseWrap;
const capresePanini = capreseWrap;
const chickenCaesarPanini = chickenCeasarWrap;
const theTunaPanini = theTunaWrap;
const elDiabloPanini = elDiabloWrap;
const italianoPanini = italianoWrap;

// export type FoodSet<T extends CustomizableMenuItem | MenuItem = CustomizableMenuItem> = {
//     [key in FoodSlug]?: T
// }

export type FoodSet<T extends MenuCategoryType = any> = {
    [key in FoodSlug]?: MenuItemDecider<T>
}

const pizzas: FoodSet<MenuCategoryType.PIZZAS> = {
    [FoodSlug.CLASSIC_CHEESE_PIZZA]: {
        name: 'Classic Cheese',
        price: 210,
        standartIngredients: classicCheesePizza,
    },

    [FoodSlug.THE_NEW_YORKER_PIZZA]: {
        name: 'The New Yorker',
        price: 270,
        standartIngredients: newYorkerPizza,
    },

    [FoodSlug.LA_BIANCA_PIZZA]: {
        name: 'La Bianca',
        price: 280,
        standartIngredients: laBiancaPizza,
    },

    [FoodSlug.POLLO_ALLA_GORGONZOLA_PIZZA]: {
        name: 'Pollo alla Gorgonzola',
        price: 290,
        standartIngredients: polloAllaGorgonzolaPizza,
    },

    [FoodSlug.PROSCIUTTO_PIZZA]: {
        name: 'Prosciutto',
        price: 380,
        standartIngredients: prosciuttoPizza,
    },

    [FoodSlug.BBQ_CHICKEN_PIZZA]: {
        name: 'BBQ Chicken',
        price: 290,
        standartIngredients: bbqChickenPizza,
    },

    [FoodSlug.WHITE_CHICKEN_CURRY_PIZZA]: {
        name: 'White Chicken Curry',
        price: 290,
        standartIngredients: whiteChickenCurry,
    },

    [FoodSlug.PEPPERONI_PIZZA]: {
        name: 'Pepperoni',
        price: 280,
        standartIngredients: pepperoniPizza,
    },


    [FoodSlug.THE_REAL_TUNA_PIZZA]: {
        name: 'The Real Tuna',
        price: 280,
        standartIngredients: theRealTunaPizza,
    },

    [FoodSlug.MUCH_MEAT_PIZZA]: {
        name: 'Much Meat',
        price: 290,
        standartIngredients: muchMeatPizza,
    },

    [FoodSlug.CHICKEN_PESTO_PIZZA]: {
        name: 'Chicken Pesto',
        price: 290,
        standartIngredients: chickenPestoPizza,
    },

    [FoodSlug.HAWAIIAN_PIZZA]: {
        name: 'Hawaiian',
        price: 290,
        standartIngredients: hawaiianPizza,
    },

    [FoodSlug.BREAKFAST_PIZZA]: {
        name: 'Breakfast',
        price: 300,
        standartIngredients: brakfastPizza,
    },

    [FoodSlug.CAPRICOZA_PIZZA]: {
        name: 'Capricoza',
        price: 290,
        standartIngredients: capricozaPizza,
    },

    [FoodSlug.QUATTRO_FORMAGGIO_PIZZA]: {
        name: 'Quattro Formaggio',
        price: 290,
        standartIngredients: quattroFormaggioPizza,
    },

    [FoodSlug.RED_CHICKEN_CURRY_PIZZA]: {
        name: 'Red Chicken Curry',
        price: 290,
        standartIngredients: redChickenCurry,
    },

    [FoodSlug.THE_FARMERS_MARKET_PIZZA]: {
        name: 'The Farmers Market',
        price: 290,
        standartIngredients: theFarmersMarketPizza,
    },

    [FoodSlug.CHICKEN_TERIYAKI]: {
        name: 'Chicken Teriyaki',
        price: 290,
        standartIngredients: chickenTeriyakiPizza,
    }

};

function generateIngredientsFromKeys(keys: KEYS[],): EnhancedIngredients {
    const ingredients = {}
    keys && keys.length > 0 && keys.forEach(key => {
        ingredients[key] = {
            category: StandartIngredients[key]?.category || null,
            price: StandartIngredients[key]?.price || null
        }
    });
    return ingredients;
}

const salads: FoodSet<MenuCategoryType.SALADS> = {
    [FoodSlug.CAESAR_SALAD]: {
        name: "Ceasar",
        price: 190,
        standartIngredients: ceasarSalad,
    },

    [FoodSlug.BEETS_AND_GOATS_SALAD]: {
        name: "Beets and Goats",
        price: 200,
        standartIngredients: beetsAndGoatsSalad
    },

    [FoodSlug.GREEK_SALAD]: {
        name: "Greek",
        price: 190,
        standartIngredients: greekSalad,
    },

    [FoodSlug.TOMATOES_AND_MOZZARELLA]: {
        name: "Tomatoes and Mozzarella",
        price: 220,
        standartIngredients: tomatoesAndMozarellaSalad,
    },

    [FoodSlug.CUCINA_SALAD]: {
        name: "Cucina",
        price: 220,
        standartIngredients: cucinaSalad,
    },

    [FoodSlug.DA_LIR_SALAD]: {
        name: "Da Lir",
        price: 220,
        standartIngredients: daLirSalad,
    }
};


const wraps: FoodSet<MenuCategoryType.WRAPS> = {
    [FoodSlug.THE_GOAT_WRAP]: {
        name: "The Goat",
        price: 170,
        standartIngredients: theGoatWrap,
    },

    [FoodSlug.CALIFORNIAN_WRAP]: {
        name: "Californian",
        price: 170,
        standartIngredients: californianWrap,
    },

    [FoodSlug.CHICKEN_MILANESE_WRAP]: {
        name: "Chicken Milanese",
        price: 170,
        standartIngredients: chickenMilaneseWrap,
    },

    [FoodSlug.CAPRESE_WRAP]: {
        name: "Caprese",
        price: 170,
        standartIngredients: capreseWrap,
    },

    [FoodSlug.CHICKEN_CAESAR_WRAP]: {
        name: "Chicken Ceasar",
        price: 170,
        standartIngredients: chickenCeasarWrap,
    },

    [FoodSlug.THE_TUNA_WRAP]: {
        name: "The Tuna",
        price: 170,
        standartIngredients: theTunaWrap,
    },

    [FoodSlug.EL_DIABLO_WRAP]: {
        name: "El Diablo",
        price: 170,
        standartIngredients: elDiabloWrap,
    },


    [FoodSlug.ITALIANO_WRAP]: {
        name: "Italiano",
        price: 170,
        standartIngredients: italianoWrap,
    }

};

const paninis: FoodSet<MenuCategoryType.PANINIS> = {
    [FoodSlug.THE_GOAT_PANINI]: {
        name: "The Goat",
        price: 210,
        standartIngredients: theGoatPanini,
    },

    [FoodSlug.CALIFORNIAN_PANINI]: {
        name: "Californian",
        price: 210,
        standartIngredients: californianPanini,
    },

    [FoodSlug.CHICKEN_MILANESE_PANINI]: {
        name: "Chicken Milanese",
        price: 210,
        standartIngredients: chickenMilanesePanini,
    },

    [FoodSlug.CAPRESE_PANINI]: {
        name: "Caprese",
        price: 210,
        standartIngredients: capresePanini,
    },

    [FoodSlug.CHICKEN_CAESAR_PANINI]: {
        name: "Chicken Ceasar",
        price: 210,
        standartIngredients: chickenCaesarPanini,
    },

    [FoodSlug.THE_TUNA_PANINI]: {
        name: "The Tuna",
        price: 210,
        standartIngredients: theTunaPanini,
    },

    [FoodSlug.EL_DIABLO_PANINI]: {
        name: "El Diablo",
        price: 210,
        standartIngredients: elDiabloPanini,
    },

    [FoodSlug.ITALIANO_PANINI]: {
        name: "Italiano",
        price: 210,
        standartIngredients: italianoPanini,
    }
};

const pastas: FoodSet<MenuCategoryType.PASTAS> = {
    [FoodSlug.CHICKEN_PARM_PASTA]: {
        name: "Chicken Parm",
        price: 240,
        standartIngredients: chickenParmPasta,
    },

    [FoodSlug.LOVE_TIE_PASTA]: {
        name: "Love Tie",
        price: 240,
        standartIngredients: loveTiePasta,
    },

    [FoodSlug.PENNE_ALLA_GORGONZOLA_PASTA]: {
        name: "Penni Alla Gorgonzola",
        price: 190,
        standartIngredients: penniAllaGorgonzolaPasta,
    },

    [FoodSlug.PASTA_ALLA_CURRY]: {
        name: "Pasta Alla Curry ",
        price: 240,
        standartIngredients: pastaAlaCurry,
    },

    [FoodSlug.CHICKEN_AND_BROCCOLI_PASTA]: {
        name: "Chicken and Broccoli ",
        price: 240,
        standartIngredients: chickenAndBroccoliPasta,
    },

    [FoodSlug.BAKED_ZITI_PASTA]: {
        name: "Baked Ziti ",
        price: 240,
        standartIngredients: bakedZitiPasta,
    },

    [FoodSlug.CHICKEN_ALFREDO_PASTA]: {
        name: "Chicken Alfredo ",
        price: 190,
        standartIngredients: chickenAlfredoPasta,
    }
};

const dinners: FoodSet<MenuCategoryType.DINNERS> = {
    [FoodSlug.CRISPY_CHICKEN_DINNER]: {
        name: "Crispy Chicken",
        price: 330,
        standartIngredients: crispyChickenDinner,
    },

    [FoodSlug.CHICKEN_PARM_DINNER]: {
        name: "Chicken Parm",
        price: 350,
        standartIngredients: chickenParmDinner,
    },

    [FoodSlug.CURRY_CHICKEN_DINNER]: {
        name: "Curry Chicken",
        price: 350,
        standartIngredients: curryChickenDinner,
    },

    [FoodSlug.ALFREDO_CHICKEN_DINNER]: {
        name: "Alfredo Chicken",
        price: 350,
        standartIngredients: alfredoChickenDinner,
    }

};

const lastAdditions: FoodSet = {
    [FoodSlug.COCA_COLA_0_5L]: {
        name: "Coca Cola 0.5l 🥤",
        price: 70
    },
    [FoodSlug.FANTA_0_5L]: {
        name: "Fanta 0.5l 🥤",
        price: 70
    },
    [FoodSlug.THE_REAL_CHEESECAKE]: {
        name: "The Real Cheesecake 🍰",
        price: 100
    },
    [FoodSlug.BROWNY]: {
        name: "Browny",
        price: 90
    },
    [FoodSlug.X6_CHICKEN_WINGS]: {
        name: "6x Chicken Wings 🍗",
        price: 100
    },
    [FoodSlug.X12_CHICKEN_WINGS]: {
        name: "12x Chicken Wings 🍗🍗",
        price: 180
    },
    [FoodSlug.FRENCH_FRIES]: {
        name: "French Fries 🍟",
        price: 80
    },
    [FoodSlug.CHEESY_FRIES]: {
        name: 'Cheesy Fries 🍟🧀',
        price: 100
    },
    [FoodSlug.PIZZA_FRIES]: {
        name: 'Pizza Fries 🍟🧀',
        price: 150
    }
}

export const initialPizzaCustomizations: Readonly<Customize<MenuCategoryType.PIZZAS>> = Object.freeze({
    size: [Size.REGULAR],
    crustType: {
        [CrustType.CLASSIC_WHITE]: {
            price: 0
        }
    },
    extraSauce: {},
    crustAdditions: {},
    extraIngredients: {},
});

export const initialBaseCustomizations: BaseCustomizations = {
    extraIngredients: {},
    extraSauce: {},
    disabledIngredients: {}
}

export interface HasPrice {
    price: number;
}

export interface IngredientDetails extends HasPrice {
    category: keyof typeof IngredientType;
    name?: string;
}

export type EnhancedIngredients = { [key in keyof typeof KEYS]?: IngredientDetails }
export type PricedSauces = { [key in Sauces]?: HasPrice } | {}
export type PricedCrustAdditions = { [key in CrustAdditionType]?: HasPrice }
export type PricedCrustType = { [key in CrustType]?: HasPrice }

export interface BaseCustomizations {
    disabledIngredients?: EnhancedIngredients
    extraSauce: PricedSauces,
    extraIngredients: EnhancedIngredients,
}

export interface PizzaCustomizations extends BaseCustomizations {
    crustAdditions: PricedCrustAdditions
    crustType: PricedCrustType,
    size: Size[];
}

export type BOTH = `BOTH`

export type Customize<T> = T extends MenuCategoryType.DRINKS ? {} :
    T extends MenuCategoryType.PIZZAS ? PizzaCustomizations :
    T extends BOTH ? PizzaCustomizations & BaseCustomizations :
    BaseCustomizations

export type MenuItemDecider<T> = T extends MenuCategoryType ? CustomizableMenuItem<T> : MenuItem


export const sauces = function extraSauce(): PricedSauces {
    const sauces = {} // For now all the prices are the same for extra sauces, so just looping and adding 30
    Object.keys(Sauces).forEach((key) => {
        sauces[key] = {
            price: 30
        }
    });
    return sauces;
}();

//@ts-ignore
const baseCustomizations: BaseCustomizations = Object.freeze({
    extraSauce: sauces,
    extraIngredients: {}
});

const availablePizzaCustomizations: Customize<MenuCategoryType.PIZZAS> = Object.freeze({
    // size: [{ size: Size.MEDIUM, price: 0 }], // For now only Medium size will be available
    ...baseCustomizations,
    size: [Size.REGULAR],
    crustType: {
        [CrustType.CLASSIC_WHITE]: {
            price: 0
        },
        [CrustType.WHOLE_WHEAT]: {
            price: 30,
        },
        [CrustType.GLUTEN_FREE]: {
            price: 90
        }
    },
    crustAdditions: {
        [CrustAdditionType.OLIVE_OIL_GARLIC_SIDE]: {
            price: 30
        },
        [CrustAdditionType.PARMESAN_SIDE]: {
            price: 30
        },
        [CrustAdditionType.SESAME_SIDE]: {
            price: 30
        },
        [CrustAdditionType.CHILLY_PEPPERS_SIDE]: {
            price: 15
        },
        [CrustAdditionType.FRESH_OREGANO_SIDE]: {
            price: 15
        },
        [CrustAdditionType.GARLIC_BUTTER_SIDE]: {
            price: 30
        }
    }
});

const cucinaTree: Readonly<CucinaTree> = Object.freeze({
    hotDeals: {},
    mainMenu: {
        [MenuCategoryType.PIZZAS]: pizzas,
        [MenuCategoryType.WRAPS]: wraps,
        [MenuCategoryType.PANINIS]: paninis,
        [MenuCategoryType.SALADS]: salads,
        [MenuCategoryType.PASTAS]: pastas,
        [MenuCategoryType.DINNERS]: dinners,
        [MenuCategoryType.SIDES]: {},
        [MenuCategoryType.DRINKS]: {}
    },
    dessertMenu: {
        desserts: [
            {}
        ]
    },
    juicesSmoothies: [],
    drinks: [],
    sauces: [],
    lastAdditions
} as CucinaTree)

// // Below are examples and basic tests how CucinaTree data can be used

// // Access to any pizza and name.
// console.log("pizza name", cucinaTree.mainMenu[MenuCategoryType.PIZZAS][FoodSlug.HAWAIIAN_PIZZA]?.name)

// // Access to any pizza ingredient name
// const ingredients = cucinaTree.mainMenu[MenuCategoryType.PIZZAS][FoodSlug.BBQ_CHICKEN_PIZZA]?.standartIngredients
// console.log("pizza ingredient", ingredients && ingredients[KEYS.MOZZARELLA]);

// // Access to any pizza ingredient category
// console.log("pizza ingredient category", ingredients && ingredients[KEYS.MOZZARELLA]?.category);

// // Access to any pizza ingredient price (added a case that ingredient doesn't exists)
// const price = ingredients && ingredients[KEYS.MAYO]?.price || (() => 'Given ingredient for the given product is not found')();
// console.log("pizza ingredient price: ", price)

// // @ts-ignore ignored because object possibly is undefined
// //Access to pizza crust types
// console.log("pizza crust types", getInitialCustomizations(MenuCategoryType.PIZZAS))

// console.log('STANDART ING', StandartIngredients[KEYS.BASIL]);

export default cucinaTree;