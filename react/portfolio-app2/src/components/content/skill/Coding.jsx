
export function Coding() {
    const skills = [
        {
            "name":"HTML",
            "per":"98%"
        },
        {
            "name":"CSS",
            "per":"90%"
        },
        {
            "name":"JavaScript",
            "per":"90%"
        },
        {
            "name":"TypeScript",
            "per":"85%"
        },
        {
            "name":"React",
            "per":"79%"
        },
        {
            "name":"NodeJS",
            "per":"68%"
        }
    ];
    return (
        <ul>
            {skills.map(skill => 
                <li className="bar">
                    <div className="bar-title">
                        <span>{skill.name}</span>
                        <span>{skill.per}</span>
                    </div>
                    <div className="bar-bg"><div className="bar-value" style={{width:skill.per}}></div></div>
                </li>
            )}
        </ul>
    );
}