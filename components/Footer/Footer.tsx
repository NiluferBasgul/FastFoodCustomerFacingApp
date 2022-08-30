import axiosInstance from "data/axiosInstance";
import { getYear } from "date-fns";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    GoogleReCaptcha,
    GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3';
import { toast } from "react-toastify";

const FindOutMore = () => {
    const { t } = useTranslation('common');

    return (
        <div className="col-5 col-md-3 footer-left">
            <h2>{t('findOutMore')}</h2>
            <ul className="footer_list pb-4">
                <li><a>{t('ourStory')}</a></li>
                <li><a>{t('FAQs')}</a></li>
                <li><a>{t('policies')}</a></li>
                <li><a>{t('contactUs')}</a></li>
            </ul>
        </div>
    )
}

const ContactUs = () => {
    const { t } = useTranslation('common');

    return (
        <div className="col-7 col-md-3 order-md-last footer-right">
            <div className="footerbox">
                <h2>{t('contactUs')}</h2>
                {/* <p>{t('WereReadyToHelp!')}</p> */}
                <ul className="footer_list">
                    <li>hello@fastfood.mk</li>
                    <li className="phone">077 777 777</li>
                </ul>
            </div>
        </div>
    )
}

const EmailSubscription = () => {
    const { t } = useTranslation('common');

    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);


    const onSubscribe = async (e) => {
        e.preventDefault();
        if (disable) return;

        try {
            setLoading(true);
            const email = e?.target?.[0]?.value;

            if (!email) return;

            await axiosInstance.post("subscribe", { email });
            toast.success(`Subscription Succcessful!`)
        }
        catch (err) {
            console.log('failed');
        }

        setDisable(true)
        setLoading(false)
    }

    return (
        <div className="col-12 col-md-6 footer_middle">
            <h1 className='slogan'>BUILT IT. FIRE IT. LOVE IT.</h1>
            <p>{t('subscribeToGetExclusiveOffersAndCoupons')}</p>
            <form onSubmit={onSubscribe} className="hero-cta__form">
                <div className="elcontainer">
                    <div className="inner-wrap submit-container">
                        <div className="hero-cta__input-wrap">
                            <input name='email' type="email" id="hero-cta-email" placeholder={t`yourEmailAddress`} />
                        </div>
                        <button type="submit" className="emailsignup btn lift" disabled={loading || disable}>
                            {loading ? `...` : t`subscribe`}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

const Footer = () => {
    const { t } = useTranslation('common');
    const router = useRouter();

    return (
        // <GoogleReCaptchaProvider
        //     reCaptchaKey='6Le-464aAAAAALxg-ZAhQxa2d0qktx4snt0BMXPj'
        //     language={router.locale}
        //     useEnterprise={true}
        //     scriptProps={{
        //         async: false, // optional, default to false,
        //         defer: false, // optional, default to false
        //         appendTo: "body", // optional, default to "head", can be "head" or "body",
        //         nonce: undefined // optional, default undefined
        //     }}
        // >
        <footer className="footer mt-4" style={{ paddingBottom: '4rem' }}>
            <div className='container-sm'>
                
                <div className="col-lg-12 col-md-12 col-12 footer_main">
                    <div className="row">
                        <FindOutMore />
                        <ContactUs />
                        <EmailSubscription />
                    </div>
                </div>
                <div className="row footer_bottom">
                    <div className="col-lg-12 col-md-12 footer_copyright">
                        <p className="text-center">{t('theSalamiTopClassProsciuttoPepperoniNewYorkPepperoniHamAndAllMeatProductsWeUseInOurPizzasAreMadeOfChickenAndOr100BeefMeat')}</p>
                        <h2 className="text-center">Fast Food MK</h2>
                        <p className='text-center pt-0'> © {getYear(Date.now())} All rights reserved.</p>
                    </div>
                    <div className="col-md-12 col-12 col-lg-12 footer__partners d-flex justify-content-center user-select-none">
                        <img src="" />
                    </div>
                </div>
            </div>
            {/* <GoogleReCaptcha
                    onVerify={token => {
                        console.log(token);
                    }}
                /> */}
        </footer>
        // </GoogleReCaptchaProvider >
    )
}

export default Footer;