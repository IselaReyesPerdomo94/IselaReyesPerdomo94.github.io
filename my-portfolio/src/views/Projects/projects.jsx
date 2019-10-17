import React from 'react';
import CardProject from '../../Components/CardProject/cardproject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faJsSquare, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import labcar from '../../img/labcar.png';
import './projects.css';

const Projects = () => {
    const labcarTools2 = (
        <div className="tool-box">
            <label>
                <FontAwesomeIcon className="icon-tools" icon={faHtml5} />
            </label>
            <label>
                <FontAwesomeIcon className="icon-tools" icon={faJsSquare} />
            </label>
            <label>
                <FontAwesomeIcon className="icon-tools" icon={faCss3Alt} />
            </label>
            <label>
                <FontAwesomeIcon className="icon-tools" icon={faMapMarkedAlt} />
            </label>
        </div>
    )
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <CardProject 
                title="Lab Car"
                date="July 2019"
                txt="Web app that offers transportation service to students.
                In this project I only focused in layout and google geolocation implementation that
                can detect location of costumer."
                tools={labcarTools2}
                image={labcar}
                atlImage="LabCar"
            />
        </section>
    )
}

export default Projects;