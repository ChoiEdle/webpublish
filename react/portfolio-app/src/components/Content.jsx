import { About } from "./content/About.jsx";
import { ArrowTop } from "./content/ArrowTop.jsx";
import { Home } from "./content/Home.jsx";
import { Skills} from "./content/Skills.jsx"
import { Testimonials } from "./content/Testimonials.jsx";
import { Work } from "./content/Work.jsx";

export function Content({data}) {
    return (
        <>
            <Home data={data.home} />
            <About data={data.about} />
            <Skills data={data.skills} />
            <Work data={data.work} />
            <Testimonials testimonials={data.testimonials} />
            <ArrowTop />
        </>
    );
}