import { CrustAdditionType, CrustType, FoodSlug, IngredientType, KEYS, OrderState, PaymentType, Sauces, Size } from "../../data/cucinaTree";

// To apply changes and generate translation JSON file
// Run command "yarn run translations"

export default {
    hello: 'Hello!',
    [PaymentType.CASH]: 'Cash',
    [PaymentType.CREDIT_CARD]: 'Credit Card',

    [Size.REGULAR]: 'Regular Size',
    [Size.FAMILY]: 'Family Size',

    [IngredientType.CHEESE]: 'Cheese',
    [IngredientType.PROTEIN]: 'Protein',
    [IngredientType.SAUCE]: 'Sauce',
    [IngredientType.SPICE]: 'Spice',
    [IngredientType.VEGAN]: 'Vegan',
    [IngredientType.VEGGIE]: 'Veggie',


    [OrderState.NEW]: 'NEW',
    [OrderState.APPROVED]: 'APPROVED',
    [OrderState.PREPARED]: 'PREPARED',
    [OrderState.TAKED_OUT]: 'TAKED OUT',
    [OrderState.DELIVERED]: 'DELIVERED',


    [CrustAdditionType.SESAME_SIDE]: "SESAME SIDE",
    [CrustAdditionType.PARMESAN_SIDE]: "PARMESAN SIDE",
    [CrustAdditionType.OLIVE_OIL_GARLIC_SIDE]: "OLIVE OIL & GARLIC SIDE",
    [CrustAdditionType.CHILLY_PEPPERS_SIDE]: "CHILLY PEPPERS SIDE",
    [CrustAdditionType.FRESH_OREGANO_SIDE]: "FRESH OREGANO SIDE",
    [CrustAdditionType.GARLIC_BUTTER_SIDE]: "GARLIC BUTTER SIDE",


    [Sauces.BBQ]: 'BBQ',
    [Sauces.MARINARA]: 'MARINARA',
    [Sauces.PESTO]: 'PESTO',
    [Sauces.ALFREDO]: 'ALFREDO',
    [Sauces.TERIYAKI]: 'TERIYAKI',
    [Sauces.RANCH]: 'RANCH',
    [Sauces.THOMY_MAYO]: 'THOMY MAYO',
    [Sauces.HEINZ_KETCHUP]: 'HEINZ KETCHUP',
    [Sauces.TRUFFLE_OIL]: 'TRUFFLE OIL',
    [Sauces.SPICY_MARINARA]: 'SPICY MARINARA',
    [Sauces.HOT_SAUCE]: 'HOT SAUCE',



    [KEYS.BASIL]: "BASIL",
    [KEYS.ONION]: "ONION",
    [KEYS.ROASTED_CHICKEN]: "ROASTED CHICKEN",
    [KEYS.MARINARA]: "MARINARA",
    [KEYS.MOZZARELLA]: "MOZZARELLA",
    [KEYS.FRESH_MOZZARELLA]: "FRESH MOZZARELLA",
    [KEYS.BBQ_SAUCE]: "BBQ SAUCE",
    [KEYS.CRISPY_CHICKEN]: "CRISPY CHICKEN",
    [KEYS.LETTUCE]: "LETTUCE",
    [KEYS.TOMATO]: "TOMATO",
    [KEYS.CORN]: "CORN",
    [KEYS.SOUR_CREAM]: "SOUR CREAM",
    [KEYS.PEPPER_SPICY_SAUCE]: "PEPPER SPICY SAUCE",
    [KEYS.SUN_DRIED_TOMATOES]: "SUN DRIED TOMATOES",
    [KEYS.PROSCIUTTO]: "PROSCIUTTO",
    [KEYS.HAM]: "HAM",
    [KEYS.SALAMI]: "SALAMI",
    [KEYS.PEPPERONI]: "PEPPERONI",
    [KEYS.AVOCADO]: "AVOCADO",
    [KEYS.GORGONZOLA]: "GORGONZOLA",
    [KEYS.FETA_CHEESE]: "FETA CHEESE",
    [KEYS.ROMANO_CHEESE]: "ROMANO CHEESE",
    [KEYS.PARMESAN]: "PARMESAN",
    [KEYS.OREGANO]: "OREGANO",
    [KEYS.ALFREDO_SAUCE]: "ALFREDO SAUCE",
    [KEYS.PESTO]: "PESTO",
    [KEYS.VEGAN_MOZZARELLA]: "VEGAN MOZZARELLA",
    [KEYS.CHEDDAR]: "CHEDDAR",
    [KEYS.TOFU]: "TOFU",
    [KEYS.HOMEMADE_TUNA_MIX]: "HOMEMADE TUNA MIX",
    [KEYS.OIL_AND_VINEGAR]: "OIL AND VINEGAR",
    [KEYS.ROASTED_RED_PEPPER]: "ROASTED RED PEPPER",
    [KEYS.MAYO]: "MAYO",
    [KEYS.ITALIAN_DRESSING]: "ITALIAN DRESSING",
    [KEYS.SMOKED_KASHKAVAL]: "SMOKED KASHKAVAL",
    [KEYS.CEASER_DRESSING]: "CEASER DRESSING",
    [KEYS.ARUGULA]: "ARUGULA",
    [KEYS.KALAMATA_OLIVES]: "KALAMATA OLIVES",
    [KEYS.E_V_O_O]: "E V O O",
    [KEYS.BALSAMIC]: "BALSAMIC",
    [KEYS.MIXED_GREENS]: "MIXED GREENS",
    [KEYS.RED_ONION]: "RED ONION",
    [KEYS.CUCINA_SIGNATURE_SAUCE]: "CUCINA SIGNATURE SAUCE",
    [KEYS.GOAT_CHEESE]: "GOAT CHEESE",
    [KEYS.CRANBERRIES]: "CRANBERRIES",
    [KEYS.CRUSHED_ALMONDS]: "CRUSHED ALMONDS",
    [KEYS.ALMONDS_AND_CREAMY_BALSAMIC]: "ALMONDS AND CREAMY BALSAMIC",
    [KEYS.HONEY_MUSTERD_AND_MAYO]: "HONEY MUSTARD AND MAYO",
    [KEYS.CROUTONS_AND_SIDE_HOMEMADE_GARLIC_BREAD]: "CROUTONS AND SIDE HOMEMADE GARLIC BREAD",
    [KEYS.CREAMY_CEASAR_DRESSING]: "CREAMY CAESAR DRESSING",
    [KEYS.HOUSE_GREENS]: "HOUSE GREENS",
    [KEYS.SHAVED_BEETS]: "SHAVED BEETS",
    [KEYS.DRIED_CARNBERRIES]: "DRIED CRANBERRIES",
    [KEYS.GREEK_DRESSING]: "GREED DRESSING",
    [KEYS.CUCUMBER]: "CUCUMBER",
    [KEYS.FRESH_BASIL]: "FRESH BASIL",
    [KEYS.OLIVE_OIL]: "OLIVE OIL",
    [KEYS.SEA_SALT]: "SEA SALT",
    [KEYS.ARUGULA]: "FRESH ARUGULA",
    [KEYS.CROTON]: "CROTON",
    [KEYS.ROASTED_HOT_PEPPER]: "ROASTED HOT PEPPER",
    [KEYS.FRESH_PEPPER]: "FRESH PEPPER",
    [KEYS.CHICKPEAS]: "CHICKPEAS",
    [KEYS.FRESH_MIXED_CHEESE]: "FRESH MIXED CHEESE",
    [KEYS.BOILED_EGG]: "BOILED EGG",
    [KEYS.OLIVE]: "OLIVE",
    [KEYS.HONEY_MUSTARD]: "HONEY MUSTARD",
    [KEYS.MOZZARELLA]: "ALL NATURAL MOZZARELLA",
    [KEYS.ROASTED_CHICKEN]: "ROASTED BBQ CHICKEN",
    [KEYS.CARAMELIZED_ONION]: "CARAMELIZED ONION",
    [KEYS.TRUFFLE_OIL]: "TRUFFLE OIL",
    [KEYS.MOZZARELLA]: "EXTRA ALL NATURAL MOZZARELLA",
    [KEYS.ROASTED_PINEAPPLE]: "ROASTED PINEAPPLE",
    [KEYS.PICKLED_JALAPENOS]: "PICKLED JALAPENOS",
    [KEYS.TOMATOES_SAUCE]: "TOMATOES SAUCE",
    [KEYS.MUSHROOMS]: "MUSHROOMS",
    [KEYS.HEINZ_KETCHUP]: "HEINZ KETCHUP",
    [KEYS.EGG]: "EGG",
    [KEYS.SESAME_SEEDS]: "SESAME SEEDS",
    [KEYS.OLIVE_OIL_AND_GARLIC]: "OLIVE OIL AND GARLIC",
    [KEYS.SPINACH]: "SPINACH",
    [KEYS.CURRY_MARINARA_SAUCE]: "CURRY MARINARA SAUCE",
    [KEYS.PINEAPPLE]: "PINEAPPLE",
    [KEYS.TERIYAKI_SAUCE]: "TERIYAKI SAUCE",
    [KEYS.CREAMY_CURRY]: "CREAMY CURRY",
    [KEYS.GARLIC_BUTTER]: "GARLIC BUTTER",
    [KEYS.BROCCOLI]: "BROCCOLI",
    [KEYS.FRESH_PARSLEY_LEAVES]: "FRESH PARSLEY_LEAVES",
    [KEYS.RICCOTTA]: "RICOTTA",
    [KEYS.HOMEMADE_BREADED_CHICKEN_FILLET]: "HOMEMADE BREADED CHICKEN FILLET",
    [KEYS.TOPPED_OF_CHEESE]: "TOPPED OF CHEESE",



    [FoodSlug.THE_NEW_YORKER_PIZZA]: 'The New Yorker Pizza',
    [FoodSlug.CLASSIC_CHEESE_PIZZA]: 'Classic Cheese Pizza',
    [FoodSlug.POLLO_ALLA_GORGONZOLA_PIZZA]: 'Pollo Alla Gorgonzola Pizza',
    [FoodSlug.PROSCIUTTO_PIZZA]: 'Prosciutto Pizza',
    [FoodSlug.LA_BIANCA_PIZZA]: 'La Bianca Pizza',
    [FoodSlug.BBQ_CHICKEN_PIZZA]: 'Bbq Chicken Pizza',
    [FoodSlug.THE_REAL_TUNA_PIZZA]: 'The Real Tuna Pizza',
    [FoodSlug.CHICKEN_PESTO_PIZZA]: 'Chicken Pesto Pizza',
    [FoodSlug.HAWAIIAN_PIZZA]: 'Hawaiian Pizza',
    [FoodSlug.BREAKFAST_PIZZA]: 'Breakfast Pizza',
    [FoodSlug.CAPRICOZA_PIZZA]: 'Capricoza Pizza',
    [FoodSlug.QUATTRO_FORMAGGIO_PIZZA]: 'Quattro Formaggio Pizza',
    [FoodSlug.WHITE_CHICKEN_CURRY_PIZZA]: 'White Chicken Curry Pizza',
    [FoodSlug.RED_CHICKEN_CURRY_PIZZA]: 'Red Chicken Curry Pizza',
    [FoodSlug.MUCH_MEAT_PIZZA]: 'Much Meat Pizza',
    [FoodSlug.PEPPERONI_PIZZA]: 'Pepperoni Pizza',
    [FoodSlug.THE_FARMERS_MARKET_PIZZA]: 'The Farmers Market Pizza',
    [FoodSlug.CHICKEN_TERIYAKI]: 'The Chicken Teriyaki Pizza',
    // Pizzas End

    // Wraps Start
    [FoodSlug.THE_GOAT_WRAP]: 'The Goat Wrap',
    [FoodSlug.CALIFORNIAN_WRAP]: 'Californian Wrap',
    [FoodSlug.CHICKEN_MILANESE_WRAP]: 'Chicken Milanese Wrap',
    [FoodSlug.CAPRESE_WRAP]: 'Caprese Wrap',
    [FoodSlug.CHICKEN_CAESAR_WRAP]: 'Chicken Caesar Wrap',
    [FoodSlug.THE_TUNA_WRAP]: 'The Tuna Wrap',
    [FoodSlug.EL_DIABLO_WRAP]: 'El Diablo Wrap',
    [FoodSlug.ITALIANO_WRAP]: 'Italiano Wrap',
    // Wraps End

    // Paninis Start
    [FoodSlug.THE_GOAT_PANINI]: 'The Goat Panini',
    [FoodSlug.CALIFORNIAN_PANINI]: 'Californian Panini',
    [FoodSlug.CHICKEN_MILANESE_PANINI]: 'Chicken Milanese Panini',
    [FoodSlug.CAPRESE_PANINI]: 'Caprese Panini',
    [FoodSlug.CHICKEN_CAESAR_PANINI]: 'Chicken Caesar Panini',
    [FoodSlug.THE_TUNA_PANINI]: 'The Tuna Panini',
    [FoodSlug.EL_DIABLO_PANINI]: 'El Diablo Panini',
    [FoodSlug.ITALIANO_PANINI]: 'Italiano Panini',
    // Paninis End

    // Salads Start
    [FoodSlug.CAESAR_SALAD]: 'Caesar Salad',
    [FoodSlug.BEETS_AND_GOATS_SALAD]: 'Beats And Goats Salad',
    [FoodSlug.GREEK_SALAD]: 'Greek Salad',
    [FoodSlug.TOMATOES_AND_MOZZARELLA]: 'Tomatoes And Mozzarella',
    [FoodSlug.CUCINA_SALAD]: 'Cucina Salad',
    [FoodSlug.DA_LIR_SALAD]: 'Da Lir Salad',
    // Salads End

    // Pastas Start
    [FoodSlug.CHICKEN_PARM_PASTA]: 'Chicken Parm Pasta',
    [FoodSlug.LOVE_TIE_PASTA]: 'Love Tie Pasta',
    [FoodSlug.CHICKEN_AND_BROCCOLI_PASTA]: 'Chicken And Broccoli Pasta',
    [FoodSlug.BAKED_ZITI_PASTA]: 'Baked Ziti',
    [FoodSlug.PENNE_ALLA_GORGONZOLA_PASTA]: 'Penne Alla Gorgonzola Pasta',
    [FoodSlug.PASTA_ALLA_CURRY]: 'Pasta Alla Curry',
    [FoodSlug.CHICKEN_ALFREDO_PASTA]: 'Chicken Alfredo Pasta',
    // Pastas End

    // Dinners Start
    [FoodSlug.CHICKEN_PARM_DINNER]: 'Chicken Parm Dinner',
    [FoodSlug.CURRY_CHICKEN_DINNER]: 'Curry Chicken Dinner',
    [FoodSlug.ALFREDO_CHICKEN_DINNER]: 'Alfredo Chicken Dinner',
    [FoodSlug.CRISPY_CHICKEN_DINNER]: 'Crispy Chicken Dinner',
    // Dinners End

    // Sides Start
    [FoodSlug.FRENCH_FRIES]: "French Fries",
    [FoodSlug.CHEESY_FRIES]: "Cheesy Fries",
    [FoodSlug.PIZZA_FRIES]: "Pizza Fries",
    [FoodSlug.X6_CHICKEN_WINGS]: '6x Chicken Wings',
    [FoodSlug.X12_CHICKEN_WINGS]: '12x Chicken Wings',
    // Sides End

    // Soda Drinks Start
    [FoodSlug.COCA_COLA_0_5L]: 'Coca Cola 0-5l',
    [FoodSlug.FANTA_0_5L]: 'Fanta 0-5l',
    // Soda Drinks End

    // Juices & Smoothies Start
    [FoodSlug.FRESHLY_SQUEEZED_ORANGE_JUICE]: 'Freshly Squeezed Orange Juice',
    // Juices & Smoothies End

    // Desserts Start
    [FoodSlug.THE_REAL_CHEESECAKE]: 'The Real Cheesecake',
    [FoodSlug.BROWNY]: 'Browny',
    // Desserts End

    // Crust Start
    [CrustType.CLASSIC_WHITE]: 'CLASSIC WHITE',
    [CrustType.GLUTEN_FREE]: 'GLUTEN FREE',
    [CrustType.WHOLE_WHEAT]: 'WHOLE WHEAT',
    // Crust End


    orderNow: 'Order now',
    finalPrice: 'Final Price',
    totalShoppingBag: 'Total Shopping',
    extraIngredients: 'Extra Ingredients',
    disabledIngredients: 'Disabled Ingredients',
    crustType: 'Crust Type',
    sauceOnTop: 'Sauce On Top',
    crustAdditions: 'Crust Additions',
    remove: 'Remove',
    customize: 'Customize',
    free: 'Free',
    addressForYourOrder: 'Address For Your Order',
    addNewAddress: 'Add New Address',
    enterYourPhoneNumberNumberToContact: 'Enter Your Phone Number',
    example: 'Example',
    leaveAComment: 'Leave A Comment',
    commentCanHaveMaximum300Characters: 'Comment Can Have Maximum 300 Characters.',
    paymentMethod: 'Payment Method',
    cash: 'Cash',
    creditCard: 'Credit Card',
    agreeTo: 'Agree To',
    termsAndConditions: 'Terms And Conditions',
    youMustAgreeBeforeSubmittingTheOrder: 'You Must Agree Before Submitting The Order.',
    required: 'Required',
    protectTheEnvironment: 'Protect The Environment',
    dontAddPlastic: 'Dont Add Plastic Forks Spoon Etc',
    ordering: 'Ordering...',
    total: 'Total',
    ASAP: 'NOW',
    deliveryTime: 'Delivery Time',
    deliveryFee: 'Delivery Fee',
    adding: 'Adding',
    add: 'Add',
    changeOrderType: 'Change Order Type',
    takeAway: 'Take Away',
    delivery: 'Delivery',
    emptyBagCheckout: 'Empty Bag Checkout',
    youreShoppingListIsEmpty: 'Youre Shopping List Is Empty😭',
    looksLikeYouEndedUpHereByRemovingAllTheFoodInYourShoppingList: 'Looks like you ended up here by removing all the food in your shopping list...',
    returnToDeliciousHomepage: 'Return To Delicious Homepage',
    findOutMore: 'Find Out More',
    ourStory: 'Our Story',
    FAQs: 'FAQs',
    policies: 'Policies',
    contactUs: 'Contact Us',
    WereReadyToHelp: 'Were Ready To Help!',
    subscribeToGetExclusiveOffersAndCoupons: 'Subscribe To Get Exclusive Offers And Coupons',
    subscribe: 'Subscribe',
    theSalamiTopClassProsciuttoPepperoniNewYorkPepperoniHamAndAllMeatProductsWeUseInOurPizzasAreMadeOfChickenAndOr100BeefMeat: 'The salami, Top Class Prosciutto©, pepperoni, New York pepperoni, ham and all meat products we use in our pizzas are made of chicken and/or 100% beef meat',
    somethingWentWrong: 'Something Went Wrong',
    tryToRefreshThePage: 'Try To Refresh The Page',
    complete: 'COMPLETE',
    addToCard: 'ADD TO CART',
    back: 'BACK',
    ingredientsInThe: 'Ingredients In The {{product}}',
    loading: 'Loading',
    pickSomeExtraIngredientsToEnrichYourPizza: 'Pick Some Extra Ingredients To Enrich Your {{menuCategory}}',
    youCanRemoveAnyIngredient: 'You Can Remove Any Ingredient',
    addOneOrMoreAdditionsToYourCrust: 'Add One Or More Additions To Your Crust',
    extraSauce: 'Extra Sauce',
    signYourPizzaWithYourFavoriteSauce: 'Sign Your Pizza With Your Favorite Sauce',
    selectTheCrustType: 'Select The Crust Type',
    bestSeller: 'BEST SELLER',
    ingredients: 'Ingredients',
    addToCardback: 'Add To Card',
    letsDoubleCheckYourPhone: 'Lets double check your contact phone number',
    yourOrderCreatedSuccessfully: 'Your order created successfully',
    orderCreationFailed: 'Order creation has failed',
    youCanScrollToPreview: 'You can scroll-up/down to overview the order',
    cancel: 'Cancel',
    confirmOrder: 'Confirm Order',
    goBack: "Go Back",
    tryAgain: 'Try Again',
    closed: 'We are closed',
    deliveyTime: 'Delivery Time',
    addExtraIngredients: "Add Extra Ingredients",
    checkout: 'Checkout',
    ifYouWantToTrackYourOrderWeNeedYourEmail: 'If You Want To Track Your Order We Need Your Email (Optional)',
    enterYourPhoneNumberToContact: "Enter Your Phone Number To Contact",
    yourEmailAddress: 'Your email address'
}