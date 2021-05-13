import React from 'react';
import classnames from 'classnames';
import { Trans } from 'lang/i18n';
import { Text, Link, FeaturedStories } from 'components';
import info from 'config/info';

import './CybersecuritySection.scss';

export interface CybersecuritySectionProps {
    /**
     * Class name styles
     */
    className?: string;
    /**
     * Style
     */
    style?: any;
    /**
     * Translation prop
     */
    t: any;
}

const CybersecuritySection: React.FC<CybersecuritySectionProps> = ({ className, style, t }) => {
    const classNames = classnames(['cybersecurity-section', 'col-center', 'row-center', className]);
    return (
        <div className={classNames} style={style}>
            <Text typo="h1" tag="h3" color="white" className="mt-0">
                {t('home:cybersecurity.title')}
            </Text>

            <Text typo="h5" color="white" className="cybersecurity-section__description mt-0">
                <Trans i18nKey="home:cybersecurity.subtitle">
                    <Link
                        text="CVE-2020-35717"
                        textProps={{ color: 'white', typo: 'h5' }}
                        href={info.other.cve_2020_35717}
                        style={{ display: 'inline-block' }}
                    />
                </Trans>
            </Text>
            <Text typo="h4" color="white" weight="bold" ellipsis>
                {t('home:cybersecurity.stories')}
            </Text>
            <FeaturedStories t={t} />
        </div>
    );
};

export default CybersecuritySection;
