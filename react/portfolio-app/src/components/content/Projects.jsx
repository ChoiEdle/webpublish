
export function Project ({img, alt, title, desc}) {
    return (
        <>
            <img class="project-img" src={img} alt={alt} />
            <div class="project-metadata">
                <h3 class="project-metadata-title">{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    );
}

export function Projects () {
    const projects = [
        {"img":"/images/projects/project1.webp", "alt":"project #1", "title":"Project #1", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project2.webp", "alt":"project #2", "title":"Project #2", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project3.webp", "alt":"project #3", "title":"Project #3", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project4.webp", "alt":"project #4", "title":"Project #4", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project5.webp", "alt":"project #5", "title":"Project #5", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project6.webp", "alt":"project #6", "title":"Project #6", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project7.webp", "alt":"project #7", "title":"Project #7", "desc":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project8.webp", "alt":"project #8", "title":"Project #8", "desc":"Clone Coding with HTML, CSS"}
    ];
    return (
        <ul class="projects">
            {projects && projects.map(project => 
                <li class="project">
                    <Project img={project.img} alt={project.alt} title={project.title} desc={project.desc}/>
                </li>
            )}
        </ul>
    );
}
