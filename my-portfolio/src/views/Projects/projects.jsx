import React from 'react';
import CardProject from '../../Components/CardProject/cardproject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faJsSquare, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import data from '../../data/data.json'; 
import './projects.css';

const Projects = () => {
    console.log(data.projects[0].img)
    const labcarTools2 = (
        <div className="tool-box">
            <div className="tool-circle">
                <label>
                    <FontAwesomeIcon className="icon-tools" icon={faHtml5} />
                </label>
                <span className="icon-text">HTML 5</span>
            </div>
            <div className="tool-circle">
                <label>
                    <FontAwesomeIcon className="icon-tools" icon={faJsSquare} />
                </label>
                <span className="icon-text">Javascript</span>
            </div>
            <div className="tool-circle">
                <label>
                    <FontAwesomeIcon className="icon-tools" icon={faCss3Alt} />
                </label>
                    <span className="icon-text">CSS</span>
            </div>
            <div className="tool-circle">
                <label>
                    <FontAwesomeIcon className="icon-tools" icon={faMapMarkedAlt} />
                </label>
                    <span className="icon-text">Google geolocation</span>
            </div>
        </div>
    )
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            {  
                data.projects.map(project => <CardProject
                    title={project.project}
                    date={project.date}
                    txt={project.description}
                    image={project.img}
                    altImage={project.altImage}
                    codeURL={project.code}
                    liveURL={project.live}
                    tools={labcarTools2}
                    key={project.project}
                />)
            }
        </section>
    )
}

export default Projects;