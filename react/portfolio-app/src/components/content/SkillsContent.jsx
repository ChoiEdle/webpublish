import { List } from "../base/List.jsx";
import { Article, CodingSkills, SkillsTitle } from "./Article.jsx";

export function SkillsContent({data}) {
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills"/>
                <CodingSkills skills={data.skills}/>
            </Article>
            <Article style="skills-tools">
                <SkillsTitle title="Tools"/>
                <List titles={data.tools}/>
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="Etc"/>
                <List titles={data.etc} />
            </Article>
        </div>
    );
}