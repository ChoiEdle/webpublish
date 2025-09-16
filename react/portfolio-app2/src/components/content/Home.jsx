
export function Home({data}) {
    const {img, title, name, description} = data;
    return (
        <section id="home">
            <img className="home-avatar" src={img} alt="photo" />
            <h2 className="home-title">
                Hello <br/> 
                I'm <strong className="home-title strong">{title}</strong>, {name}
            </h2>
            <p className="home-description">
                {description}
            </p>
            <a className="home-contact" href="">Contact Me</a>
        </section>
    );
}