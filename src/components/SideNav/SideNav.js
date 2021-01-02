import React from 'react';
import logo from './aks.jpg';
import link from './linkdin.png';
import git from './github.png';
import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={logo}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Akshay Mulay</h2>
            <p className="subtitle">"A Cadet Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p>CONNECT WITH ME</p>
                 <a href="https://www.linkedin.com/in/akshay-mulay-32989b16a"><img
                src={link}
                alt="avatar"
                width="120" height="100"
            /></a>
             <a href="https://github.com/akshaymulay/opencv.git"><img
                src={git}
                alt="avatar"
                width="120" height="100"
            /></a>
            </div>
        </div>
    );
};