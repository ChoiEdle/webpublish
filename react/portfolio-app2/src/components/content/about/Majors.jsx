import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faServer } from "@fortawesome/free-solid-svg-icons";

export function Major({icon, style, title, subject}) {
    return (
        <>
            { icon === "html" && <FontAwesomeIcon icon={faHtml5} className={style} />}
            { icon === "mobile" && <FontAwesomeIcon icon={faMobile} className={style} />}
            { icon === "server" && <FontAwesomeIcon icon={faServer} className={style} />}
            <p>
                {title} <br/>
            </p>
            <p>
                {subject}
            </p>
        </>
    );
}

export function Majors() {
    const majors = [
        {
            "icon": "html",
            "style": "fa-brands fa-html5 major-icon",
            "title": "Front-end",
            "subject": "HTML, CSS, JavaScript, TypeScript, React, WebAPIs"
        },
        {
            "icon": "mobile",
            "style": "fa-solid fa-mobile major-icon",
            "title": "Mobile",
            "subject": "Android Studio, React Native, iOS, Swift, Java, Kotlin"
        },
        {
            "icon": "server",
            "style": "fa-solid fa-server major-icon",
            "title": "Back-end",
            "subject": "Java, JavaScript, Go, Kotlin, Spring, Spring Boot"
        }
    ];

    return (
        <ul className="majors">
            {majors.map(major => 
                <li className="major">
                    <Major icon={major.icon} style={major.style} title={major.title} subject={major.subject}/>
                </li>
            )}
        </ul>
    );
}