import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import Config from 'config';
import Platform from 'services/platform.service';

import './Layout.scss';

export interface HeaderProps {
    /**
     * Header aniamted
     */
    animated?: boolean;
}

export interface LayoutProps {
    /**
     * Title meta tag
     */
    title?: string;
    /**
     * Description meta tag
     */
    description?: string;
    /**
     * Keywords meta tag
     */
    keywords?: string;
    /**
     * Header config
     */
    header?: HeaderProps;
    /**
     * Breadcrumbs Id
     */
    breadcrumbs?: string;
    /**
     * Footer config
     */
    footer?: any;
    /**
     * Analytics parameters
     */
    analytics?: any;
    /**
     * Router
     */
    router?: any;
    /**
     * Class name styles
     */
    className?: string;
    /**
     * Style
     */
    style?: any;
    /**
     * Slot component
     */
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, keywords, analytics, className, style, children }) => {
    const classNames = classnames(['layout', className]);

    return (
        <div className={classNames} style={style}>
            <Head>
                {title ? (
                    <title>
                        {title} | {Config.project.name}
                    </title>
                ) : (
                    <title>{Config.project.name}</title>
                )}
                {description ? <meta name="description" content={description}></meta> : null}
                {keywords ? <meta name="keywords" content={keywords}></meta> : null}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
                <meta name="apple-mobile-web-app-title" content="Roadmap Generator"></meta>
                <meta name="theme-color" content="#FFFFFF"></meta>
                <meta name="msapplication-TileColor" content="#FFFFFF"></meta>
                <meta name="msapplication-TileImage" content="/images/icons/apple-touch-icon-152x152.png"></meta>
                <link rel="icon" href="/favicon.ico?fav"></link>
                <link rel="manifest" href="/manifest.json"></link>
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon-60x60.png" sizes="60x60" />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon-76x76.png" sizes="76x76" />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon-120x120.png" sizes="120x120" />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon-152x152.png" sizes="152x152" />
                <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon-180x180.png" sizes="180x180" />
                {Platform.iOS ? (
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    />
                ) : (
                    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
                )}
                {typeof window !== 'undefined' && window.MSInputMethodContext && document?.['documentMode'] ? (
                    <script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"></script>
                ) : null}
            </Head>

            <div className="container">{children}</div>
            {/* <noscript>
                <iframe
                    title="googletagmanager"
                    src="https://www.googletagmanager.com/ns.html?id="
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript> */}
        </div>
    );
};

export default Layout;
