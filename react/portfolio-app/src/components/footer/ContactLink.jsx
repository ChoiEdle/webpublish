import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ContactLink({links}) {
    return (
        <ul className="contact-links">
            {links && links.map(link =>
                <li>
                    <a className="contact-link" href={link.href}>{link.type==="github" && <FontAwesomeIcon icon={faGithub} />}</a>
                    <a className="contact-link" href={link.href}>{link.type==="linkedin" && <FontAwesomeIcon icon={faLinkedin} /> }</a>
                </li>
            )}
        </ul>
    );
}