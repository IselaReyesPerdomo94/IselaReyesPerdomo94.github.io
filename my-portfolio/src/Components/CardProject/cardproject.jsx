import React from 'react';
import './cardproject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';

const CardProject = (props) => {
    const {title, image, atlImage, txt, date, tools, codeURL, liveURL} = props;
    return(
        <article className="article">
                <figure className="figure-card">
                    <img src={image} alt={atlImage}/>
                </figure>
            <div className="flag-info">
                <h4 className="title">{title}</h4>
                <span className="date">{date}</span>
                    <p className="p-card">
                        {txt}
                    </p>
                    <input type="button" value="+" className="plus-button"/>
            </div>
            <div className="tools">
                <p>Tools used:</p>
                {tools}
            </div>
                <a className="links-to-code" href={codeURL}>
                    Code
                    <FontAwesomeIcon className="icon-card-project" icon={faCode} />
                </a>
                <a className="links-to-live" href={liveURL}>
                    Live <FontAwesomeIcon className="icon-card-project" icon={faGlobeAmericas} />
                </a>
        </article>
    )
} 

export default CardProject;