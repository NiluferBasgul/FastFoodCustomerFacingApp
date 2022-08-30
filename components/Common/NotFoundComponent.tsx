import useTranslation from "next-translate/useTranslation";

const NotFoundComponent = () => {

    const { t } = useTranslation('common')

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row justify-content-center">
                <div className="col-12 col-md-5 col-xl-4">
                    <div className="text-center">
                        {/* Preheading */}
                        <h6 className="text-uppercase text-muted mb-4">
                           {t`emptyBagCheckout`}
                         </h6>
                        {/* Heading */}
                        <h1 className="display-4 mb-3">
                        {t`youreShoppingListIsEmpty`} 😭
                         </h1>
                        {/* Subheading */}
                        <p className="text-muted mb-4">
                        {t`looksLikeYouEndedUpHereByRemovingAllTheFoodInYourShoppingList`}
                        </p>
                        {/* Button */}
                        <a href="/" className="btn btn-lg btn-primary">
                        {t`returnToDeliciousHomepage`}
                        </a>
                    </div>
                </div>
            </div> {/* / .row */}
        </div>

    )
}

export default NotFoundComponent;