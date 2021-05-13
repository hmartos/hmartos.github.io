import React from 'react';
import classnames from 'classnames';
import { Icon } from 'components';
import info from 'config/info';

import './SocialMedia.scss';

export interface SocialMediaProps {
    /**
     * Color for icons
     */
    color?: 'black' | 'white';
    /**
     * Class name styles
     */
    className?: string;
    /**
     * Style
     */
    style?: any;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ color = 'black', className, style }) => {
    const classNames = classnames(['social-media', className]);
    const icons = [
        {
            icon: 'linkedin',
            href: info.socialMedia.linkedIn,
        },
        {
            icon: 'stack-overflow',
            href: info.socialMedia.stackOverflow,
        },
        {
            icon: 'medium',
            href: info.socialMedia.medium,
        },
        {
            icon: 'github',
            href: info.socialMedia.github,
        },
        {
            icon: 'twitter-square',
            href: info.socialMedia.twitter,
        },
    ];
    return (
        <div className={classNames} style={style}>
            {icons.map(({ icon, href }, index) => (
                <Icon
                    icon={['fab', icon]}
                    width={40}
                    color={color}
                    href={href}
                    className="social-media__icon"
                    key={`social-media-icon-${index}`}
                />
            ))}
        </div>
    );
};

export default SocialMedia;
