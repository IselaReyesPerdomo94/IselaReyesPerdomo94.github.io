import React from 'react';
import CardProject from '../../Components/CardProject/cardproject';
import data from '../../data/data.json'; 
import './projects.css';

const Projects = () => {
    const projects = async(url) =>{
        const response = await fetch(url);
        return await response.json();
    }
    return(
        <section id="projects" className="projects">
            <h2>Projects</h2>
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
                    />)
                }
            </div>
        </section>
    )
}

export default Projects;