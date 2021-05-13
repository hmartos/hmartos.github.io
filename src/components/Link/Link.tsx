import React from 'react';
import classnames from 'classnames';
import { Text } from 'components';
import { TextProps } from 'components/Text/Text';

import './Link.scss';

export interface LinkProps {
    /**
     * Link text
     */
    text: string;
    /**
     * Text props
     */
    textProps?: TextProps;
    /**
     * Link href
     */
    href: string;
    /**
     * Link target
     * @default _blank
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

const Link: React.FC<LinkProps> = ({ text, href, target = '_blank', textProps = {}, className, style }) => {
    const classNames = classnames(['link', className]);
    return (
        <a href={href} target={target} className={classNames} style={style}>
            <Text tag="span" {...textProps} underline className="mb-0 mt-0">
                {text}
            </Text>
        </a>
    );
};

export default Link;
