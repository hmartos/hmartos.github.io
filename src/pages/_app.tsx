import App from 'next/app';
import { appWithTranslation } from 'lang/i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Layout from 'layout/Layout';

import 'theme/styles.scss';

library.add(fas, fab);

function MyApp({ Component, pageProps, router }) {
    return (
        <Layout {...pageProps} router={router}>
            <Component {...pageProps} />
        </Layout>
    );
}

MyApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default appWithTranslation(MyApp);
