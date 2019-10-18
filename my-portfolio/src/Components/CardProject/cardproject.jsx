import React from 'react';
import './cardproject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';

const CardProject = (props) => {
    const {title, image, atlImage, txt, date, tools} = props;
    return(
        <article className="article">
            <h4>{title}</h4>
            <p className="date">{date}</p>
                <figure className="figure-card">
                    <img src={image} alt={atlImage}/>
                </figure>
                <p className="p-card">
                    {txt}
                </p>
            <div className="tools">
                <p>Tools used:</p>
                {tools}
            </div>
                <a className="links-to-code">
                    Code
                    <FontAwesomeIcon className="icon-card-project" icon={faCode} />
                </a>
                <a className="links-to-live">
                    Live <FontAwesomeIcon className="icon-card-project" icon={faGlobeAmericas} />
                </a>
        </article>
    )
} 

export default CardProject;