import { SubTitle, Title } from "./base/Title.jsx";
import { Links } from "./footer/Links.jsx";

export function Footer() {
    return (
        <footer>
            <section id="contact" className="footer">
                <Title title="Let's Talk" />
                <SubTitle title="com.developer.judy@gmail.com" />
                <Links />
                <p>Junior Software Engineer Judy's Portfolio - All right reserved</p>
            </section>
        </footer>
    );
}