import { Description, SubTitle, Title } from "../base/Title.jsx";
import { SkillsContent } from "./SkillsContent.jsx";

export function Skills() {
    return (
        <section id="skill" className="section container">
            <Title title="My Skills"/>
            <SubTitle title="Skills & Attributes"/>
            <Description />
            <SkillsContent />
        </section>
    );
}