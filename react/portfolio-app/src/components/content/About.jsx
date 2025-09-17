import { Description, Title } from "../base/Title.jsx";
import { Jobs } from "./Jobs.jsx";
import { Majors } from "./Majors.jsx";

export function About({data}) {
    return (
        <section id="about" className="section container">
            {/* <h2 className="title">About me</h2> */}
            <Title title="About me" />
            <Description style="description"/>
            <Majors majors={data.majors} />
            <Jobs jobs={data.jobs} />            
        </section>
    );
}