export default function Avatar({img, pname}) {
    return (
        <div className="avatar">
            <AvatarImage img={img} style="avatar-img-circle"/>
            <p>{pname}</p>
        </div>
    );
}

export function AvatarList({className, list}) {
    return (
        <div className={className}>
            {list.map((item, i) => 
                <Avatar key={i} img={item.img} pname={item.pname}/>
            )}
        </div>
    );
}

export function AvatarImage({img, style}) {
    return (
        <img src={img} className={style} />
    );
}

export function AvatarImageList({imgList}) {
    return (
        <>
            {imgList.map((item, i) => 
                <img key={i} src={item.img} className={item.style} />
            )}
        </>
    );
}
