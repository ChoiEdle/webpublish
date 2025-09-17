import { List } from "../base/List.jsx";
import { Description, SubTitle, Title } from "../base/Title.jsx";
import { Article } from "./skill/Article.jsx";
import { Coding } from "./skill/Coding.jsx";

export function Skill() {
    const tools = ["Visual Studio Code", "IntelliJ", "Android Studio", "Eclips", "MySQL Workbench"];
    const etc = ["Git", "Scrum Master", "SVN"];
    return (
        <section id="skill" className="section container">
            <Title title="My Skill" />
            <SubTitle title="Skills & Attributes" />
            <Description />
            <div className="skills">
                <Article title="Coding Skills" cn="skills-coding">
                    <Coding />
                </Article>
                <Article title="Tools" cn="skills-tools">
                    <List titles={tools} />
                </Article>
                <Article title="Etc" cn="skills-etc">
                    <List titles={etc} />
                </Article>
            </div>
        </section>
    );
}