import { SubTitle, Title } from "../base/Title";
import { Categories } from "./work/Categories";
import { Projects } from "./work/Projects";

export function Work() {
    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <SubTitle title="Projects" />
            <Categories />
            <Projects />
        </section>
    );
}