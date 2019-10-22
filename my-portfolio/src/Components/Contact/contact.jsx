import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
    return(
        <div className="contact-container">
            <a className="contact-labels" 
                href="https://github.com/IselaReyesPerdomo94" 
                target="_blank"
                rel="noopener noreferrer"
            >
                Github 
                <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <a className="contact-labels"
                href="https://www.linkedin.com/in/iselareyesperdomo/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
                <FontAwesomeIcon icon={faLinkedinIn} /> 
            </a>
            <a className="contact-labels"
                href="https://drive.google.com/open?id=1LwCotQp5_r6YPUphcOYy8nWTsSRvJOhK"
                target="_blank"
                rel="noopener noreferrer"
            >
                CV
                <FontAwesomeIcon icon={faFile} /> 
            </a>
            <a className="contact-labels" 
            href="mailto:reyesp.isela@gmail.com">
                Email
                <FontAwesomeIcon icon={faEnvelope} /> 
            </a>
        </div>
    )
}

export default Contact;