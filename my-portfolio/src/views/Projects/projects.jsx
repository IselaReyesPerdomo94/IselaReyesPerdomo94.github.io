import React from 'react';
import CardProject from '../../Components/CardProject/cardproject';
import FrontBundle from '../../Midcomponents/BundleIcons/bundleicons';
import data from '../../data/data.json'; 
import './projects.css';

const Projects = () => {
    const container = (technologies, keyname) => (
        <div className="tool-box">
            <FrontBundle technologies={technologies} key={keyname}/>
        </div>
    )
    return(
        <section id="projects" className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-container">
                {  
                    data.projects.map(project => <CardProject
                        title={project.project}
                        date={project.date}
                        txt={project.breeze}
                        charge={project.charge}
                        description={project.description}
                        image={project.img}
                        altImage={project.altImage}
                        codeURL={project.code}
                        liveURL={project.live}
                        key={project.project}
                        tools={project.technologies && container(project.technologies, project.project)}
                    />)
                }
            </div>
        </section>
    )
}

export default Projects;