import NextI18Next from 'next-i18next';
import { WithTranslation as WithTranslationi18nProps } from 'react-i18next';
import Config from 'config';
const path = require('path');

export type WithTranslationProps = WithTranslationi18nProps;
/**
 * See more info
 * https://github.com/isaachinman/next-i18next
 */
const options = {
    browserLanguageDetection: !Config.isDev,
    serverLanguageDetection: !Config.isDev,
    strictMode: false,
    defaultLanguage: 'en',
    otherLanguages: ['es'],
    localePath: path.resolve('./src/lang/locales'),
    interpolation: {
        format: function (value, format, lng) {
            return value;
        },
    },
};

const i18n = new NextI18Next(options);

export const withNamespaces = i18n?.['withNamespaces'];
export const Link = i18n.Link;
export const Trans = i18n.Trans;
export const appWithTranslation = i18n.appWithTranslation;
export const withTranslation = i18n.withTranslation;
export const config = i18n.config;
export default i18n;
