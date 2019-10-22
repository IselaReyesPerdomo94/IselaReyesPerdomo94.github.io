import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt, faArchive, faFireAlt } from '@fortawesome/free-solid-svg-icons';
import {faHtml5, faJsSquare, faCss3Alt, faReact, faNodeJs, faNpm} from '@fortawesome/free-brands-svg-icons';

export const Html = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={faHtml5} />
        <span className="icon-text">HTML 5</span>
    </div>
}

export const Css = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={faCss3Alt} />
        <span className="icon-text">CSS</span>
    </div>
}

export const Javascript = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faJsSquare} />
        <span className="icon-text">Javascript</span>
    </div>
}

export const Map = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faMapMarkedAlt} />
        <span className="icon-text">Google geolocation</span>
    </div>
}

export const React = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faReact} />
        <span className="icon-text">React</span>
    </div>
}

export const NodeJs = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faNodeJs} />
        <span className="icon-text">Node JS</span>
    </div>
}

export const LocalStorage = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faArchive} />
        <span className="icon-text">Local Storage</span>
    </div>
}

export const Firebase = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faFireAlt} />
        <span className="icon-text">Firebase</span>
    </div>
}

export const Npm = () => {
    <div className="tool-circle">
        <FontAwesomeIcon className="icon-tools" icon={ faNpm} />
        <span className="icon-text">NPM</span>
    </div>
}
