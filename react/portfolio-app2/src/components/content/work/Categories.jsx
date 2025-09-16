
export function Categories() {
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
    return (
        <ul className="categories">
            {categories.map(category => 
                <li><button className="category">{category.title}<span className="category-count">{category.count}</span></button></li>
            )}
        </ul>
    );
}