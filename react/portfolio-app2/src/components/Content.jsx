import { About } from "./content/About.jsx";
import { ArrowTop } from "./content/ArrowTop.jsx";
import { Home } from "./content/Home.jsx";
import { Skill } from "./content/Skill.jsx";
import { Testimonial } from "./content/Testimonial.jsx";
import { Work } from "./content/Work.jsx";

export function Content() {
    const homeData = {
        "img": "images/favicon.ico", 
        "title": "Junior Developer", 
        "name": "Judy", 
        "description": "A software engineer currently residing in Seoul, South Korea"
    }

    return (
        <main>
            <Home data={homeData}/>
            <About />
            <Skill />
            <Work />
            <Testimonial />
            <ArrowTop />
        </main>
    );
}