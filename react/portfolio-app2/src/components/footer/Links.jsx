import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Links() {
    const links = [
        {"href":"#", "icon":"github"},
        {"href":"#", "icon":"linkedin"}
    ];
    return (
        <ul className="contact-links">
            {links && links.map(link => 
                <li>
                    <a className="contact-link" href={link.href}>{link.icon==="github" && <FontAwesomeIcon icon={faGithub}/>}</a>
                    <a className="contact-link" href={link.href}>{link.icon==="linkedin" && <FontAwesomeIcon icon={faLinkedin}/>}</a>
                </li>
            )}
        </ul>
    );
}