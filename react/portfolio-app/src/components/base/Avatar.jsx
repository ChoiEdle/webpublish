
export function AvatarImage({img, msg, style}) {
    return (
        <img className={style} src={img} alt={msg} />
    );
}