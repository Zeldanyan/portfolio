import React from 'react';
import "./CardProject.scss";

const CardProject = (project) => {
    //project.title
    //project.info
    //project.img
    //project.link
    //project.github
    //project.tag
    return (
        <div className='CardProject'>
            <a href={project.link} target="_blank" className='banner'
                style={{
                    backgroundImage: `url(${project.img})`
                }}>
                <p className='title'>{project.title}</p>
                <p className='info'>{project.info}</p>
            </a>
            <ul>
                <li className='github'><a href={project.github}>Github</a></li>
                {project.tag.split(' ').map((i) =>
                    <li key={i}>{i}</li>)}
            </ul>
        </div>
    );
};

export default CardProject;