import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
    return(
        <div className="contact-container">
            <div className="icon-label-container">
                <a className="contact-labels"
                    href="https://drive.google.com/open?id=1LwCotQp5_r6YPUphcOYy8nWTsSRvJOhK"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faFile} /> 
                </a>
                <span>Curriculum</span>
            </div>
            <div className="icon-label-container">
                <a className="contact-labels">
                    <FontAwesomeIcon icon={faMobileAlt} /> 
                </a>
                <span>686-238-11-96</span>
            </div>
            <div className="icon-label-container">
                <a className="contact-labels" 
                    href="https://github.com/IselaReyesPerdomo94" 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <span>IselaReyesPerdomo94</span>
            </div>
            <div className="icon-label-container">
                <a className="contact-labels"
                    href="https://www.linkedin.com/in/iselareyesperdomo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} /> 
                </a>
                <span>iselareyesperdomo</span>
            </div>
            <div className="icon-label-container">
                <a className="contact-labels" 
                href="mailto:reyesp.isela@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> 
                </a>
                <span>reyesp.isela@gmail.com</span>
            </div>
        </div>
    )
}

export default Contact;