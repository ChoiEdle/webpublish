
// export function MyButton(props) {
//     return (
//         <button type="button" className="mybutton">{props.name}</button>
//     );
// }

export function MyButton({name, type, style, handleProps}) {   //구조분해할당:구조분해할당할땐 이름이 같아야함
    const handleClick = () => {
        alert(`버튼 클릭! --> ${name}`);
        handleProps(`버튼 클릭! --> ${name}`);
        console.log(`(자식)버튼 클릭! --> ${name}`);
        
    }

    return (
        <button type={type} className={style} onClick={handleClick}>{name}</button>
    );
}

