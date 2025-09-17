import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export function ArrowTop() {
    return (
        <aside>
            <a className="arrow-top" href="#"><FontAwesomeIcon icon={faArrowUp} /></a>
        </aside>
    );
}