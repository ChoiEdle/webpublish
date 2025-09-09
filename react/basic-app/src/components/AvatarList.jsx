import { Avatar } from "./Avatar.jsx";

export function AvatarList({className, list}) {
    return (
        <div className={className}>
            {list.map(item => 
                <Avatar img={item.img} pname={item.pname}/>
            )}
        </div>
    );
}


