import { CrustAdditionType, CrustType, FoodSlug, IngredientType, KEYS, PaymentType, Sauces, Size } from "../../data/cucinaTree";

// To apply changes and generate translation JSON file
// Run command "yarn run translations"

export default {
    hello: 'Merhaba!',


    [PaymentType.CASH]: 'Nakit',
    [PaymentType.CREDIT_CARD]: 'Kredi Kartı',

    [Size.REGULAR]: 'Büyük Boy',
    [Size.FAMILY]: 'Aile Boyu',


    [IngredientType.CHEESE]: 'Peynir',
    [IngredientType.PROTEIN]: 'Protein',
    [IngredientType.SAUCE]: 'Sos',
    [IngredientType.SPICE]: 'Baharat',
    [IngredientType.VEGAN]: 'Vegan',
    [IngredientType.VEGGIE]: 'Vejetaryan',


    [CrustAdditionType.SESAME_SIDE]: "SUSAM KENAR",
    [CrustAdditionType.PARMESAN_SIDE]: "PARMEZAN KENAR",
    [CrustAdditionType.OLIVE_OIL_GARLIC_SIDE]: "SARIMSAK ZEYTİN-YAĞLI KENAR",
    [CrustAdditionType.CHILLY_PEPPERS_SIDE]: "ACILI BİBERLİ KENAR",
    [CrustAdditionType.FRESH_OREGANO_SIDE]: "TAZE KEKİK KENAR",
    [CrustAdditionType.GARLIC_BUTTER_SIDE]: "SARIMSAK TEREYAĞLI KENAR",


    [Sauces.BBQ]: 'BBQ',
    [Sauces.ALFREDO]: 'ALFREDO',
    [Sauces.MARINARA]: 'MARINARA',
    [Sauces.PESTO]: 'PESTO',
    [Sauces.TERIYAKI]: 'TERIYAKI',
    [Sauces.RANCH]: 'RANCH',
    [Sauces.THOMY_MAYO]: 'THOMY MAYONEZ',
    [Sauces.HEINZ_KETCHUP]: 'HEINZ KETÇAP',
    [Sauces.TRUFFLE_OIL]: 'TRUFFLE YAĞI',
    [Sauces.SPICY_MARINARA]: 'ACILI DOMATES SOSU',
    [Sauces.HOT_SAUCE]: 'ACI SOS',



    [KEYS.BASIL]: "FESLEĞEN",
    [KEYS.ONION]: "SOĞAN",
    [KEYS.ROASTED_CHICKEN]: "KAVRULMUS TAVUK",
    [KEYS.MARINARA]: "DOMATES SOSU",
    [KEYS.MOZZARELLA]: "MOZZARELLA",
    [KEYS.FRESH_MOZZARELLA]: "TAZE MOZZARELLA",
    [KEYS.BBQ_SAUCE]: "BARBEKÜ SOS",
    [KEYS.CRISPY_CHICKEN]: "KIZARMIŞ TAVUK ETİ",
    [KEYS.LETTUCE]: "MARUL",
    [KEYS.TOMATO]: "DOMATES",
    [KEYS.CORN]: "MISIR",
    [KEYS.SOUR_CREAM]: "SÜZME YOĞURT",
    [KEYS.PEPPER_SPICY_SAUCE]: "BIBER BAHARATLI SOSU",
    [KEYS.SUN_DRIED_TOMATOES]: "GÜNEŞTE KURUTULMUŞ DOMATES",
    [KEYS.PROSCIUTTO]: "PASTIRMA",
    [KEYS.HAM]: "İNEK KURU ETİ",
    [KEYS.SALAMI]: "TAVUK KURU ETİ",
    [KEYS.PEPPERONI]: "SUCUK",
    [KEYS.AVOCADO]: "AVOKADO",
    [KEYS.GORGONZOLA]: "GORGONZOLA PEYNİRİ",
    [KEYS.FETA_CHEESE]: "FETA PEYNİRİ",
    [KEYS.ROMANO_CHEESE]: "ROMANO PEYNİRİ",
    [KEYS.PARMESAN]: "PARMEZAN",
    [KEYS.OREGANO]: "KEKİK",
    [KEYS.ALFREDO_SAUCE]: "ALFREDO SOS",
    [KEYS.PESTO]: "PESTO SOS",
    [KEYS.VEGAN_MOZZARELLA]: "VEGAN MOZZARELLA",
    [KEYS.CHEDDAR]: "ÇEDAR PEYNİRİ",
    [KEYS.TOFU]: "TOFU",
    [KEYS.HOMEMADE_TUNA_MIX]: "EV YAPIMI TON BALIĞI KARIŞIMI",
    [KEYS.OIL_AND_VINEGAR]: "YAĞ VE SİRKE",
    [KEYS.ROASTED_RED_PEPPER]: "KIZARMIŞ KIRMIZI BİBER",
    [KEYS.MAYO]: "MAYONEZ",
    [KEYS.ITALIAN_DRESSING]: "İTALYAN SOSU",
    [KEYS.SMOKED_KASHKAVAL]: "TÜTSÜLENMİŞ KAŞAR",
    [KEYS.CEASER_DRESSING]: "SEZAR SOSU",
    [KEYS.ARUGULA]: "ROKA",
    [KEYS.KALAMATA_OLIVES]: "KALAMATA ZEYTİNİ",
    [KEYS.E_V_O_O]: "SIZMA ZEYTİNYAĞI",
    [KEYS.BALSAMIC]: "BALZAMİK",
    [KEYS.MIXED_GREENS]: "KARIŞIK YEŞİLLİKLER",
    [KEYS.RED_ONION]: "KIRMIZI SOĞAN",
    [KEYS.CUCINA_SIGNATURE_SAUCE]: "CUCİNA İMZALI SOS",
    [KEYS.GOAT_CHEESE]: "KEÇİ PEYNİRİ",
    [KEYS.CRANBERRIES]: "KIZILCIK",
    [KEYS.CRUSHED_ALMONDS]: "KIRILMIŞ BADEMLER",
    [KEYS.ALMONDS_AND_CREAMY_BALSAMIC]: "BADEM VE KREM BALZAMİKO",
    [KEYS.HONEY_MUSTERD_AND_MAYO]: "BALLI HARDAL VE MAYONEZ",
    [KEYS.CROUTONS_AND_SIDE_HOMEMADE_GARLIC_BREAD]: "KÜP EKMEK VE YANINDA SARIMSALKI EKMEK",
    [KEYS.CREAMY_CEASAR_DRESSING]: "KREMALI SEZAR SOSU",
    [KEYS.HOUSE_GREENS]: "SEBZE YEŞİLLİKLERİ",
    [KEYS.SHAVED_BEETS]: "İNCE DOĞRANMIŞ PANCAR",
    [KEYS.DRIED_CARNBERRIES]: "KURUMUŞ KIZILCIK",
    [KEYS.GREEK_DRESSING]: "YUNAN DRESSİNG",
    [KEYS.CUCUMBER]: "SALATALIK",
    [KEYS.FRESH_BASIL]: "TAZE FESLEĞEN",
    [KEYS.OLIVE_OIL]: "ZEYTİN YAĞI",
    [KEYS.SEA_SALT]: "DENİZ TUZU",
    [KEYS.ARUGULA]: "TAZE ROKA",
    [KEYS.CROTON]: "CROTON",
    [KEYS.ROASTED_HOT_PEPPER]: "KAVRULMUŞ KIRMIZI BİBER",
    [KEYS.FRESH_PEPPER]: "TAZE BİBER",
    [KEYS.CHICKPEAS]: "NOHUT",
    [KEYS.FRESH_MIXED_CHEESE]: "TAZE KARIŞIK PEYNİR",
    [KEYS.BOILED_EGG]: "KAYNAMIŞ YUMURTA",
    [KEYS.OLIVE]: "ZEYTİN",
    [KEYS.HONEY_MUSTARD]: "BALLI HARDAL",
    [KEYS.MOZZARELLA]: "TÜMÜYLE DOĞAL MOZARELA PEYNİRİ",
    [KEYS.ROASTED_CHICKEN]: "KAVRULMUŞ BARBEKÜLÜ TAVUK",
    [KEYS.CARAMELIZED_ONION]: "KARAMELİZE SOĞAN",
    [KEYS.TRUFFLE_OIL]: "TRUFFLE YAĞI",
    [KEYS.MOZZARELLA]: "EKSTRA TÜMÜYLE DOĞAL MOZARELA PEYNİRİ",
    [KEYS.ROASTED_PINEAPPLE]: "KAVRULMUŞ ANANAS",
    [KEYS.PICKLED_JALAPENOS]: "TR_PICKLED_JALAPENOS",
    [KEYS.TOMATOES_SAUCE]: "DOMATES SOSU",
    [KEYS.MUSHROOMS]: "MANTAR",
    [KEYS.HEINZ_KETCHUP]: "HEINZ KETÇAP",
    [KEYS.EGG]: "YUMURTA",
    [KEYS.SESAME_SEEDS]: "SUSAM TANELERİ",
    [KEYS.OLIVE_OIL_AND_GARLIC]: "ZEYTİN YAĞI VE SARIMSAK",
    [KEYS.SPINACH]: "ISPANAK",
    [KEYS.CURRY_MARINARA_SAUCE]: "KÖRİ-MARİNARA SOS",
    [KEYS.PINEAPPLE]: "ANANAS",
    [KEYS.TERIYAKI_SAUCE]: "TERİYAKİ SOS",
    [KEYS.CREAMY_CURRY]: "KREMALI KÖRİ",
    [KEYS.GARLIC_BUTTER]: "SARIMSAKLI TEREYAĞI",
    [KEYS.BROCCOLI]: "BROKOLİ",
    [KEYS.FRESH_PARSLEY_LEAVES]: "TAZE MAYDONOZ YAPRAKLARI",
    [KEYS.RICCOTTA]: "İTALYAN PEYNİRİ",
    [KEYS.HOMEMADE_BREADED_CHICKEN_FILLET]: "EV YAPIMI GALETE UNLANMIŞ TAVUK GÖĞSÜ",
    [KEYS.TOPPED_OF_CHEESE]: "PEYNİRLE KAPLAMA",



    [FoodSlug.THE_NEW_YORKER_PIZZA]: 'the-new-yorker-pizza',
    [FoodSlug.CLASSIC_CHEESE_PIZZA]: 'classic-cheese-pizza',
    [FoodSlug.POLLO_ALLA_GORGONZOLA_PIZZA]: 'pollo-alla-gorgonzola-pizza',
    [FoodSlug.PROSCIUTTO_PIZZA]: 'prosciutto-pizza',
    [FoodSlug.LA_BIANCA_PIZZA]: 'la-bianca-pizza',
    [FoodSlug.BBQ_CHICKEN_PIZZA]: 'bbq-chicken-pizza',
    [FoodSlug.THE_REAL_TUNA_PIZZA]: 'the-real-tuna-pizza',
    [FoodSlug.CHICKEN_PESTO_PIZZA]: 'chicken-pesto-pizza',
    [FoodSlug.HAWAIIAN_PIZZA]: 'hawaiian-pizza',
    [FoodSlug.BREAKFAST_PIZZA]: 'breakfast-pizza',
    [FoodSlug.CAPRICOZA_PIZZA]: 'capricoza-pizza',
    [FoodSlug.QUATTRO_FORMAGGIO_PIZZA]: 'quattro-formaggio-pizza',
    [FoodSlug.WHITE_CHICKEN_CURRY_PIZZA]: 'white-chicken-curry-pizza',
    [FoodSlug.RED_CHICKEN_CURRY_PIZZA]: 'red-chicken-curry-pizza',
    [FoodSlug.MUCH_MEAT_PIZZA]: 'much-meat-pizza',
    [FoodSlug.PEPPERONI_PIZZA]: 'pepperoni-pizza',
    [FoodSlug.THE_FARMERS_MARKET_PIZZA]: 'the-farmers-market-pizza',
    [FoodSlug.CHICKEN_TERIYAKI]: 'the-chicken-teriyaki-pizza',
    // Pizzas End

    // Wraps Start
    [FoodSlug.THE_GOAT_WRAP]: 'the goat wrap',
    [FoodSlug.CALIFORNIAN_WRAP]: 'californian wrap',
    [FoodSlug.CHICKEN_MILANESE_WRAP]: 'chicken milanese wrap',
    [FoodSlug.CAPRESE_WRAP]: 'caprese wrap',
    [FoodSlug.CHICKEN_CAESAR_WRAP]: 'chicken caesar wrap',
    [FoodSlug.THE_TUNA_WRAP]: 'the tuna wrap',
    [FoodSlug.EL_DIABLO_WRAP]: 'el diablo wrap',
    [FoodSlug.ITALIANO_WRAP]: 'italiano wrap',
    // Wraps End

    // Paninis Start
    [FoodSlug.THE_GOAT_PANINI]: 'the goat panini',
    [FoodSlug.CALIFORNIAN_PANINI]: 'californian panini',
    [FoodSlug.CHICKEN_MILANESE_PANINI]: 'chicken milanese panini',
    [FoodSlug.CAPRESE_PANINI]: 'caprese panini',
    [FoodSlug.CHICKEN_CAESAR_PANINI]: 'chicken caesar panini',
    [FoodSlug.THE_TUNA_PANINI]: 'the tuna panini',
    [FoodSlug.EL_DIABLO_PANINI]: 'el diablo panini',
    [FoodSlug.ITALIANO_PANINI]: 'italiano panini',
    // Paninis End

    // Salads Start
    [FoodSlug.CAESAR_SALAD]: 'caesar salata',
    [FoodSlug.BEETS_AND_GOATS_SALAD]: 'beats and goats salata',
    [FoodSlug.GREEK_SALAD]: 'greek salata',
    [FoodSlug.TOMATOES_AND_MOZZARELLA]: 'tomatoes and mozzarella salata',
    [FoodSlug.CUCINA_SALAD]: 'cucina salata',
    [FoodSlug.DA_LIR_SALAD]: 'da-lir salata',
    // Salads End

    // Pastas Start
    [FoodSlug.CHICKEN_PARM_PASTA]: 'chicken parm makarna',
    [FoodSlug.LOVE_TIE_PASTA]: 'love tie makarna',
    [FoodSlug.CHICKEN_AND_BROCCOLI_PASTA]: 'chicken and broccoli makarna',
    [FoodSlug.BAKED_ZITI_PASTA]: 'baked makarna',
    [FoodSlug.PENNE_ALLA_GORGONZOLA_PASTA]: 'penne alla gorgonzola makarna',
    [FoodSlug.PASTA_ALLA_CURRY]: 'pasta alla curry',
    [FoodSlug.CHICKEN_ALFREDO_PASTA]: 'chicken alfredo makarna',
    // Pastas End

    // Dinners Start
    [FoodSlug.CHICKEN_PARM_DINNER]: 'chicken parm akşam yemeği',
    [FoodSlug.CURRY_CHICKEN_DINNER]: 'curry chicken akşam yemeği',
    [FoodSlug.ALFREDO_CHICKEN_DINNER]: 'alfredo chicken akşam yemeği',
    [FoodSlug.CRISPY_CHICKEN_DINNER]: 'crispy chicken akşam yemeği',
    // Dinners End

    // Sides Start
    [FoodSlug.FRENCH_FRIES]: "patates kızartması",
    [FoodSlug.CHEESY_FRIES]: "peynirli patates kızartması",
    [FoodSlug.PIZZA_FRIES]: "tr_pizza-fries",
    [FoodSlug.X6_CHICKEN_WINGS]: '6 adet tavuk kanadı',
    [FoodSlug.X12_CHICKEN_WINGS]: '12 adet tavuk kanadı',
    // Sides End

    // Soda Drinks Start
    [FoodSlug.COCA_COLA_0_5L]: 'Coca Cola 0-5l',
    [FoodSlug.FANTA_0_5L]: 'Fanta 0-5l',
    // Soda Drinks End

    // Juices & Smoothies Start
    [FoodSlug.FRESHLY_SQUEEZED_ORANGE_JUICE]: 'Taze sıkılmış portokal suyu',
    // Juices & Smoothies End

    // Desserts Start
    [FoodSlug.THE_REAL_CHEESECAKE]: 'cheesecake',
    [FoodSlug.BROWNY]: 'browny',
    // Desserts End

    // Crust Start
    [CrustType.CLASSIC_WHITE]: 'klasik beyaz',
    [CrustType.GLUTEN_FREE]: 'glütensiz',
    [CrustType.WHOLE_WHEAT]: 'tam buğday',
    // Crust End


    orderNow: 'Sipariş Ver',
    finalPrice: 'Son Fiyat',
    totalShoppingBag: 'Toplam Alışveriş Sepeti',
    extraIngredients: 'Ekstra Malzemeler',
    disabledIngredients: 'Geçersiz Kılınan Malzemeler',
    crustType: 'Hamur Tipi',
    sauceOnTop: 'Üst Kısmına Sos',
    crustAdditions: 'Hamur Eklemeleri',
    remove: 'Sil',
    customize: 'Düzenle',
    free: 'Bedava',
    addressForYourOrder: 'Siparişiniz İçin Adresiniz',
    addNewAddress: 'Yeni Adres Ekle',
    enterYourPhoneNumberNumberToContact: 'İletişim İçin Telefon Numaranızı Girin',
    example: 'Örnek',
    leaveAComment: 'Yorum Bırak',
    commentCanHaveMaximum300Characters: 'Yorum Maksimum 300 Karakter İçerebilir.',
    paymentMethod: 'Ödeme Şekli',
    cash: 'Nakit',
    creditCard: 'Kredi Kartı',
    agreeTo: 'Kabul ediyorum',
    termsAndConditions: 'Şartlar Ve Koşullar',
    youMustAgreeBeforeSubmittingTheOrder: 'Siparişi Göndermeden Önce Kabul Etmelisiniz.',
    required: 'Gereklidir',
    protectTheEnvironment: 'Çevreyi Koru',
    dontAddPlastic: 'Plastik Çatal Kaşık vs Eklemeyin',
    ordering: 'Sipariş Veriliyor...',
    total: 'Toplam',
    ASAP: 'HEMEN',
    deliveryTime: 'Teslimat Süresi',
    deliveryFee: 'Teslimat Ücreti',
    adding: 'Ekleniyor',
    add: 'Ekle',
    changeOrderType: 'Sipariş Türünü Değiştir',
    takeAway: 'Paket Servisi',
    delivery: 'Teslimat',
    emptyBagCheckout: 'Alışveriş Sepetini Boşalt',
    youreShoppingListIsEmpty: 'Sizin Alışveris Sepetiniz Boş😭',
    looksLikeYouEndedUpHereByRemovingAllTheFoodInYourShoppingList: 'Alışveriş Listenizdeki Tüm Yiyecekleri Kaldırarak Burada Sona Gelmiş Gibi Görünüyor...',
    returnToDeliciousHomepage: 'Lezzetli Anasayfaya Geri Dön',
    findOutMore: 'Daha Fazlasını Bul',
    ourStory: 'Bizim Hikayemiz',
    FAQs: 'Sıkça Sorulan Sorular',
    policies: 'Politikalar',
    contactUs: 'Bize Ulaşın',
    WereReadyToHelp: 'Yardım Etmeye Hazırız!',
    subscribeToGetExclusiveOffersAndCoupons: 'Özel Teklifler ve Kuponlar Almak İçin Abone Olun',
    subscribe: 'Abone Ol',
    theSalamiTopClassProsciuttoPepperoniNewYorkPepperoniHamAndAllMeatProductsWeUseInOurPizzasAreMadeOfChickenAndOr100BeefMeat: 'Pizzalarımızda kullandığımız: Salam, Birinci Sınıf Prosciutto ©, pepperoni, New York sucuğu, kuru et  ve tüm et ürünleri tavuk ve  veya %100 dana etinden yapılmaktadır ',
    tryToRefreshThePage: 'Sayfayı Yenilemeyi Deneyin',
    complete: 'Tamamlayınız',
    addToCard: 'Karta Ekle',
    back: 'Geri',
    ingredientsInThe: '{{product}} içindeki malzemeler',
    loading: 'Yükleniyor...',
    pickSomeExtraIngredientsToEnrichYourPizza: '{{menuCategory}}\'inizi Zenginleştirmek İçin Ekstra Malzemeler Seçin',
    youCanRemoveAnyIngredient: 'Herhangi Bir Malzemeyi Kaldırabilirsiniz',
    addOneOrMoreAdditionsToYourCrust: 'Hamurunuza Bir veya Daha Fazla Malzeme Ekleyin',
    extraSauce: 'Ekstra Sos',
    signYourPizzaWithYourFavoriteSauce: 'En Sevdiğiniz Sosla Pizzanızı İmzalayın',
    selectTheCrustType: 'Hamur Tipi Seçiniz',
    bestSeller: 'En Çok Satan',
    ingredients: 'Malzemeler',
    addToCardback: 'Kartı Geri EKle',
    letsDoubleCheckYourPhone: 'Telefon numaranızı son bir kez daha gözden geçirin',
    yourOrderCreatedSuccessfully: 'Siparişiniz başarılı bir şekilde oluşturuldu',
    orderCreationFailed: 'Sipariş oluşturmada bir hata oluştu',
    youCanScrollToPreview: 'Yukarı yada aşağı kaydırarak siparişinizi önizleyebilirsiniz',
    cancel: 'İptal',
    confirmOrder: 'Siparişi Onaylayın',
    goBack: "Geriye Git",
    tryAgain: 'Tekrar Dene',
    closed: 'Kapalıyız',
    deliveyTime: 'Teslimat Süresi',
    addExtraIngredients: "Ekstra Malzeme Ekleyin",
    checkout: 'Ödemeye Geçin',
    ifYouWantToTrackYourOrderWeNeedYourEmail: 'Sipariş takibi için e-postanıza ihtiyacımız var (Opsiyonel)',
    enterYourPhoneNumberToContact: 'İletişim için telefon numaranızı girin',
    somethingWentWrong: 'Birşeyler ters gitti',
    yourEmailAddress: 'E-posta adresiniz',
}