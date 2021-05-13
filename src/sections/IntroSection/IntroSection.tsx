import React from 'react';
import classnames from 'classnames';
import { Avatar, Text, SocialMedia } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IntroSection.scss';

export interface IntroSectionProps {
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

const IntroSection: React.FC<IntroSectionProps> = ({ className, style, t }) => {
    const classNames = classnames(['intro-section', 'col-center', 'row-center', className]);
    const description = [
        {
            attribute: t('home:intro.description.1'),
        },
        {
            attribute: t('home:intro.description.2'),
        },
        {
            attribute: t('home:intro.description.3'),
        },
    ];

    return (
        <div className={classNames} style={style}>
            <Avatar />
            <Text typo="h1" tag="h1" color="white">
                {t('home:intro.title')}
            </Text>
            <Text typo="h4" tag="h2" color="white" className="mt-0" ellipsis>
                {t('home:intro.subtitle')}
            </Text>
            <div className="flex intro-section__description">
                {description.map(({ attribute }, index) => (
                    <Text
                        tag="span"
                        color="white"
                        className="flex intro-section__description--item"
                        key={`description-${index}`}
                    >
                        {attribute}
                    </Text>
                ))}
            </div>
            <SocialMedia color="white" className="mt-4" />
            <div className="intro-section__scroll">
                <Text typo="small" color="white" className="mb-0">
                    {t('home:intro.scroll')}
                </Text>
                <FontAwesomeIcon icon={['fas', 'chevron-down']} color="white" width={20} className="" />
            </div>
        </div>
    );
};

export default IntroSection;
