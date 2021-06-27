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
        title: 'Ethical Hacking Stories — Denial-of-Service to BiciMAD Bikes',
        link:
            'https://infosecwriteups.com/ethical-hacking-stories-denial-of-service-to-bicimad-bikes-e16e4b3f6bbb?source=friends_link&sk=8b4c33461c0c353477248dc9aedd7467',
    },
    {
        title: '9 Security Implications to Consider Before Deploying a Web App',
        link:
            'https://betterprogramming.pub/9-security-implications-to-consider-before-deploying-a-web-app-1f94a58c6fc9?source=friends_link&sk=bef098bb76af7456b83975c30d4aebfd',
    },
    {
        title: 'Remote Code Execution Through Cross-Site Scripting In Electron Apps',
        link:
            'https://infosecwriteups.com/remote-code-execution-through-cross-site-scripting-in-electron-f3b891ad637?source=friends_link&sk=8d9b030f83b4e2d5d3ce6a28d00e5cc1',
    },
    {
        title: 'Ethical Hacking Stories — Live Tracking of Voi Scooters',
        link:
            'https://medium.com/@h_martos/remote-live-tracking-of-voi-scooters-351689ba3bb9?sk=7f6a8307fe85b37193923df1aaa01dbd',
    },
    {
        title: 'An Ethical Hacking Story — The Yummy Days Case',
        link:
            'https://medium.com/@h_martos/an-ethical-hacking-story-the-yummy-days-case-a083b57a352c?sk=4751af5052e09f55ee1f22d24f26c873',
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
