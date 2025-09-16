import { useState } from "react";

export function Menu({href, title, click, style}) {
    return (
        <a href={href} className={style} onClick={()=>{click(title)}}>{title}</a>
    );
}

export function MenuList() {
    const [target, setTarget] = useState("Home");
    const menus = [
        {"href": "#home", "title": "Home"},
        {"href": "#about", "title": "About"},
        {"href": "#skill", "title": "Skill"},
        {"href": "#work", "title": "My Work"},
        {"href": "#testimonial", "title": "Testimonial"},
        {"href": "#contact", "title": "Contact"}
    ];
    const handleClick = (title) => {
        setTarget(title);
    }

    return (
        <nav>
            <ul className="header-menu">
                {menus.map(menu => 
                    <li>
                        <Menu href={menu.href} title={menu.title} click={handleClick} style={target===menu.title ? "header-menu-item active" : "header-menu-item"} />
                    </li>
                )}
            </ul>
        </nav>
    );
}