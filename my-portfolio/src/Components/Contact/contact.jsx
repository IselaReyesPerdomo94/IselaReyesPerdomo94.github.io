import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
    return(
        <div className="contact-container">
            <label className="contact-labels">
                Github 
                <FontAwesomeIcon icon={faGithubAlt} />
            </label>
            <label className="contact-labels">
                LinkedIn
                <FontAwesomeIcon icon={faLinkedinIn} /> 
            </label>
            <label className="contact-labels">
                CV
                <FontAwesomeIcon icon={faFile} /> 
            </label>
            <label className="contact-labels">
                Email
                <FontAwesomeIcon icon={faEnvelope} /> 
            </label>
        </div>
    )
}

export default Contact;