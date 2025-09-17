import { SubTitle, Title } from "../base/Title";

export function Testimonial() {
    const testimonials = [
        {
            "img": "/images/testimonials/people1.webp",
            "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name": "James Kim",
            "compony": "Google"
        },
        {
            "img": "/images/testimonials/people2.webp",
            "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name": "Smith Park",
            "compony": "Samsung"
        },
        {
            "img": "/images/testimonials/people3.webp",
            "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quam hic repellendus repudiandae fuga earum? Voluptatum, at reprehenderit quasi unde sunt ratione asperiores molestias laborum animi nemo aspernatur eaque porro.",
            "name": "Anna Lee",
            "compony": "Samsung"
        }
    ];
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle title="See What they say about me" />
            <ul className="testimonials">
                {testimonials && testimonials.map(testimonial =>
                    <li className="testimonial">
                        <img className="testimonial-img" src={testimonial.img} alt="testimonial-img"/>
                        <div className="testimonial-text">
                            <p>{testimonial.desc}</p>
                            <p><a className="testimonial-text-name" href="#">{testimonial.name}</a> / {testimonial.compony}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}