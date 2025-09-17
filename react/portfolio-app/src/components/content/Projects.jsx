
export function Project ({img, alt, title, desc}) {
    return (
        <>
            <img className="project-img" src={img} alt={alt} />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    );
}

export function Projects ({projects}) {
    return (
        <ul className="projects">
            {projects && projects.map(project => 
                <li className="project">
                    <Project img={project.img} alt={project.alt} title={project.title} desc={project.desc}/>
                </li>
            )}
        </ul>
    );
}
