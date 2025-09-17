import { AvatarImage } from "../base/Avatar.jsx";
import { SubTitle, Title } from "../base/Title.jsx";

export function Testimonials() {
    const testimonials = [
        {
            "img":"/images/testimonials/people1.webp",
            "alt":"people1",
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name":"James Kim",
            "company":"Google"
        },
        {
            "img":"/images/testimonials/people2.webp",
            "alt":"people2",
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name":"Smith Park",
            "company":"Samsung"
        },
        {
            "img":"/images/testimonials/people3.webp",
            "alt":"people3",
            "description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name":"Anna Lee",
            "company":"Samsung"
        }
    ];
    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial" />
            <SubTitle title="See What they say about me" />
            <ul class="testimonials">
                {testimonials && testimonials.map(testimonial =>
                    <li class="testimonial">
                        <AvatarImage img={testimonial.img} msg={testimonial.alt} style="testimonial-img"/>
                        <div class="testimonial-text">
                            <p>{testimonial.description}</p>
                            <p><a class="testimonial-text-name" href="#">{testimonial.name}</a> / {testimonial.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}