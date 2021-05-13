import React from 'react';
import classnames from 'classnames';
import { Trans } from 'lang/i18n';
import { Link, Projects, Text } from 'components';
import info from 'config/info';

import './ProjectsSection.scss';

export interface ProjectsSectionProps {
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

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className, style, t }) => {
    const classNames = classnames(['projects-section', 'col-center', 'row-center', className]);
    return (
        <div className={classNames} style={style}>
            <Text typo="h1" tag="h3" className="mt-0">
                {t('home:projects.title')}
            </Text>
            <Text typo="h5" className="projects-section__description mt-0">
                <Trans i18nKey="home:projects.subtitle">
                    <Link
                        text="StackOverflow"
                        textProps={{ color: 'black', typo: 'h5' }}
                        href={info.socialMedia.stackOverflow}
                        style={{ display: 'inline-block' }}
                    />
                    <Link
                        text="GitHub"
                        textProps={{ color: 'black', typo: 'h5' }}
                        href={info.socialMedia.github}
                        style={{ display: 'inline-block' }}
                    />
                </Trans>
            </Text>
            <Text typo="h4" weight="bold" ellipsis>
                {t('home:projects.myProjects')}
            </Text>
            <Projects t={t} />
        </div>
    );
};

export default ProjectsSection;
