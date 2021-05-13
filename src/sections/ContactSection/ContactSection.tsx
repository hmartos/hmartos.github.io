import React from 'react';
import classnames from 'classnames';
import { SocialMedia, Text, Icon } from 'components';
import info from 'config/info';

import './ContactSection.scss';

export interface ContactSectionProps {
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

const ContactSection: React.FC<ContactSectionProps> = ({ className, style, t }) => {
    const classNames = classnames(['contact-section', 'col-center', 'row-center', className]);
    return (
        <div className={classNames} style={style}>
            <Text typo="h1" tag="h3" className="mt-0">
                {t('home:contact.title')}
            </Text>
            <Text typo="h5" className="mt-0 mb-0">
                {t('home:contact.subtitle')}
            </Text>
            <div className="contact-section__block mt-2">
                <Text typo="h4" ellipsis>
                    {t('home:contact.email')}
                </Text>
                <Icon icon={['fas', 'envelope']} width={40} href={`mailto:${info.contact.email}`} target="_self" />
            </div>
            <div className="contact-section__block mt-2">
                <Text typo="h4" ellipsis>
                    {t('home:contact.social')}
                </Text>
                <SocialMedia />
            </div>
        </div>
    );
};

export default ContactSection;
