import * as React from 'react';
import "../index.css"
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    return (
        <div className="page-footer">
            <div className="footer__title">Keep Movin</div>
            <div className="footer__page-description">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Sed mi neque, viverra id 
                lacinia a, vestibulum eget orci.
            </div>
            <a className="go-to__github" href="https://github.com/mlocekjakub/ProjecteElGrande" target="_blank">Github <GitHubIcon /></a>
        </div>
    );
}