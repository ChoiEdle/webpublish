import { Title } from "../base/Title";
import { Coding } from "./skill/Coding";
import { Etc } from "./skill/Etc";
import { Tools } from "./skill/Tools";

export function Skill() {
    return (
        <section id="skill" className="section container">
            <Title title="My Skill" />
            <p className="description">Skills & Attributes</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Optio maiores accusamus unde soluta, magnam molestias non, 
                iste error explicabo id blanditiis earum nobis doloremque consequatur laudantium ratione cupiditate repudiandae officia.
            </p>
            <div className="skills">
                <Coding />
                <Tools />
                <Etc />
            </div>
        </section>
    );
}