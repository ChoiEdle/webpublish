import { Title } from "../base/Title";
import { Categories } from "./work/Categories";
import { Projects } from "./work/Projects";

export function Work() {
    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <p className="description">Projects</p>
            <Categories />
            <Projects />
        </section>
    );
}