import React from 'react';
import classnames from 'classnames';
import { Text } from 'components';
import info from 'config/info';

import './Skills.scss';

export interface SkillsProps {
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

const Skill = ({ skill }) => (
    <div className="skills__skill">
        <Text className="skills__skill--text mb-0 mt-0">{skill}</Text>
    </div>
);

const Skills: React.FC<SkillsProps> = ({ className, style, t }) => {
    const classNames = classnames(['skills', 'col-center', 'row-center', className]);

    // TODO Extract to a prop
    const skills = [
        t('home:developer.skillList.teamwork'),
        t('home:developer.skillList.teamManagement'),
        t('home:developer.skillList.communication'),
        t('home:developer.skillList.flexibility'),
        t('home:developer.skillList.analytical'),
        t('home:developer.skillList.leadership'),
    ];

    return (
        <div className={classNames} style={style}>
            {skills.map((skill, index) => (
                <Skill skill={skill} key={`skill-${index}`} />
            ))}
        </div>
    );
};

export default Skills;
