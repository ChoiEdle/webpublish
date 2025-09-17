import { AvatarImage } from "../base/Avatar.jsx";
import { SubTitle, Title } from "../base/Title.jsx";

export function Testimonials({testimonials}) {
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle title="See What they say about me" />
            <ul className="testimonials">
                {testimonials && testimonials.map(testimonial =>
                    <li className="testimonial">
                        <AvatarImage img={testimonial.img} msg={testimonial.alt} style="testimonial-img"/>
                        <div className="testimonial-text">
                            <p>{testimonial.description}</p>
                            <p><a className="testimonial-text-name" href="#">{testimonial.name}</a> / {testimonial.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}