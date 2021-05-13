import React from 'react';
import classnames from 'classnames';
import { Trans } from 'lang/i18n';
import { Text, Link, Skills } from 'components';
import info from 'config/info';

import './FeaturedStories.scss';

export interface FeaturedStoriesProps {
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

// TODO Extract to a prop
const stories = [
    {
        title: '9 Security Implications to Consider Before Deploying a Web App',
        link: 'b',
    },
    {
        title: 'Remote Code Execution Through Cross-Site Scripting In Electron Apps',
        link: 'b',
    },
    {
        title: 'Finding Data Leaks In Online Formatters',
        link: 'b',
    },
    {
        title: 'Ethical Hacking Stories — Live Tracking of Voi Scooters',
        link: 'b',
    },
    {
        title: 'An Ethical Hacking Story — The Yummy Days Case',
        link: 'b',
    },
];

const FeaturedStories: React.FC<FeaturedStoriesProps> = ({ className, style, t }) => {
    const classNames = classnames(['featured-stories', className]);
    return (
        <ul className={classNames} style={style}>
            {stories.map(({ title, link }, index) => (
                <li className="featured-stories__story" key={`featured-story-${index}`}>
                    <Link
                        text={title}
                        textProps={{ color: 'white' }}
                        href={link}
                        className="featured-stories__story--link"
                    ></Link>
                </li>
            ))}
        </ul>
    );
};

export default FeaturedStories;
