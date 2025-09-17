import { SubTitle, Title } from "../base/Title.jsx";
// import { Categories, Projects, WorkContent } from "./WorkContent.jsx";
import { Categories } from "./Categories.jsx";
import { Projects } from "./Projects.jsx";

export function Work({data}) {
    return (
        <section id="work" className="section container">
            <Title title="My Work"/>
            <SubTitle title="Projects"/>
            <Categories categories={data.categories}/>
            <Projects projects={data.projects}/>
        </section>
    );
}



/**
 * 내가 만든것
 */
            // <WorkContent style="categories">
            //     <Categories />
            // </WorkContent>
            // <WorkContent style="projects" >
            //     <Projects />
            // </WorkContent>