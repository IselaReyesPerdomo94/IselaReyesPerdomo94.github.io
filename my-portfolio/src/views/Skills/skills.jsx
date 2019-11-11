import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArchive, faFireAlt, faPeopleCarry, faBrain, faUserCheck, faComments } from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faJsSquare, faCss3Alt, faReact, faNodeJs, faNpm, faGit, faGithubAlt} from '@fortawesome/free-brands-svg-icons';

import './skills.css'

const Skills = () => {
    const techs = [
                    {
                        icon: faHtml5,
                        label: "HTML"}, 
                    {
                        img: './img/js.svg',
                        label: "Javascript"
                    },
                    {
                        icon: faCss3Alt,
                        label: "CSS"
                    },
                    {
                        icon: faGit,
                        label: "Git"
                    },
                    {
                        icon: faGithubAlt,
                        label: "Github"
                    },
                    {
                        icon: faFireAlt,
                        label: "Firebase"
                    },
                    {
                        icon: faArchive,
                        label: "Local Storage"
                    },
                    {
                        icon: faReact,
                        label: "React JS"
                    },
                    {
                        icon: faNodeJs,
                        label: "Node JS"
                    },
                    {
                        icon: faNpm,
                        label: "npm"
                    }];

    const soft = [
                    {
                        icon: faPeopleCarry,
                        label: "Team work"
                    },
                    {
                        icon: faBrain,
                        label: "Self learner"
                    },
                    {
                        icon: faUserCheck,
                        label: "Conflict Resolution"
                    },
                    {
                        icon: faComments,
                        label: "Communication"
                    },
                ]
    return(
        <section className="skills-section">
            <h2>Skills</h2>
            <h4>Tech</h4>
            <div className="skills-container">
                {
                    techs.map(tech => <div className="skill-box">
                        <label className="skillsIcons">
                            <FontAwesomeIcon icon={tech.icon}/>
                            <img src={tech.img}/>
                        </label>
                        <span>{tech.label}</span>
                        </div>)
                }
            </div>
            <h4>Soft</h4>
            <div className="skills-container soft-container">
                {
                    soft.map(skill => <div className="skill-box">
                        <label className="skillsIcons soft">
                            <FontAwesomeIcon icon={skill.icon}/>
                        </label>
                        <span>{skill.label}</span>
                        </div>)
                }
            </div>
        </section>
    )
}

export default Skills;