
export function Title({title}) {
    return (
        <h2 className="title">{title}</h2>
    );
}


export function Description() {
    return (
        <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Impedit quos tenetur fugiat velit beatae itaque error totam quam? 
            Quia placeat fuga alias a obcaecati. 
            Culpa at possimus consequatur eum libero!
        </p>
    )
}

export function SubTitle({title}) {
    return (
        <p className="description">{title}</p>
    );
}
