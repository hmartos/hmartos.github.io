import React from 'react';
import classnames from 'classnames';

import './Avatar.scss';

export interface AvatarProps {
    /**
     * Class name styles
     */
    className?: string;
    /**
     * Style
     */
    style?: any;
}

const Avatar: React.FC<AvatarProps> = ({ className, style }) => {
    const classNames = classnames(['avatar', 'col-center', className]);
    return <div className={classNames} style={style}></div>;
};

export default Avatar;
