import React from 'react';
import classnames from 'classnames';

import './Text.scss';

export interface TextProps {
    /**
     * Tag
     */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'label' | 'small';
    /**
     * Typo
     */
    typo?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'label' | 'xxl' | 'xl' | 'small' | 'small-xs';
    /**
     * For attr label tag
     */
    for?: string;
    /**
     * Color style icon
     */
    color?: 'white' | 'black' | 'gray-light';
    /**
     * Font weight
     */
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'bolder';
    /**
     * Align text
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Icon size
     */
    size?: string | number;
    /**
     * Icon scale size
     */
    scale?: string | number;
    /**
     * Capitalize
     */
    capitalize?: boolean;
    /**
     * Uppercase
     */
    uppercase?: boolean;
    /**
     * Underline
     */
    underline?: boolean;
    /**
     * Italic
     */
    italic?: boolean;
    /**
     * Ellipsis
     */
    ellipsis?: boolean;
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
    /**
     * Other props
     */
    [otherProps: string]: any;
}

const Text: React.FC<TextProps> = ({
    tag: Tag = 'p',
    typo = 'p',
    size,
    scale,
    color,
    weight,
    align = 'center',
    capitalize = false,
    uppercase = false,
    underline = false,
    italic = false,
    ellipsis = false,
    className,
    style = {},
    children,
    for: htmlFor,
    ...otherProps
}) => {
    const classNames = classnames([
        'text',
        typo,
        color,
        weight,
        align,
        size ? `fs${size}` : '',
        {
            capitalize,
            uppercase,
            underline,
            italic,
            ellipsis,
        },
        className,
    ]);
    const styles = {
        ...(style || {}),
        ...(scale ? { fontSize: `${scale}rem`, lineHeight: `${scale}rem` } : {}),
    };

    return (
        <Tag className={classNames} style={styles} htmlFor={htmlFor} {...otherProps}>
            {children}
        </Tag>
    );
};

export default Text;
