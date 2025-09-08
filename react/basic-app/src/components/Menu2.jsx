/**
 * 메뉴 컴포넌트
 */

export function Menu2({data}) {
    const {href, title, bg, color} = data;
    // console.log(props);
    
    return (
        <a href={href} className="menu" style={{color:color, background:bg}}>{title}</a>
    );
}