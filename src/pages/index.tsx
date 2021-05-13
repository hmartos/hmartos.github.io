import React from 'react';
import { withTranslation } from 'lang/i18n';
import ReactFullpage from '@fullpage/react-fullpage';
import { ContactSection, CybersecuritySection, DevSection, IntroSection, ProjectsSection } from 'sections';
import Pages from 'config/pages';
import Config from 'config';

import './index.scss';

const Home = ({ t }) => {
    const sectionsColor = ['#5A11A5', '#793DBB', '#9869D1', '#B694E7', '#D5C0FD'];
    const sections = [
        {
            content: <IntroSection t={t} />,
            className: 'section-1',
        },
        {
            content: <DevSection t={t} />,
            className: 'section-2',
        },
        {
            content: <CybersecuritySection t={t} />,
            className: 'section-3',
        },
        {
            content: <ProjectsSection t={t} />,
            className: 'section-4',
        },
        {
            content: <ContactSection t={t} />,
            className: 'section-5',
        },
    ];

    return (
        <div className="screen home">
            <ReactFullpage
                navigation
                licenseKey={Config.project.fullPageLicenseKey}
                sectionsColor={sectionsColor}
                render={() => (
                    <ReactFullpage.Wrapper>
                        {sections.map(({ content, className }, index) => (
                            <div key={`section-${index}`} className={`section ${className}`}>
                                {content}
                            </div>
                        ))}
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
    );
};

Home.getInitialProps = async ctx => Pages.home;

export default withTranslation()(Home);
