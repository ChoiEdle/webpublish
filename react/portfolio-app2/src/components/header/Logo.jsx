
export function Logo({img, msg, name}) {
    return (
        <div className="header-logo">
            <img className="header-logo-img" src={img} alt={msg} />
            <h1 className="header-logo-title">{name}</h1>
        </div>
    );
}