import React from 'react';
import './cardproject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';

const CardProject = (props) => {
    const {title, image, atlImage, txt, date, tools} = props;
    return(
        <article>
            <h4>{title}</h4>
            <p className="date">{date}</p>
            <div>
                <figure className="figure-card">
                    <img src={image} alt={atlImage}/>
                </figure>
                <p className="p-card">
                    {txt}
                </p>
            </div>
            <div className="tools">
                <p>Tools used:</p>
                {tools}
            </div>
            <div className="links-to">
                <a className="links-to-code">
                    Code
                    <FontAwesomeIcon className="icon-card-project" icon={faCode} />
                </a>
                <a className="links-to-live">
                    Live <FontAwesomeIcon className="icon-card-project" icon={faGlobeAmericas} />
                </a>
            </div>
        </article>
    )
} 

export default CardProject;