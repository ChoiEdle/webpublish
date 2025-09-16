import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faMobile, faServer } from "@fortawesome/free-solid-svg-icons";

export function Major({icons, title, subject, style}) {
    return (
        <>
            { icons === "html" && <FontAwesomeIcon icon={faHtml5} className={style} />}
            { icons === "mobile" && <FontAwesomeIcon icon={faMobile} className={style} />}
            { icons === "server" && <FontAwesomeIcon icon={faServer} className={style} />}
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
            "icons":"html",
            "title":"Front-end",
            "subject":"HTML, CSS, JavaScript, TypeScript, React, WebAPIs",
            "style":"fa-brands fa-html5 major-icon"
        },
        {
            "icons":"mobile",
            "title":"Mobile",
            "subject":"Android Studio, React Native, iOS, Swift, Java, Kotlin",
            "style":"fa-solid fa-mobile major-icon"
        },
        {
            "icons":"server",
            "title":"Back-end",
            "subject":"Java, JavaScript, Go, Kotlin, Spring, Spring Boot",
            "style":"fa-solid fa-server major-icon"
        }
    ]; 

    return (
        <ul className="majors">
            {majors && majors.map(major => 
                <li className="major">
                    <Major icons={major.icons} title={major.title} subject={major.subject} style={major.style} />
                </li>
            )}
        </ul>
    );
}