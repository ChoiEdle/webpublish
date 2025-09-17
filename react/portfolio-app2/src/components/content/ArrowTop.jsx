import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ArrowTop() {
    return (
        <aside>
            <a class="arrow-top" href="#"><FontAwesomeIcon icon={faArrowUp}/></a>
        </aside>
    );
}