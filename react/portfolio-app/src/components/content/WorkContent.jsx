import { useState } from "react";

export function WorkContent({children, style}) {
    return (
        <ul className={style}>
            {children}
        </ul>
    );
}

export function Categories() {
    const [target, setTarget] = useState("All");
    const categories = [
        {"title":"All", "count":"8"},
        {"title":"Front-end", "count":"4"},
        {"title":"Back-end", "count":"2"},
        {"title":"Mobile", "count":"2"}
    ];
    const handleClick = (e) => {
        console.log(e.target);
        
        // setTarget();
    }
    return (
        <>
            {categories && categories.map(category => 
                <li>
                    <button className={target===category.title ? "category selected" : "category"} onClick={handleClick}>
                        {category.title}<span className="category-count">{category.count}</span>
                    </button>
                </li>
            )}
        </>
    );
}

export function Projects() {
    const projects = [
        {"img":"/images/projects/project1.webp", "msg":"project #1", "title":"Project #1", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project2.webp", "msg":"project #2", "title":"Project #2", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project3.webp", "msg":"project #3", "title":"Project #3", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project4.webp", "msg":"project #4", "title":"Project #4", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project5.webp", "msg":"project #5", "title":"Project #5", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project6.webp", "msg":"project #6", "title":"Project #6", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project7.webp", "msg":"project #7", "title":"Project #7", "subject":"Clone Coding with HTML, CSS"},
        {"img":"/images/projects/project8.webp", "msg":"project #8", "title":"Project #8", "subject":"Clone Coding with HTML, CSS"}
    ];
    return (
        <>
            {projects.map(project => 
                <li className="project">
                    <img className="project-img" src={project.img} alt={project.msg} />
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">{project.title}</h3>
                        <p>{project.subject}</p>
                    </div>
                </li>
            )}
        </>
    );
}