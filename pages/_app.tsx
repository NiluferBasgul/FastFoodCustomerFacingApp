import "styles/main.scss";
import 'nprogress/nprogress.css'
import "@brainhubeu/react-carousel/lib/style.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-step-progress-bar/styles.css";
import { Provider } from "../store/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import NProgress from "nprogress";
import { ToastContainer } from "react-toastify";
import ReactGA from 'react-ga';
import setLanguage from 'next-translate/setLanguage'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


Sentry.init({
  dsn: "https://9f56655346d4407b9406f8bc46046171@o386766.ingest.sentry.io/5737608",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  // To reduce the volume of performance data captured, 
  // change tracesSampleRate to a value between 0 and 1.
  tracesSampleRate: 0.1,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);

    ReactGA.initialize('UA-172923269-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  return (
    <Provider>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;