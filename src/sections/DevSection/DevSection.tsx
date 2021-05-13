import React from 'react';
import classnames from 'classnames';
import { Trans } from 'lang/i18n';
import { Text, Link, Skills } from 'components';
import info from 'config/info';

import './DevSection.scss';

export interface DevSectionProps {
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

const DevSection: React.FC<DevSectionProps> = ({ className, style, t }) => {
    const classNames = classnames(['dev-section', 'col-center', 'row-center', className]);
    return (
        <div className={classNames} style={style}>
            <Text typo="h1" tag="h3" color="white" className="mt-0">
                {t('home:developer.title')}
            </Text>
            <Text typo="h5" color="white" className="dev-section__description mt-0">
                <Trans i18nKey="home:developer.subtitle">
                    <Link
                        text="LinkedIn"
                        textProps={{ color: 'white', typo: 'h5' }}
                        href={info.socialMedia.linkedIn}
                        style={{ display: 'inline-block' }}
                    />
                </Trans>
            </Text>
            <Text typo="h4" color="white" weight="bold" ellipsis>
                {t('home:developer.skills')}
            </Text>
            <Skills t={t} />
        </div>
    );
};

export default DevSection;
