import { Description, Title } from "../base/Title";
import { Jobs } from "./about/Jobs";
import { Majors } from "./about/Majors";

export function About() {
    return (
        <section id="about" className="section container">
            <Title title="About"/>
            <Description />
            <Majors />
            <Jobs />
        </section>
    );
}