import { useState } from "react";
export function Category({style, title, count, click}) {
    return (
        <button className={style} onClick={()=>{click(title)}}>{title}<span className="category-count">{count}</span></button>
    );
}

export function Categories() {
    const [target, setTarget] = useState("All");
    const categories = [
        {
            "title":"All",
            "count":"8"
        },
        {
            "title":"Front-end",
            "count":"4"
        },
        {
            "title":"Back-end",
            "count":"2"
        },
        {
            "title":"Mobile",
            "count":"2"
        }
    ];
    const handleClick = (title) => {
        setTarget(title);
    } 
    return (
        <ul className="categories">
            {categories.map(category => 
                <li>
                    <Category title={category.title} count={category.count} style={target===category.title ? "category selected" : "category"} click={handleClick} />
                </li>
            )}
        </ul>
    );
}