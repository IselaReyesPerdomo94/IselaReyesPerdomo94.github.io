import React, {useState} from 'react';
import './cardproject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobeAmericas, faAngleUp} from '@fortawesome/free-solid-svg-icons';

const CardProject = (props) => {
    const [display, setDisplay] = useState(false);

    const handleClickPlusButton = () => setDisplay(!display);

    const {title, image, atlImage, txt, description, date, tools, codeURL, liveURL, charge} = props;
    
    const cardClass = `flag-info ${display ? "all-info": ""}`;
    const rotate = `${display ? "down" : "up" }`;
    const arrow = <FontAwesomeIcon icon={faAngleUp} className={rotate}/>
    
    return(
        <article className="article">
                <figure className="figure-card">
                    <img src={image} alt={atlImage}/>
                </figure>
            <div className={cardClass}>
                <h4 className="title">{title}</h4>
                <span className="date">{date}</span>
                    <p className={`${display ?"hide" : "p-card"}`}>
                        {txt}
                    </p>
                    <p className={`${display ?"p-card description" : "hide"}`}>
                        {description}
                    </p>
                    <p className={`${display ?"p-card description" : "hide"}`}>
                        {charge}
                    </p>

                <div className={`${display ? "tools":"hide"}`}>
                    <p className="date">Tools used:</p>
                    {tools}
                </div>
                <button 
                    type="button"   
                    className="plus-button"
                    onClick={handleClickPlusButton}
                >{arrow}</button>
                <div className="a-container">
                    <a  target='_blank' className={`${display ? "links-to-code": "hide"}`} href={codeURL}>
                        Code
                        <FontAwesomeIcon className="icon-card-project" icon={faCode} />
                    </a>
                    <a target="_blank" className={`${display ? "links-to-code": "hide"}`} href={liveURL}>
                        Live <FontAwesomeIcon className="icon-card-project" icon={faGlobeAmericas} />
                    </a>
                </div>
            </div>
        </article>
    )
} 

export default CardProject;