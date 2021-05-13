import React from 'react';
import classnames from 'classnames';
import { Text, Link } from 'components';
import info from 'config/info';

import './Projects.scss';

export interface ProjectsProps {
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

const Project = ({ image, title, description, link }) => (
    <div className="projects__project flex">
        <div className="projects__project--imageContainer">
            <img src={image} alt={`${title} logo`} className="projects__project--image" />
        </div>
        <div className="projects__project--container">
            <Text align="left" typo="h5" className="projects__project--text mt-0">
                <Link
                    href={link}
                    text={title}
                    textProps={{ color: 'black', typo: 'h5' }}
                    className="projects__project--link"
                ></Link>
            </Text>
            <Text align="left" className="projects__project--text mb-0 mt-0">
                {description}
            </Text>
        </div>
    </div>
);

const Projects: React.FC<ProjectsProps> = ({ className, style, t }) => {
    const classNames = classnames(['projects', className]);

    // TODO Extract to a prop
    const projects = [
        {
            image: '/images/projects/netflix-viewing-stats.png',
            title: t('home:projects.projectList.netflix-viewing-stats.title'),
            description: t('home:projects.projectList.netflix-viewing-stats.description'),
            link: info.projects.netflixViewingStats,
        },
        {
            image: '/images/projects/angular.png',
            title: t('home:projects.projectList.ngx-tableau.title'),
            description: t('home:projects.projectList.ngx-tableau.description'),
            link: info.projects.ngxTableau,
        },
        {
            image: '/images/projects/angular-js.svg',
            title: t('home:projects.projectList.angular-reservation.title'),
            description: t('home:projects.projectList.angular-reservation.description'),
            link: info.projects.angularReservation,
        },
    ];

    return (
        <div className={classNames} style={style}>
            {projects.map(({ image, title, description, link }, index) => (
                <Project image={image} title={title} description={description} link={link} key={`project-${index}`} />
            ))}
        </div>
    );
};

export default Projects;
