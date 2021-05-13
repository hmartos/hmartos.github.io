import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Icon.scss';

/**
 * This component uses FontAwesomeIcon
 * @see https://fontawesome.com/how-to-use/on-the-web/using-with/react
 */
export interface IconProps {
    /**
     * FontAwesome Icon. Example: ['fab', 'linkedin']
     */
    icon;
    /**
     * FontAwesome icon size
     */
    size?: '1x' | '2x' | '3x';
    /**
     * Font size
     */
    fontSize?: number;
    /**
     * Width in pixels
     */
    width?: number;
    /**
     * Color
     */
    color?: string;
    /**
     * Link to redirect on click
     */
    href?: string;
    /**
     * href target
     * @default '_blank'
     */
    target?: string;
    /**
     * Class name styles
     */
    className?: string;
    /**
     * Style
     */
    style?: any;
}

const Icon: React.FC<IconProps> = ({
    icon,
    size = '1x',
    fontSize,
    width = 24,
    color = 'black',
    href,
    target = '_blank',
    className,
    style,
}) => {
    const classNames = classnames(['icon', href ? 'clickable' : null, className]);
    const openLink = url => window.open(url, target);
    return (
        <FontAwesomeIcon
            icon={icon}
            fontSize={fontSize}
            size={size}
            width={width}
            color={color}
            className={classNames}
            style={style}
            onClick={href ? () => openLink(href) : () => {}}
        />
    );
};

export default Icon;
