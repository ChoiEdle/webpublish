
export function Article({cn, title, children}) {
    return (
        <article className={cn}>
            <h3 className="skill-title">{title}</h3>
            {children}
        </article>
    );
}