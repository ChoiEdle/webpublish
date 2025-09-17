import { List } from "../base/List.jsx";
import { Article, CodingSkills, SkillsTitle } from "./Article.jsx";

export function SkillsContent() {
    const tools = ["Visual Studio Code", "IntelliJ", "Android Studio", "Eclips", "MySQL Workbench"];
    const etc = ["Git", "Scrum Master", "SVN"];
    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills"/>
                <CodingSkills />
            </Article>
            <Article style="skills-tools">
                <SkillsTitle title="Tools"/>
                <List titles={tools}/>
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="Etc"/>
                <List titles={etc} />
            </Article>
        </div>
    );
}