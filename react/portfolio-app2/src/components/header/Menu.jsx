import { useState } from "react";

export function Menu({href, title, click, style}) {
    return (
        <a href={href} className={style} onClick={()=>{click(title)}}>{title}</a>
    );
}

export function MenuList({menus}) {
    const [target, setTarget] = useState("Home");
    const handleClick = (title) => {
        setTarget(title);
    }

    return (
        <nav>
            <ul className="header-menu">
                {menus && menus.map(menu => 
                    <li>
                        <Menu href={menu.href} title={menu.title} click={handleClick} style={target===menu.title ? "header-menu-item active" : "header-menu-item"} />
                    </li>
                )}
            </ul>
        </nav>
    );
}