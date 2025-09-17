
export function Article({children, style}) {
    return (
        <article className={style}>
            {children}
        </article>
    );
}

export function SkillsTitle({title}) {
    return (
        <h3 className="skill-title">{title}</h3>
    );
}

export function CodingSkills({skills}) {
    return (
        <ul>
            {skills && skills.map(skill => 
                <li className="bar">
                    <div className="bar-title">
                        <span>{skill.title}</span>
                        <span>{skill.value}</span>
                    </div>
                    <div className="bar-bg"><div className="bar-value" style={{width: skill.width}}></div></div>
                </li>
            )}
        </ul>
    );
}