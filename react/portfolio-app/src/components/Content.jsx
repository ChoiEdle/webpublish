import { About } from "./content/About.jsx";
import { Home } from "./content/Home.jsx";
import { Skills} from "./content/Skills.jsx"
import { Testimonials } from "./content/Testimonials.jsx";
import { Work } from "./content/Work.jsx";

export function Content() {
    const homeData = {
        "img": "/images/favicon.ico",
        "name": "Judy",
        "title": "Junior Developer",
        "description": "A software engineer currently residing in Seoul, South Korea"
    }
    return (
        <>
            <Home data={homeData} />
            <About />
            <Skills />
            <Work />
            <Testimonials />
        </>
    );
}