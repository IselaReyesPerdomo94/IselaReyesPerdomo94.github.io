import React, {Fragment} from 'react';
import {Html, Css, Javascript, MapIcon, ReactIcon, NodeJs, LocalStorage, Firebase, Npm} from '../../Components/ToolsIcons/toolsicons'

export const TECHNOLOGIES = {
    css: Css,
    html: Html,
    js: Javascript,
    map: MapIcon,
    react: ReactIcon,
    node: NodeJs,
    local: LocalStorage,
    firebase: Firebase,
    npm: Npm
    };
    
const FrontBundle = ({technologies}) => {
    return(
        <Fragment>
            {technologies.map(tech => TECHNOLOGIES[tech])}
        </Fragment>
    )
}

export default FrontBundle